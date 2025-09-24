import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import Link from "next/link";

export default function ContactOne() {
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Parlons <br />
              <span>Enssemble</span>
            </h4>

            <p className="tp_fade_bottom">
              Un site dentaire professionnel, sans prise de tête.
              Intégration Doctolib, mobile-first, informations claires pour rassurer vos patients.
            </p>

            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>

            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative mr-10" href="/contact">
                <span className="zikzak-content">
                  Je <br /> commence
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
