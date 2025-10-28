'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import Image from "next/image";
import logoMain from "@/assets/img/Secteurs/logo_secteurs.png";

type Sector = {
  label: string;
  href: string;
  tagline: string;
  icon: string;
};

const SECTORS: Sector[] = [
  {
    label: "Avocats",
    href: "/secteurs/avocat",
    tagline: "Incarnez la confiance & la clarté.",
    icon: "/assets/img/avocat/logo_justice.png",
  },
  {
    label: "Dentistes",
    href: "/secteurs/dentiste",
    tagline: "Rassurez et convertissez plus de patients.",
    icon: "/assets/img/dentiste/logo_sourire.png",
  },
];

export default function SectorsPage() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb1 fix">
      <div className="container">
        {/* HERO */}
        <div className="row">
          <div className="col-xl-12 pt-dynamic">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape my-custom-circle">
                <span></span>
              </div>

              <h4 className="tp-hero-3-title tp_reveal_anim mb-2">
                <span className="tp-reveal-line">
                  Votre Secteur
                  <span className="logo-wrap d-inline-block position-relative align-middle ms-2">
                    <Image
                      src={logoMain}
                      alt="Logo Webeka"
                      fill
                      className="object-fit-contain handshake-logo"
                      sizes="(min-width:1200px) 180px, (min-width:768px) 60px, (min-width:576px) 60px, 40px"
                    />
                  </span>
                </span>
              </h4>

              <span className="md:d-none d-md-block tp-hero-3-category tp_reveal_anim mb-3 d-inline-block">
                Des sites pensés pour chaque métier.
              </span>

              <p
                className="d-none d-md-block tp-hero-3-category-2 fs-5 mt-2"
                style={{ maxWidth: "620px", margin: "0 auto" }}
              >
                Nous comprenons les{" "}
                <strong>spécificités de chaque profession</strong> et adaptons
                nos sites pour refléter ce qui compte vraiment pour vos clients.
              </p>
            </div>
          </div>
        </div>

        {/* GRID SECTEURS */}
        <div className="row g-3 g-md-4 mt-5">
          {SECTORS.map((s) => (
            <div key={s.href} className="col-6 col-md-4 col-xl-3">
              <Link href={s.href} className="text-decoration-none">
                <div
                  className="sector-card h-100 p-4 border rounded-4 d-flex flex-column justify-content-between bg-white transition-all"
                >
                  <div>
                    {/* Image du secteur */}
                    <div className="mb-3 d-flex align-items-center justify-content-start">
                      <Image
                        src={s.icon}
                        alt={s.label}
                        width={60}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    <h5 className="mb-1 text-dark">{s.label}</h5>
                    <p className="mb-0 text-muted">{s.tagline}</p>
                  </div>

                  {/* Bouton “Découvrir” stylisé */}
                  <div className="mt-4">
                    <span className="sector-btn">
                      Découvrir →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Carte “Autre secteur ?” */}
          <div className="col-12 col-md-8 col-xl-6 mx-auto">
            <div className="sector-card p-4 p-md-5 border rounded-4 text-center bg-white">
              <h5 className="mb-2">Vous ne trouvez pas votre secteur ?</h5>
              <p className="text-muted mb-3">
                On s’adapte à votre activité. Parlons de vos besoins.
              </p>
              <Link
                className="tp-btn-black-2"
                href="https://calendly.com/webeka-contact/30min?month=2025-10"
                data-offer-modal
              >
                Réserver un appel{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="" />
      </div>

      </div>
  );
}