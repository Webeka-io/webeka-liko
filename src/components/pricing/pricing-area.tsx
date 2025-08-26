'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import { TrendingUp, Shield, Zap,CheckCircle, } from "lucide-react";

export default function PricingArea() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb-2 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative mt-10percent">
              <div className="tp-hero-3-circle-shape my-custom-circle">
                <span></span>
              </div>

              <Link className="tp-btn-black-2" href="/contact">
                Tarif unique{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>

              <h4 className="tp-hero-3-title tp_reveal_anim pt-30px">
                <span className="tp-reveal-line">199/an</span> <br />
                <span className="tp-reveal-line">Tout compris</span>
              </h4>

              <span className=" md : d-none d-md-block tp-hero-3-category-2 tp_reveal_anim ">
                Un seul tarif, transparent et sans surprise.
              </span>
              
              {/* Mobile Avantages */}
              <span className="mx-auto w-75 ms-7 text-center d-block d-md-none tp-hero-3-category-2 tp_reveal_anim">
                Un seul tarif, transparent et sans surprise.
              </span>
            </div>
          </div>
        </div>

        {/* --- Nouvelle Card Pricing --- */}
<div className="row justify-content-center mt-5 mb-10">
  <div className="col-md-6 col-lg-5">
    <div className="card shadow border-0 rounded-4 text-center p-4 ">
      <div className="card-body">
        <h5 className="card-title tp-hero-3-category-2 mb-3">Forfait Annuel Unique</h5>
        <h2 className="display-6 tp-hero-3-title-p ">199€ / an</h2>
        <p className="tp-hero-3-category-2 text-muted mt-3">
          Hébergement, maintenance et support inclus.
        </p>

        {/* Liste des avantages principaux */}
        <ul className=" tp-hero-3-category-3 my-4 text-start">
          <li className="d-flex align-items-start mb-3">
            <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
            <div>
              <strong className="mb-20px">Création du site</strong>
              <br />
              <small className="text-muted">Nous vous offrons la création web</small>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
            <div>
              <strong className="mb-20px">Hébergement sécurisé</strong>
              <br />
              <small className="text-muted">Serveurs français, certificat SSL inclus</small>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
            <div>
              <strong className="mb-20px">Maintenance technique</strong>
              <br />
              <small className="text-muted">Mises à jour et sauvegardes automatiques</small>
            </div>
          </li>
          <li className="d-flex align-items-start mb-3">
            <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
            <div>
              <strong className="mb-20px">Modifications incluses</strong>
              <br />
              <small className="text-muted">Changements de textes et images</small>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <CheckCircle className="h-4 w-4 text-green-600 mr-20px" />
            <div>
              <strong className="mb-20px">Assistance rapide</strong>
              <br />
              <small className="text-muted">Support téléphone et email</small>
            </div>
          </li>
        </ul>

        {/* Section bonus incluse */}
        <div className="bg-light rounded-3 p-3 mt-4">
          <p className="tp-hero-3-category-2 mb-10">+ Bonus inclus :</p>
          <div className="d-flex justify-content-around text-muted small">

            {/* Optimisation Google */}
            <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
              <TrendingUp className="me-1 tp-hero-3-category-3 " size={18} />
              Optimisation Google
            </span>

            {/* Sécurité renforcée */}
            <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
              <Shield className="me-1 tp-hero-3-category-3" size={18} />
              Sécurité renforcée
            </span>

            {/* Vitesse optimisée */}
            <span className="d-flex flex-column align-items-center tp-hero-3-category-3">
              <Zap className="me-1 tp-hero-3-category-3" size={18} />
              Vitesse optimisée
            </span>

          </div>
        </div>

        {/* Bouton */}
        <Link className="tp-btn-black-2 mt-4 d-inline-block" href="/contact">
          Commencer{" "}
          <span className="p-relative">
            <RightArrowTwo />
            <ArrowBg />
          </span>
        </Link>
      </div>
    </div>
  </div>
</div>
{/* --- Fin Card Pricing --- */}

      </div>
    </div>
  );
}
