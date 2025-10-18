"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/tiktok.png";
import b_2 from "@/assets/img/home-01/brand/instagram.png";
import b_3 from "@/assets/img/home-01/brand/linkedin.png";
import b_4 from "@/assets/img/home-01/brand/x.png";

const brand_images = [b_1, b_2, b_3, b_4, b_1, b_2, b_3, b_4];

const brand_links = [
  "https://www.tiktok.com/@webeka.studio.des?_t=ZN-90dVqFCeS6I&_r=1", // TikTok
  "https://www.instagram.com/webeka.fr/", // Instagram
  "https://www.linkedin.com/in/will-de-webeka-3b2604387/?originalSubdomain=fr", // LinkedIn
  "https://x.com/webeka", // X / Twitter (exemple)
  "https://www.tiktok.com/@webeka.studio.des?_t=ZN-90dVqFCeS6I&_r=1",
  "https://www.instagram.com/webeka.fr/",
  "https://www.linkedin.com/in/will-de-webeka-3b2604387/?originalSubdomain=fr",
  "https://x.com/webeka",
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix mtbrand pt-brand mx-auto">
      <Marquee
        speed={35}
        loop={0}
        gradient={false}
        className="brand-wrapper mx-auto"
      >
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item flex items-center justify-center mx-4"
            style={{ width: "60px", height: "60px" }}
          >
            <a
              href={brand_links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-all duration-300"
            >
              <Image
                src={b}
                alt={`Brand ${i + 1}`}
                width={60}
                height={60}
                className="object-contain"
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
