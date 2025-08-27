'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

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
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Un site web</span> <br />
                <span className="tp-reveal-line">Vraiment simple.</span>
              </h4>

              <span className=" md : d-none d-md-block tp-hero-3-category tp_reveal_anim ">
                Création gratuite • 199€/an • Zéro complication
              </span>
              
            {/* Mobile Avantages */}
              <span className="mx-auto  w-75 ms-7 text-start d-block d-md-none tp-hero-3-category tp_reveal_anim ">
                • Création gratuite <br /> • 199€/an <br /> • Zéro complication
              </span>

          
              <Link className="tp-btn-black-2" href="/contact">
                C&apos;est parti{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
