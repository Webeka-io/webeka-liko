"use client";
import React, { useEffect } from "react";
import ThemeSetting from "@/components/theme-setting";
import { setupGSAP } from "@/utils/gsap-setup";
import { ScrollTrigger } from "@/plugins";
import Router from "next/router";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop = true }: WrapperProps) => {
  useEffect(() => {
    // Init global GSAP config (ignoreMobileResize, lagSmoothing, etc.)
    setupGSAP();

    // Refresh ScrollTrigger après navigation (laisse le DOM se stabiliser)
    const onRoute = () => {
      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      }, 150);
    };
    Router.events.on("routeChangeComplete", onRoute);

    return () => {
      Router.events.off("routeChangeComplete", onRoute);
    };
  }, []);

  return (
    <>
      {children}
      {/* {showBackToTop && <BackToTop />} */}
      <ThemeSetting />
    </>
  );
};

export default Wrapper;
