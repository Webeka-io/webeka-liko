"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ProjectThree from "@/components/project/project-three";

// animation
import { panelTwoAnimation } from "@/utils/panel-animation";
import { charAnimation, revelAnimationTwo, titleAnimation } from "@/utils/title-animation";

const PortfolioShowcaseMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      panelTwoAnimation();
      revelAnimationTwo();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
  

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio area */}
            <ProjectThree />
            {/* portfolio area */}
          </main>

        
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioShowcaseMain;
