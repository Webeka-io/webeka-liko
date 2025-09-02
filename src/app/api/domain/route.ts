// app/api/domain/route.ts
import { NextRequest } from "next/server";
import dns from "node:dns/promises";
import { toASCII, toUnicode } from "node:punycode";

export const runtime = "nodejs"; // Important: on veut l'API Node (dns, etc.)

type RDAPEvent = { eventAction?: string; eventDate?: string };
type RDAPEntity = { roles?: string[]; vcardArray?: any };
type RDAPResponse = {
  ldhName?: string;
  unicodeName?: string;
  status?: string[];
  events?: RDAPEvent[];
  entities?: RDAPEntity[];
};

function isValidDomain(ascii: string): boolean {
  if (!ascii) return false;
  if (ascii.length > 253) return false;

  const labels = ascii.split(".");
  if (labels.length < 2) return false; // exige un TLD

  const labelRegex = /^[a-z0-9-]{1,63}$/i;
  for (const label of labels) {
    if (!labelRegex.test(label)) return false;
    if (label.startsWith("-") || label.endsWith("-")) return false;
  }
  return true;
}

function pickEvent(events: RDAPEvent[] | undefined, action: string) {
  return events?.find((e) => e.eventAction?.toLowerCase() === action)?.eventDate;
}

function safeJoinTXT(txt: string[][]) {
  // Chaque TXT est un tableau de fragments; on les joint
  return txt.map((t) => t.join("")).slice(0, 50); // garde jusqu’à 50 entrées pour rester raisonnable
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawInput = String(body?.domain ?? "").trim();

    if (!rawInput) {
      return Response.json(
        { error: "Champ 'domain' requis." },
        { status: 400 }
      );
    }

    // Normalisation IDN → ASCII (punycode)
    const ascii = toASCII(rawInput.toLowerCase());
    const unicode = toUnicode(ascii);

    const valid = isValidDomain(ascii);
    if (!valid) {
      return Response.json({
        input: rawInput,
        ascii,
        unicode,
        valid: false,
        message:
          "Format de domaine invalide. Vérifiez les caractères et le TLD.",
      });
    }

    // 1) RDAP: essaie https://rdap.org/domain/<domaine>
    let rdapInfo: {
      registered: boolean | null;
      registrar?: string;
      createdAt?: string;
      expiresAt?: string;
      status?: string[];
      source?: "rdap.org";
    } = { registered: null };

    try {
      const r = await fetch(`https://rdap.org/domain/${ascii}`, {
        headers: { accept: "application/rdap+json" },
        cache: "no-store",
      });

      if (r.status === 200) {
        const data = (await r.json()) as RDAPResponse;
        const registrar =
          data.entities
            ?.find((e) => e.roles?.includes("registrar"))
            ?.vcardArray?.[1]
            ?.find((v: any[]) => v?.[0] === "fn")?.[3] ?? undefined;

        rdapInfo = {
          registered: true,
          registrar,
          createdAt: pickEvent(data.events, "registration"),
          expiresAt: pickEvent(data.events, "expiration"),
          status: data.status ?? [],
          source: "rdap.org",
        };
      } else if (r.status === 404 || r.status === 422) {
        // 404 → non trouvé chez RDAP → probablement disponible
        rdapInfo = { registered: false, source: "rdap.org" };
      } else {
        // Autre code (p.ex. TLD non supporté par rdap.org)
        rdapInfo = { registered: null, source: "rdap.org" };
      }
    } catch {
      rdapInfo = { registered: null, source: "rdap.org" };
    }

    // 2) DNS: on tente quelques résolutions (ne prouve pas l’enregistrement)
    const records: {
      A: string[];
      AAAA: string[];
      MX: { exchange: string; priority: number }[];
      CNAME: string[];
      NS: string[];
      TXT: string[];
    } = { A: [], AAAA: [], MX: [], CNAME: [], NS: [], TXT: [] };

    await Promise.all([
      dns.resolve(ascii, "A").then((a) => (records.A = a)).catch(() => {}),
      dns.resolve(ascii, "AAAA")
        .then((a) => (records.AAAA = a))
        .catch(() => {}),
      dns.resolveMx(ascii)
        .then((mx) => (records.MX = mx))
        .catch(() => {}),
      dns.resolveCname(ascii)
        .then((c) => (records.CNAME = c))
        .catch(() => {}),
      dns.resolveNs(ascii).then((ns) => (records.NS = ns)).catch(() => {}),
      dns.resolveTxt(ascii)
        .then((txt) => (records.TXT = safeJoinTXT(txt)))
        .catch(() => {}),
    ]);

    const hasAnyRecords =
      records.A.length ||
      records.AAAA.length ||
      records.MX.length ||
      records.CNAME.length ||
      records.NS.length ||
      records.TXT.length
        ? true
        : false;

    return Response.json({
      input: rawInput,
      ascii,
      unicode,
      valid: true,
      rdap: rdapInfo,
      dns: { hasAnyRecords, records },
    });
  } catch (err: any) {
    return Response.json(
      { error: err?.message ?? "Erreur inattendue." },
      { status: 500 }
    );
  }
}
