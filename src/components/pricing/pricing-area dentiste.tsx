'use client';
import React from 'react';
import { ArrowBg, RightArrowTwo } from '../svg';
import Link from 'next/link';
import {
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  CalendarCheck,
  FileCheck2,
  Smartphone,
  BadgePlus,
  WifiPen,
} from 'lucide-react';

export default function PricingArea() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb2 fix">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative ">
              <div className="tp-hero-3-circle-shape2 my-custom-circle">
                <span></span>
              </div>

              <h4 className="tp-hero-3-title tp_reveal_anim pt-30px pb-10">
                <span className="tp-reveal-line">Sans engagement</span>
              </h4>

              <span className="d-none d-md-block tp-hero-3-category-2 tp_reveal_anim pt-20 ">
                Abonnement tout inclus. Zéro surprise.
              </span>
              <span className="mx-auto w-75 ms-7 text-center d-block d-md-none tp-hero-3-category-2 tp_reveal_anim">
                Abonnement tout inclus. Zéro surprise.
              </span>
            </div>
          </div>
        </div>

       {/* Card */}
<div className="row justify-content-center mt-5 mb-10">
  <div className="col-md-7 col-lg-6 col-xl-5">
    <div className="card webeka-card rounded-4 shadow-none">

      {/* Top ribbon */}
      <div className="webeka-card-ribbon text-center">
        <span className="webeka-badge rounded-pill">
          Satisfaction Garantie
        </span>
        <div className="webeka-ribbon-text mt-3">
          Hébergement & maintenance inclus
        </div>
      </div>

      <div className="card-body p-4 p-md-5 text-center">

        {/* Price block */}
        <div className="my-2">
          <div className="fw-bold webeka-price-title">
            400&nbsp;€
            <span className="webeka-price-sub ms-1 text-white">
              si satisfaction
            </span>
          </div>
          <div className="mt-2 webeka-price-month">
            puis <strong>75&nbsp;€ / mois</strong>
          </div>
          <div className="mt-2 webeka-price-conditions">
            sans engagement, tout inclus
          </div>
        </div>

        <hr className="my-4 webeka-divider" />

        {/* Avantages */}
        <ul className="list-unstyled text-start mx-auto webeka-features">
          {[
            { icon: <BadgePlus size={40} />, title: 'Design Premium', sub: 'Photos, couleurs, spécialités (implantologie, orthodontie, esthétique)' },
            { icon: <Smartphone size={40} />, title: 'Mobile-first & Rapide', sub: 'Expérience optimale sur smartphone et tablette' },
            { icon: <CalendarCheck size={40} />, title: 'Intégration Doctolib & Contact', sub: 'RDV en 1 clic, téléphone cliquable, Google Maps' },
            { icon: <FileCheck2 size={40} />, title: 'Conformité & Mentions Obligatoires', sub: 'Ordre, informations & RGPD intégrés' },
            { icon: <CheckCircle size={40} />, title: 'Modifications incluses', sub: 'Textes, images, horaires – sous 48–72 h' },
            { icon: <WifiPen size={40} />, title: 'Publication mensuelle', sub: '1 article par mois pour maintenir le référencement et attirer de nouveaux patients' },
          ].map((item, idx) => (
            <li key={idx} className="webeka-feature-item d-flex">
              <div className="webeka-feature-icon">
                {item.icon}
              </div>
              <div>
                <div className="webeka-feature-title">{item.title}</div>
                <div className="webeka-feature-sub">{item.sub}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* Inclus */}
        <div className="webeka-included rounded-3 mt-3">
          <div className="webeka-included-title mb-2">+ Inclus</div>
          <div className="webeka-included-items d-flex justify-content-between">
            <div className="webeka-included-item text-center flex-fill">
              <TrendingUp size={20} />
              <div className="mt-1">Optimisation Google</div>
            </div>
            <div className="webeka-included-item text-center flex-fill">
              <Shield size={20} />
              <div className="mt-1">Sécurité renforcée</div>
            </div>
            <div className="webeka-included-item text-center flex-fill">
              <Zap size={18} />
              <div className="mt-1">Vitesse optimisée</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link href="/contact" data-offer-modal className="webeka-cta-card d-inline-flex align-items-center justify-content-center w-100 mt-4">
          Prendre un rendez-vous <span className="ms-2"><RightArrowTwo /></span>
        </Link>
      </div>
    </div>
  </div>
</div>
{/* End card */}

      </div>
    </div>
  );
}
