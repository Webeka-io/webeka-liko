import type { Metadata } from "next";
import { Syne, Aladin, Big_Shoulders_Display, Marcellus } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.scss";

import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import SiteWideBanner from "@/components/site_banner/SiteWideBanner";

// ✅ NEW: Provider global de la modale d’offre
import { OfferModalProvider } from "@/components/offer_modal/OfferModalContext";

/* ==================== FONTS ==================== */
const gellery = localFont({
  src: [
    { path: "../../public/assets/fonts/gallerymodern-webfont.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/gallerymodern-webfont.woff", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/gallerymodern-webfont.woff2", weight: "400", style: "normal" },
  ],
  variable: "--tp-ff-gallery",
});
const aladin = Aladin({ weight: ["400"], subsets: ["latin"], variable: "--tp-ff-aladin" });
const syne_body = Syne({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--tp-ff-body" });
const syne_heading = Syne({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--tp-ff-heading" });
const syne_p = Syne({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--tp-ff-p" });
const syne = Syne({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--tp-ff-syne" });
const big_shoulders = Big_Shoulders_Display({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--tp-ff-shoulders" });
const marcellus = Marcellus({ weight: ["400"], subsets: ["latin"], variable: "--tp-ff-marcellus" });

/* ==================== SEO / META ==================== */
export const metadata: Metadata = {
  title: "Webeka.fr - Agence de création de sites Web",
  description: "Création de site simples",
  openGraph: {
    type: "website",
    url: "https://webeka.fr",
    images: [{ url: "/og-default.webp", width: 1200, height: 630, alt: "Aperçu Webeka.fr" }],
  },
};

/* ==================== LAYOUT ==================== */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        id="body"
        suppressHydrationWarning
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable} site-bg-warm`}
      >
        {/* 💬 Provider global -> permet d’ouvrir la même modale depuis tous les CTA */}
        <OfferModalProvider>
          {/* 🔔 Banderole globale (ouvre la modale) */}
          <SiteWideBanner />

          {/* ✅ Bouton WhatsApp flottant */}
          <WhatsAppButton phoneE164="+33603261137" />

          {/* ✅ Thème + contenu principal */}
          <ThemeProvider defaultTheme="light">{children}</ThemeProvider>

          {/* ✅ Analytics */}
          <Analytics />

          {/* ✅ Effet verre diffusé (optionnel) */}
          <div className="page-glass-feather" aria-hidden="true" />
        </OfferModalProvider>
      </body>
    </html>
  );
}
