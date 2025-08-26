// src/app/(portfolio-details)/portfolio-details-comparison/page.tsx
import type { Metadata } from "next";
import PortfolioDetailsComparisonMain from "@/pages/portfolio/portfolio-details-comparison-main"; // ← on changera l'import au Patch 3

export const metadata: Metadata = {
  title: "Liko - Portfolio Details Comparison page",
};

// (Optionnel pour contourner les soucis de prerender sur le contenu dynamique)
export const dynamic = "force-dynamic"; // ou: export const revalidate = 0;

export default function PortfolioDetailsComparisonPage() {
  return <PortfolioDetailsComparisonMain />;
}
