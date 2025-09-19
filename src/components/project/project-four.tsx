import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectShape, RightArrow } from "../svg";

// images
import port_1 from "@/assets/img/home-03/portfolio/1.webp";
import port_2 from "@/assets/img/home-03/portfolio/2.webp";
import port_3 from "@/assets/img/home-03/portfolio/7.webp";
import port_4 from "@/assets/img/home-03/portfolio/8.webp";
import port_5 from "@/assets/img/home-03/portfolio/6.webp";
import port_6 from "@/assets/img/home-03/portfolio/5.webp";
import port_7 from "@/assets/img/home-03/portfolio/3.webp";
import port_8 from "@/assets/img/home-03/portfolio/4.webp";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    meta: "",
    title: "Dentiste",
    borderClass: "color-blue", // exemple : bleu clair
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    meta: "",
    title: "Vétérinaire",
    borderClass: "color-green", // exemple : vert
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    meta: "",
    title: "Immobilier",
    borderClass: "color-azure", // exemple : rose coucher de soleil
  },
  {
    id: 4,
    img_1: port_7,
    img_2: port_8,
    meta: "",
    title: "Avocat",
    borderClass: "color-green", // exemple : jaune
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};

export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 white-bg"
      }`}
    >
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim ">
                  <span className="text-center text-black">
                    Nos <br /> Projets
                  </span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href="/portfolio-details-1">{item.title}</Link>
                      </h4>
                      <Link className="tp-btn-project-sm" href="/portfolio">
                        VOIR LES PROJETS
                      </Link>
                    </div>
                    <div
                      className={`tp-project-3-border ${item.borderClass} text-center`}
                    >
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0 d-none d-md-block">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
