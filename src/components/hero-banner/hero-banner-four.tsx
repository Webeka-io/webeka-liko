'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { BounceArrowIcon } from "../BounceArrow/BounceArrow";
import BrandSlider from "../brand/brand-slider";


export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape my-custom-circle">
                <span></span>
              </div>
              <h4 className=" tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Un Site Web</span> <br />
                <span className="tp-reveal-line">Vraiment Simple</span>
              </h4>

              <span className=" md : d-none d-md-block tp-hero-3-category tp_reveal_anim ">
                Site premium • Création rapide • Sans engagement
              </span>
              
            {/* Mobile Avantages */}
            <div className="d-block d-md-none text-center">
  <div className="d-inline-block text-start tp-hero-3-category">
    <div className="d-flex">
      <span className="me-2">•</span>
      <span>Site premium</span>
    </div>
    <div className="d-flex">
      <span className="me-2">•</span>
      <span>Création rapide</span>
    </div>
    <div className="d-flex">
      <span className="me-2">•</span>
      <span>Sans engagement</span>
    </div>
  </div>
</div>





          
              <Link className="tp-btn-black-2" href="/contact">
                C&apos;est parti{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
            <BrandSlider />

            {/* Flèches animées */}
              <BounceArrowIcon text="Explorer" />

          </div>
        </div>

        
      </div>
    </div>
  );
}
