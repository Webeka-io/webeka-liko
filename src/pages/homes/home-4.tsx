"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";

// ⚠️ important: ne pas initialiser Smoother sur mobile/low-end
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import FooterFour from "@/layouts/footers/footer-four";

// ❗️Dynamically split les sections « lourdes » (SSR OK, hydratation au besoin)
const GalleryOne   = dynamic(() => import("@/components/gallery/gallery-one"),   { ssr: true, loading: () => null });
const AboutThree   = dynamic(() => import("@/components/about/about-three"),     { ssr: true, loading: () => null });
const ProjectFour  = dynamic(() => import("@/components/project/project-four"),  { ssr: true, loading: () => null });
const ContactOne   = dynamic(() => import("@/components/contact/contact-one"),   { ssr: true, loading: () => null });
const ServiceMain  = dynamic(() => import("@/pages/service/service-2"),          { ssr: true, loading: () => null });

// animations utilitaires (on garde les tiennes mais on les appelle de façon conditionnelle)
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne, charAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

/* ========= Helpers ========= */

// Monte un enfant seulement lorsqu'il entre dans le viewport (hydratation différée)
const ViewportMount: React.FC<React.PropsWithChildren<{ rootMargin?: string }>> = ({ children, rootMargin = "200px" }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [rootMargin]);

  // content-visibility pour éviter le coût layout/paint hors-écran
  return (
    <div
      ref={ref}
      style={{
        // @ts-ignore – TS ne connaît pas encore bien cette prop
        contentVisibility: mounted ? "visible" : "auto",
        containIntrinsicSize: "1000px 800px",
      }}
    >
      {mounted ? children : null}
    </div>
  );
};

// Détecte si on doit activer un mode « lite » (mobile, low-end, économie de données, reduced motion)
function useLiteMode() {
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const mmCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hc = (navigator as any).hardwareConcurrency;
    const dm = (navigator as any).deviceMemory;
    const conn: any = (navigator as any).connection;
    const lowCPU = typeof hc === "number" && hc <= 4;
    const lowMem = typeof dm === "number" && dm <= 4;
    const saveData = !!conn?.saveData;
    const slowNet = ["slow-2g", "2g", "3g"].includes(conn?.effectiveType);

    // Lite si mobile OU reduced motion OU device/connexion modestes
    setLite(mmCoarse || reduced || lowCPU || lowMem || saveData || slowNet);
  }, []);

  return lite;
}

/* ========= Page ========= */

const HomeFourMain = () => {
  const liteMode = useLiteMode();

  // ⚠️ On n'active la classe smooth-scroll et ScrollSmoother QUE hors liteMode
  useEffect(() => {
    if (!liteMode) {
      document.body.classList.add("tp-smooth-scroll");
      // Initialiser GSAP ScrollSmoother seulement sur desktop « costaud »
      // @ts-ignore
      const smoother = ScrollSmoother?.create?.({
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
      });

      return () => {
        document.body.classList.remove("tp-smooth-scroll");
        try {
          smoother?.kill?.();
        } catch {}
      };
    } else {
      // En mode lite, s’assurer que la classe n’est pas posée
      document.body.classList.remove("tp-smooth-scroll");
    }
  }, [liteMode]);

  // Orchestration des animations : « full » sur desktop, « light » sur mobile
  useGSAP(
    () => {
      const timer = setTimeout(() => {
        if (liteMode) {
          // Mobile/low-end : animations minimales et compositées
          fadeAnimation?.();           // doux (opacity/transform)
          ctaAnimation?.();            // court
          // on évite charAnimation + projectThreeAnimation trop coûteux
          // et on ne lance pas SplitText lourds
          textInvert?.();
        } else {
          // Desktop : tout le show
          fadeAnimation?.();
          revelAnimationOne?.();
          projectThreeAnimation?.();
          ctaAnimation?.();
          textInvert?.();
          charAnimation?.();
        }
      }, 100);
      return () => clearTimeout(timer);
    },
    { dependencies: [liteMode] }
  );

  return (
    <Wrapper>
      {/* header */}
      <HeaderFour />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero – rendu immédiat */}
            <HeroBannerFour />

            {/* Sections hydratées au viewport pour réduire le coût initial sur mobile */}
            <ViewportMount>
              <GalleryOne />
            </ViewportMount>

            <ViewportMount>
              <AboutThree />
            </ViewportMount>

            <ViewportMount>
              <ServiceMain />
            </ViewportMount>

            <ViewportMount>
              <ProjectFour />
            </ViewportMount>

            <ViewportMount>
              <ContactOne />
            </ViewportMount>
          </main>

          <FooterFour />
        </div>
      </div>

      {/* Styles minimaux pour lisser le scroll & limiter le travail GPU sur mobile */}
      <style jsx global>{`
        /* Désactive les animations pour utilisateurs qui le demandent */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Évite le repaint massif des backgrounds fixes sur mobile */
        @media (hover: none) and (pointer: coarse) {
          .has-parallax,
          .bg-fixed {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default HomeFourMain;
