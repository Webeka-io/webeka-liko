import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape from '@/assets/img/home-03/about/ab-shape-img-avocat.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";
 
export default function AboutThree() {
  return (
    <div className="tp-about-3-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span><FirstBracket /></span>
                <span className="tp-subtitle-text tp_text_invert">Notre promesse</span>
                <span><FirstBracketTwo /></span>
              </span>

              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom mb-50">
                Le site professionnel de votre cabinet d'avocat.
              </h4>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
  <div className="col-xl-6 col-lg-6 col-md-4">
    <div className="tp-about-3-shape text-lg-start ">
      <Image
        src={shape}
        alt="shape"
        className="img-fluid d-inline-block d-lg-block ml-30"
        style={{
          height: "140px",
          width: "140px",
        }}
      />
    </div>
  </div>


          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 mt-20 tp_fade_bottom">
                Nous créons des sites modernes pour cabinets d’avocats : élégants, clairs et pensés pour inspirer confiance.
              </p>

              <p className="mb-45 tp_fade_bottom">
                Chaque détail est conçu pour valoriser votre expertise juridique, améliorer votre visibilité et faciliter la prise de contact de vos clients.
              </p>

              <Link className="tp-btn-black-2" href="/contact">
                Commencer
                <span className="p-relative"><RightArrowTwo /><ArrowBg /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
