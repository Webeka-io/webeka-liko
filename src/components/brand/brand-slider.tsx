"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-1.png";
import b_2 from "@/assets/img/home-01/brand/brand-2.png";
import b_3 from "@/assets/img/home-01/brand/brand-3.png";
import b_4 from "@/assets/img/home-01/brand/brand-4.png";
import b_5 from "@/assets/img/home-01/brand/brand-5.png";
import b_6 from "@/assets/img/home-01/brand/brand-6.png";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_1, b_2, b_3, b_4, b_5, b_6];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix pt-30">
      <Marquee speed={40} loop={0} className="brand-wrapper mx-auto">
        {brand_images.map((b, i) => (
          <div
            key={i}
            className={`tp-brand-item h-auto w-auto ${i === 0 ? "ml-16" : ""} mr-16`}
          >
            <Image src={b} alt={`brand-${i}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
