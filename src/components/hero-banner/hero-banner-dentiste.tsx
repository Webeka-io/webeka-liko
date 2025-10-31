'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { BounceArrowIcon } from "../BounceArrow/BounceArrow";
import RatingStrip from "../RatingStrip";
import Image from "next/image";
import logoSourire from "@/assets/img/dentiste/logo_sourire.png"
import OfferButton from '@/components/offer_modal/OfferButton'

export default function HeroBannerFour() {
  return (
    <div className=" tp-hero-3-area tp-hero-3-ptb1 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 pt-dynamic">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape my-custom-circle">
                <span></span>
              </div>

               <h4 className="tp-hero-3-title tp_reveal_anim">
  <span className="tp-reveal-line">Un Site Web</span><br />
  <span className="tp-reveal-line d-inline-flex align-items-center justify-content-center gap-4">
    Souriant
    <span className="logo-wrap d-inline-block position-relative align-middle ms-2">
      <Image
        src={logoSourire}
        alt="Logo sourire"
        fill
        className="object-fit-contain "
        sizes="(min-width:1200px) 180px, (min-width:768px) 60px, (min-width:576px) 60px, 40px"
      />
    </span>
  </span>
</h4>

              <span className=" md : d-none d-md-block tp-hero-3-category tp_reveal_anim ">
                Site premium • Intégration Doctolib • Sans engagement
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
      <span>Sans engagement</span>
    </div>
    <div className="d-flex">
      <span className="me-2">•</span>
      <span>Intégration Doctolib</span>
    </div>
  </div>
</div>





          
              <Link className="tp-btn-black-2" href="/rdv" data-offer-modal>
                Réserver un appel{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
 <RatingStrip
        avatars={[
      { src: "/assets/img/avatar/Avis 1.png" },
                    { src: "/assets/img/avatar/Avis 2.png" },
                    { src: "/assets/img/avatar/Avis 3.png" },
                    { src: "/assets/img/avatar/Avis 4.png" },
                    { src: "/assets/img/avatar/Avis 5.png" },
          


        ]}
      />

            {/* Flèches animées */}
              <BounceArrowIcon text="Explorer" />

          </div>
        </div>

        
      </div>
    </div>
  );
}
