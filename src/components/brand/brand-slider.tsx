"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images




export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix ">
      
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
