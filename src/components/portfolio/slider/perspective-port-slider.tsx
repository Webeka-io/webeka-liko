import React from "react";
import Link from "next/link";
import { BounceArrowIcon2 } from "@/components/BounceArrow/BounceArrow2";
// images (fallback)
import port_1 from "@/assets/img/home-09/slider/slider-1.webp";
import port_2 from "@/assets/img/home-09/slider/slider-2.webp";
import port_3 from "@/assets/img/home-09/slider/slider-3.webp";
import port_4 from "@/assets/img/home-09/slider/slider-4.webp";
import port_5 from "@/assets/img/home-09/slider/slider-5.webp";
import port_6 from "@/assets/img/home-09/slider/slider-6.webp";
import port_7 from "@/assets/img/home-09/slider/slider-7.webp";
import port_8 from "@/assets/img/home-09/slider/slider-8.webp";

type ImgLike = { src: string };
type PortfolioItem = {
  id: number;
  title?: string;
  category?: string;
  image: ImgLike;
  imageSm?: ImgLike;
  imageMd?: ImgLike;
  imageLg?: ImgLike;
  link?: string; // ➜ optionnel
};

const portfolio_data: PortfolioItem[] = [
  { id: 1, title: "", category: "", image: port_1, imageSm: port_5, imageLg: port_1, link: "https://www.webeka.io/maquette-1"  },
  { id: 2, title: "", category: "", image: port_2, imageSm: port_6, imageLg: port_2, link: "https://www.webeka.io/maquette-2" },
  { id: 3, title: "", category: "", image: port_3, imageSm: port_8, imageLg: port_3, link: "https://www.webeka.io/maquette-3" },
  { id: 4, title: "", category: "", image: port_4, imageSm: port_7, imageLg: port_4, link: "https://www.webeka.io/maquette-4" },
];

export default function PerspectivePortfolioSlider() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="tp-portfolio-9-area ">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-12">
              {/* ⚠️ on garde la même structure autour du slider */}
              <div className="tp-perspective-slider">
                {portfolio_data.map((item, index) => {
                  const isLast = index === portfolio_data.length - 1;

                  return (
                    <div key={item.id} className="tp-slide">
                      <div className="tp-slide-inner">
                        {/* ------------------ IMAGE RESPONSIVE ------------------ */}
                        <div className="tp-image position-relative overflow-hidden">
                          <picture>
                            {item.imageLg && (
                              <source media="(min-width: 1200px)" srcSet={item.imageLg.src} />
                            )}
                            {item.imageMd && (
                              <source media="(min-width: 768px)" srcSet={item.imageMd.src} />
                            )}
                            <img
                              src={(item.imageSm || item.image).src}
                              alt={item.title || `slide-${item.id}`}
                              className="w-100 border-wi"
                              style={{
                                display: "block",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </picture>

                          {/* Contenu texte par-dessus si besoin */}
                          <div className="tp-slider-content">
                            <span className="tp-portfolio-9-category tp_reveal_anim">
                              {item.category}
                            </span>
                            <h1 className="tp-portfolio-9-title tp_reveal_anim not-hide-cursor">
                              {item.title}
                            </h1>
                          </div>

                          {/* ➜ Calque cliquable plein cadre, SANS impacter la mise en page */}
                          {item.link && (
                            <Link
                              href={item.link}
                              className="cursor-hide"
                              data-cursor="Voir<br>le Projet"
                              style={{
                                position: "absolute",
                                inset: 0,
                                display: "block",
                                // sécurités anti-jitter :
                                lineHeight: 0,
                                border: "none",
                                textDecoration: "none",
                                zIndex: 10,
                              }}
                              aria-label={item.title || `Voir le projet ${item.id}`}
                            >
                              {/* élément vide : le clic se fait sur tout le calque */}
                              <span style={{ position: "absolute", inset: 0 }} />
                            </Link>
                          )}
                        </div>

                        {/* Flèches animées — masquées sur la dernière (4e) image */}
                        {!isLast && <BounceArrowIcon2 text="Explorer" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-portfolio-9-social-wrap">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-social-info">
                <span>{/* … */}</span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-scroll text-end">
                <a onClick={scrollTop} href="#">
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
