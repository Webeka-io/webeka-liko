"use client";
import Wrapper from "@/layouts/wrapper";
import FooterFour from "@/layouts/footers/footer-four";
import HeaderFour from "@/layouts/headers/header-four";
import { useState } from "react";




type RDAPInfo = {
  registered: boolean | null;
  registrar?: string;
  createdAt?: string;
  expiresAt?: string;
  status?: string[];
  source?: string;
};

type DNSInfo = {
  hasAnyRecords: boolean;
  records: {
    A: string[];
    AAAA: string[];
    MX: { exchange: string; priority: number }[];
    CNAME: string[];
    NS: string[];
    TXT: string[];
  };
};

type ApiResponse =
  | {
      input: string;
      ascii: string;
      unicode: string;
      valid: true;
      rdap: RDAPInfo;
      dns: DNSInfo;
      message?: string;
    }
  | {
      input?: string;
      ascii?: string;
      unicode?: string;
      valid: false;
      message: string;
    }
  | { error: string };

function fmt(date?: string) {
  if (!date) return "—";
  try {
    return new Date(date).toLocaleString();
  } catch {
    return date;
  }
}

export default function DomainCheckPage() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setData(null);
    setLoading(true);

    try {
      const res = await fetch("/api/domain", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      const json = (await res.json()) as ApiResponse;
      if (!res.ok) {
        setError((json as any)?.error ?? "Erreur lors de la requête.");
      } else {
        setData(json);
      }
    } catch (err: any) {
      setError(err?.message ?? "Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

 

  return (
     <Wrapper>

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">

    <main className=" min-vh-100">
      <div className="container py-5 mb-150">
        <h1 className="display-6 fw-semibold">Vérification de nom de domaine</h1>
        <p className="text-muted">
          Entrez un domaine (ex. <code>mon-site.fr</code>) pour vérifier son format,
          son statut RDAP et quelques enregistrements DNS.
        </p>

        <form onSubmit={onSubmit} className="mt-4">
          <div className="input-group input-group-lg">
            <input
              type="text"
              inputMode="url"
              className="form-control"
              placeholder="ex. café.fr"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
              aria-label="Nom de domaine"
            />
            <button
              type="submit"
              className="btn btn-dark"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Analyse...
                </>
              ) : (
                "Vérifier"
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {data && "valid" in data && !data.valid && (
          <div className="alert alert-warning mt-3" role="alert">
            <div className="fw-medium">Format invalide</div>
            <div>{data.message}</div>
          </div>
        )}

        {data && "valid" in data && data.valid && (
          <section className="mt-4 d-grid gap-4">
            {/* Résumé */}
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
                  <div>
                    <div className="text-muted small">Domaine saisi</div>
                    <div className="h5 mb-0">{data.input}</div>
                    {data.ascii !== data.unicode && (
                      <div className="text-muted mt-1">
                        (IDN)&nbsp;ASCII:&nbsp;<code>{data.ascii}</code>
                        &nbsp;•&nbsp;Unicode:&nbsp;<code>{data.unicode}</code>
                      </div>
                    )}
                  </div>

                  <span
                    className={
                      "badge rounded-pill fs-6 text-wrap " +
                      (data.rdap.registered === true
                        ? "text-bg-danger"
                        : data.rdap.registered === false
                        ? "text-bg-success"
                        : "text-bg-secondary")
                    }
                  >
                    {data.rdap.registered === true
                      ? "Déjà enregistré"
                      : data.rdap.registered === false
                      ? "Disponible"
                      : "Statut RDAP indéterminé"}
                  </span>
                </div>

                <div className="text-muted small mt-3">
                  * RDAP : un code 404/422 signifie généralement “non trouvé”
                  donc “disponible”. Pour une certitude absolue,
                  utilisez l’API de votre bureau d’enregistrement.
                </div>
              </div>
            </div>

            {/* Détails RDAP */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h6 mb-3">Détails RDAP</h2>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">Registrar</div>
                    <div className="fw-semibold">
                      {data.rdap.registrar ?? "—"}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">Créé le</div>
                    <div className="fw-semibold">{fmt(data.rdap.createdAt)}</div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">Expire le</div>
                    <div className="fw-semibold">{fmt(data.rdap.expiresAt)}</div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">Statuts</div>
                    <div className="fw-semibold">
                      {data.rdap.status && data.rdap.status.length
                        ? data.rdap.status.join(", ")
                        : "—"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Détails DNS */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h6 mb-1">Détails DNS</h2>
                <p className="text-muted small mb-3">
                  {data.dns.hasAnyRecords
                    ? "Des enregistrements ont été trouvés."
                    : "Aucun enregistrement courant détecté."}
                </p>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">A</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.A, null, 2)}
                    </pre>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">AAAA</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.AAAA, null, 2)}
                    </pre>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">MX</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.MX, null, 2)}
                    </pre>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">CNAME</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.CNAME, null, 2)}
                    </pre>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">NS</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.NS, null, 2)}
                    </pre>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-muted small">TXT</div>
                    <pre className="bg-light p-3 border rounded small mb-0">
                      {JSON.stringify(data.dns.records.TXT, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
               
    </main>
    
              {/* footer area */}
              <FooterFour />
              {/* footer area */}
            </div>
          </div>
        </Wrapper>
  );
};