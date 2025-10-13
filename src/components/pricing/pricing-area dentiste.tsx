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
} from 'lucide-react';

export default function PricingArea() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb-2 fix">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative mt-10percent">
              <div className="tp-hero-3-circle-shape2 my-custom-circle">
                <span></span>
              </div>

              <Link className="tp-btn-black-2" href="/contact-dentiste">
                Offre tout inclus{' '}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>

              <h4 className="tp-hero-3-title tp_reveal_anim pt-30px">
                <span className="tp-reveal-line">Sans engagement</span>
              </h4>

              <span className="d-none d-md-block tp-hero-3-category-2 tp_reveal_anim">
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
            <div
              className="card shadow border-0 rounded-4"
              style={{
                overflow: 'hidden',
                borderRadius: 24,
              }}
            >
              {/* Top ribbon */}
              <div
                className="w-100 text-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02))',
                  padding: '22px 16px',
                }}
              >
                <span
                  className="badge rounded-pill"
                  style={{
                    background:
                      'linear-gradient(135deg, #111 0%, #333 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 20,
                    padding: '10px 16px',
                  }}
                >
                  1<sup>er</sup> mois offert
                </span>
                <div
                  className="mt-3"
                  style={{
                    color: '#4b5563',
                    fontSize: 17,
                    letterSpacing: 0.2,
                    fontWeight: 500,
                  }}
                >
                  Hébergement & maintenance inclus
                </div>
              </div>

              <div className="card-body p-4 p-md-5 text-center">
                {/* Price block */}
                <div className="my-2">
                  <div
                    className="fw-bold"
                    style={{
                      fontSize: '44px',
                      lineHeight: 1.1,
                      letterSpacing: -0.5,
                    }}
                  >
                    400&nbsp;€
                    <span
                      className="text-muted"
                      style={{
                        fontSize: 17,
                        marginLeft: 6,
                        fontWeight: 500,
                      }}
                    >
                      à la création
                    </span>
                  </div>
                  <div
                    className="mt-2"
                    style={{ fontSize: 20, color: '#111' }}
                  >
                    puis <strong style={{ fontSize: 22 }}>75&nbsp;€ / mois</strong>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      color: '#111',
                      fontSize: 17,
                      fontWeight: 600,
                    }}
                  >
                    sans engagement, tout inclus
                  </div>
                </div>

                <hr className="my-4" style={{ opacity: 0.15 }} />

                {/* Avantages */}
                <ul
                  className="list-unstyled text-start mx-auto"
                  style={{ maxWidth: 520 }}
                >
                  {[
                    {
                      icon: <BadgePlus size={20} />,
                      title: 'Design personnalisé au cabinet',
                      sub: 'Photos, couleurs, spécialités (implantologie, orthodontie, esthétique)',
                    },
                    {
                      icon: <Smartphone size={20} />,
                      title: 'Mobile-first & Rapide',
                      sub: 'Expérience patient optimale sur smartphone',
                    },
                    {
                      icon: <CalendarCheck size={20} />,
                      title: 'Intégration Doctolib & Contact',
                      sub: 'RDV en 1 clic, téléphone cliquable, Google Maps',
                    },
                    {
                      icon: <FileCheck2 size={20} />,
                      title: 'Conformité & Mentions Obligatoires',
                      sub: 'Ordre, informations & RGPD intégrés',
                    },
                    {
                      icon: <CheckCircle size={20} />,
                      title: 'Modifications incluses',
                      sub: 'Textes, images, horaires – sous 48–72 h',
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex"
                      style={{
                        gap: 12,
                        padding: '12px 0',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: 32,
                          height: 32,
                          border: '1px solid #111',
                          flex: '0 0 auto',
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 17,
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-muted"
                          style={{
                            fontSize: 15,
                            lineHeight: 1.55,
                            color: '#6b7280',
                          }}
                        >
                          {item.sub}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Inclus */}
                <div
                  className="rounded-3 mt-3 "
                  style={{
                    background: '#f7f7f7',
                    padding: '14px 12px',
                  }}
                >
                  <div
                    className="text-center mb-2"
                    style={{ fontSize: 20, fontWeight: 600 }}
                  >
                    + Inclus
                  </div>
                  <div
                    className="d-flex justify-content-between text-muted"
                    style={{ gap: 12 }}
                  >
                    <div className="flex-fill text-center">
                      <TrendingUp size={20} />
                      <div className="mt-1" style={{ fontSize: 13 }}>
                        Optimisation Google
                      </div>
                    </div>
                    <div className="flex-fill text-center">
                      <Shield size={20} />
                      <div className="mt-1" style={{ fontSize: 13 }}>
                        Sécurité renforcée
                      </div>
                    </div>
                    <div className="flex-fill text-center">
                      <Zap size={18} />
                      <div className="mt-1" style={{ fontSize: 13 }}>
                        Vitesse optimisée
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  className="d-inline-flex align-items-center justify-content-center w-100 mt-4"
                  href="/contact"
                  style={{
                    background: '#111',
                    color: '#fff',
                    borderRadius: 999,
                    padding: '14px 18px',
                    fontWeight: 700,
                    fontSize: 16,
                    boxShadow: '0 10px 24px rgba(0,0,0,.15)',
                    textDecoration: 'none',
                    transition: 'transform .15s ease, box-shadow .15s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      'translateY(-1px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      '0 12px 28px rgba(0,0,0,.22)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = '';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      '0 10px 24px rgba(0,0,0,.15)';
                  }}
                >
                  Demander une démo{' '}
                  <span className="ms-2 d-inline-flex align-items-center">
                    <RightArrowTwo />
                  </span>
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
