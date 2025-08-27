"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
// ajoute d'autres plugins si besoin (SplitText, ScrollSmoother, etc.)
// import { SplitText } from "@/plugins";

gsap.registerPlugin(ScrollTrigger /*, SplitText */);

let configured = false;
export function setupGSAP() {
  if (configured) return;
  configured = true;

  // ÉTAPE 2 — Config ScrollTrigger globale (évite refresh inutiles)
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });

  // ÉTAPE 3 — Lissage du ticker (réduit les à-coups)
  gsap.ticker.lagSmoothing(500, 33);

  // Bonus: baisser la cadence quand l’onglet est masqué
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      gsap.ticker.fps(document.hidden ? 20 : 60);
    });
  }
}
