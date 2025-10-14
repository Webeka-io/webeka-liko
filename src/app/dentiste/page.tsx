"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-dentiste";
import HeroBannerFour from "@/components/hero-banner/hero-banner-dentiste";
import AboutThree from "@/components/about/about-dentiste";
import ProjectFour from "@/components/project/project-dentiste";
import ContactOne from "@/components/contact/contact-dentiste";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import ServiceMain from "@/pages/service/service-dentiste";
import LoadingScreen from "@/components/loading/LoadingScreen";



const HomeFourMain = () => {


  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation(); 
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });


  
   return (
    <Wrapper>
      {/* Loader (white/black) */}
      <LoadingScreen
  title={'Webeka'}
  color="#111"
  background="#fff"
  logoSrc="/assets/img/logo/logo.png"
  logoAlt="Webeka"
  logoWidth={200}
/>


      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* service area */}
            <ServiceMain />
            {/* service area */}    

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
