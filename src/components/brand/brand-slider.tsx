"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-2.png";
import b_2 from "@/assets/img/home-01/brand/brand-12.png";
import b_3 from "@/assets/img/home-01/brand/brand-11.png";
import b_4 from "@/assets/img/home-01/brand/brand-3.png";
import b_5 from "@/assets/img/home-01/brand/brand-6.png";

const brand_images = [b_1, b_2, b_3, b_4, b_5, b_1, b_2, b_3, b_4];

// ✅ Ajoute ici les liens correspondants
const brand_links = [
  "https://share.google/dTfAVRSgbN3r53xx0",    // lien pour b_1
  "https://www.instagram.com/webeka.fr/",   // lien pour b_2
  "https://www.tiktok.com/@webeka.studio.des?_t=ZN-90dVqFCeS6I&_r=1",  // lien pour b_3
  "https://api.whatsapp.com/send/?phone=%2B33603261137&text=Bonjour%2C+je+veux+mon+site+%21&type=phone_number&app_absent=0",  // lien pour b_4
  "https://www.linkedin.com/in/will-de-webeka-3b2604387/?originalSubdomain=fr", // lien pour b_5
  "https://share.google/dTfAVRSgbN3r53xx0",    // répétition pour b_1
  "https://www.instagram.com/webeka.fr/",
  "https://www.linkedin.com/in/will-de-webeka-3b2604387/?originalSubdomain=fr",
  "https://www.whatsapp.com",
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix mtbrand">
      <Marquee speed={70} loop={0} className="brand-wrapper mx-auto">
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item"
            style={{ height: "auto", width: "220px" }}
          >
            {/* ✅ lien cliquable avec ouverture dans un nouvel onglet */}
            <a
              href={brand_links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image src={b} alt={`Brand ${i + 1}`} />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
