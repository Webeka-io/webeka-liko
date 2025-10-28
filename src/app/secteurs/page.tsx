"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import ContactCalendly from "@/components/Calendlyform/ContactCalendly";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import LoadingScreen from "@/components/loading/LoadingScreen";
import SectorsPage from "@/components/Secteurs/Secteur1";



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

              {/* Secteurs start */}
      <SectorsPage />
      {/* Secteurs end */}

             {/* hero area start */}
                          <div className="tm-hero-area tm-hero-ptb p-relative">
                            <div className="container">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="tm-hero-content">
                                    <span className="tm-hero-subtitle">Webeka</span>
                                    <h4 className="tm-hero-title-big tp_reveal_anim">
                                      Réservation
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* hero area end */}
            
                          {/* contact area start */}
                          <ContactCalendly />
                          {/* contact area end */}

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
