"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "@/plugins";

type Options = { enabled?: boolean };

export default function useScrollSmooth(options: Options = {}) {
  const { enabled = true } = options;
  const createdRef = useRef(false);

  useGSAP(
    () => {
      // Si désactivé → supprimer un éventuel smoother et sortir
      if (!enabled) {
        const s = ScrollSmoother.get();
        if (s) s.kill();
        createdRef.current = false;
        document.body.classList.remove("tp-smooth-scroll");
        return;
      }

      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");

      if (smoothWrapper && smoothContent && !createdRef.current && !ScrollSmoother.get()) {
        gsap.config({ nullTargetWarn: false });

        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,            // fluide sur desktop
          effects: true,
          smoothTouch: 0.1,     // léger effet sur écrans tactiles si jamais activé
          normalizeScroll: false,
          ignoreMobileResize: true,
        });

        createdRef.current = true;
        document.body.classList.add("tp-smooth-scroll");
      }

      // Cleanup à la destruction du composant OU quand enabled passe à false
      return () => {
        const s = ScrollSmoother.get();
        if (s) s.kill();
        createdRef.current = false;
        document.body.classList.remove("tp-smooth-scroll");
      };
    },
    { dependencies: [enabled] }
  );

  // Ce useEffect protège si le DOM ajoute/retire #smooth-wrapper dynamiquement
  useEffect(() => {
    if (!enabled) return;
    const el = document.getElementById("smooth-wrapper");
    if (!el) return;

    return () => {
      const s = ScrollSmoother.get();
      if (s) s.kill();
      createdRef.current = false;
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, [enabled]);
}
