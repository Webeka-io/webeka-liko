'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { TrendingUp, Shield, Zap, CheckCircle, CalendarCheck, FileCheck2, Smartphone , BadgePlus} from "lucide-react";

export default function PricingArea() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb-2 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative mt-10percent">
              <div className="tp-hero-3-circle-shape2 my-custom-circle">
                <span></span>
              </div>

              <Link className="tp-btn-black-2" href="/contact">
                Offre tout inclus{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>

              <h4 className="tp-hero-3-title tp_reveal_anim pt-30px">
               
                <span className="tp-reveal-line">Sans engagement</span> <br />

              </h4>

              {/* Desktop subtitle */}
              <span className="d-none d-md-block tp-hero-3-category-2 tp_reveal_anim">
                Abonnement tout inclus. Zéro surprise.
              </span>

              {/* Mobile subtitle */}
              <span className="mx-auto w-75 ms-7 text-center d-block d-md-none tp-hero-3-category-2 tp_reveal_anim">
                Abonnement tout inclus. Zéro surprise.
              </span>
            </div>
          </div>
        </div>

        {/* --- Card “sans prix” --- */}
        <div className="row justify-content-center mt-5 mb-10">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow border-0 rounded-4 text-center p-4">
              <div className="card-body">
                <h5 className="card-title tp-hero-3-category-2 mb-2">
                1<sup>er</sup> mois offert
                </h5>

                <p className="tp-hero-3-category-2 text-muted mt-2">
                Hébergement &amp; maintenance inclus
                </p>

                {/* Avantages principaux */}
                <ul className="tp-hero-3-category-3 my-4 text-start">
                  <li className="d-flex align-items-start mb-3">
                    <BadgePlus className="h-10 w-10 text-black mr-20px" />
                    <div>
                      <strong className="mb-20px">Design personalisé au cabinet</strong>
                      <br />
                      <small className="text-muted">Photos , couleurs , spécialités <br/> ( implantologie, orthodontie , esthétique )</small>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <Smartphone className="h-4 w-4 text-green-600 mr-20px" />
                    <div>
                      <strong className="mb-20px">Mobile-first & Rapide </strong>
                      <br />
                      <small className="text-muted">Expérience patient optimal sur smartphone <br/>&nbsp;</small>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <CalendarCheck className="h-4 w-4 text-green-600 mr-20px" />
                    <div>
                      <strong className="mb-20px">Intégration Doctolib & Contact</strong>
                      <br />
                      <small className="text-muted">RDV en 1 clic, Téléphone Cliquable, Google Maps <br/>&nbsp;</small>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <FileCheck2 className="h-4 w-4 text-green-600 mr-20px" />
                    <div>
                      <strong className="mb-20px">Conformité & Mentions Obligatoires</strong>
                      <br />
                      <small className="text-muted">Ordre,Iinformations & RGPD Intégrés  <br/>&nbsp;</small>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
                    <div>
                      <strong className="mb-20px">Modifications incluses</strong>
                      <br />
                      <small className="text-muted">Textes, images, horaires - sous 48-72 h</small>
                    </div>
                  </li>
                </ul>

                {/* Bonus */}
                <div className="bg-light rounded-3 p-3 mt-4">
                  <p className="tp-hero-3-category-2 mb-10">+ Inclus :</p>
                  <div className="d-flex justify-content-around text-muted small">
                    <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
                      <TrendingUp size={18} />
                      Optimisation Google
                    </span>
                    <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
                      <Shield size={18} />
                      Sécurité renforcée
                    </span>
                    <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
                      <Zap size={18} />
                      Vitesse optimisée
                    </span>
                  </div>
                </div>

                {/* Hint discrète “domaine” (sans prix) */}
                <p className="tp-hero-3-category-3 text-muted mt-3 mb-0">
                 
                </p>

                {/* CTA */}
                <Link className="tp-btn-black-2 mt-4 d-inline-block" href="/contact">
                  Demander une démo{" "}
                  <span className="p-relative">
                    <RightArrowTwo />
                    <ArrowBg />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* --- Fin Card --- */}
      </div>
    </div>
  );
}
