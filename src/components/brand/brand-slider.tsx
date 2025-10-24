"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/tiktok.png";
import b_2 from "@/assets/img/home-01/brand/instagram.png";
import b_3 from "@/assets/img/home-01/brand/youtube.png";

const brand_images = [b_1, b_2, b_3];

const brand_links = [
  "https://www.tiktok.com/@webeka.studio.des?_t=ZN-90dVqFCeS6I&_r=1", // TikTok
  "https://www.instagram.com/webeka.fr/", // Instagram
  "https://www.linkedin.com/in/will-de-webeka-3b2604387/?originalSubdomain=fr", // Youtube
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix mtbrand max-width-brand mx-auto pt-brand">
      <Marquee
        speed={0}
        loop={0}
        gradient={false}
        className="brand-wrapper mx-auto"
      >
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item flex items-center justify-center mx-2"
            style={{ width: "60px", height: "60px" }}
          >
            <a
              href={brand_links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-all duration-300 hover-gold-glow"
            >
              <Image
                src={b}
                alt={`Brand ${i + 1}`}
                width={50}
                height={50}
                className="object-contain "
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
