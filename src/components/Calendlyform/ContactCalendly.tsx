"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function ContactCalendly() {
  // ✅ Injection du script Calendly uniquement côté client
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="container">
        <div className="row">
          {/* Colonne gauche */}
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title text-white-golden">
                Réservez votre appel <br />
                <span className="text-white">avec un expert Webeka</span>
              </h4>
              <p className="mt-20 text-g text-white-golden">
                Discutez gratuitement de votre projet et découvrez comment nous pouvons
                transformer votre présence en ligne.  
                Aucun engagement — juste un échange constructif.
              </p>
              <Image
                className="ab-about-shape-1 d-none d-xl-block"
                src={shape}
                alt="Décor"
              />
            </div>
          </div>

          {/* Colonne droite */}
          <div className="col-xl-7">
            <div
              className="calendly-inline-widget rounded-[16px] shadow-lg overflow-hidden"
              data-url="https://calendly.com/webeka-contact/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=797979"
              style={{
                minWidth: "320px",
                height: "700px",
                background: "#fff",
                borderRadius: "16px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
