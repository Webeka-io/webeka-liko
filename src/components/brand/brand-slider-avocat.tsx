"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-6.png";
import b_2 from "@/assets/img/home-01/brand/brand-2.png";
import b_3 from "@/assets/img/home-01/brand/brand-3.png";
import b_4 from "@/assets/img/home-01/brand/brand-7.png";



const brand_images = [b_1, b_2, b_3, b_4, b_1, b_2, b_3, b_4];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix mtbrand">
      <Marquee
        speed={70}
        loop={0}
        className="brand-wrapper mx-auto"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "auto",width: "220px" }}>
            <Image src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
