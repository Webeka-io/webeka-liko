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
import ContactOne from "@/components/Calendlyform/ContactCalendly";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne, } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import ContactTwo from "@/components/contact/contact-two";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { charAnimation } from "@/utils/title-animation";
import ContactCalendly from "@/components/Calendlyform/ContactCalendly";


const ContactMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

        {/* Loader (white/black) */}
             <LoadingScreen
         title={'Webeka'}
         color="#"
         background="#"
         logoSrc="/assets/img/logo/logo.png"
         logoAlt="Webeka"
         logoWidth={200}
       />

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle text-gold1">Webeka</span>
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
            </main>

            {/* footer area */}
              <FooterFour />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


export default ContactMain;
