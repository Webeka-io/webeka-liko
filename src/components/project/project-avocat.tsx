import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectShape, RightArrow } from "../svg";

// remplace tes visuels par des mockups de sites dentaires si tu en as
import port_1 from "@/assets/img/home-03/portfolio/dentiste/1 .webp";
import port_2 from "@/assets/img/home-03/portfolio/dentiste/2 .webp";
import port_3 from "@/assets/img/home-03/portfolio/dentiste/3 .webp";
import port_4 from "@/assets/img/home-03/portfolio/dentiste/4 .webp";
import port_5 from "@/assets/img/home-03/portfolio/dentiste/5 .webp";
import port_6 from "@/assets/img/home-03/portfolio/dentiste/6 .webp";
import port_7 from "@/assets/img/home-03/portfolio/dentiste/7 .webp";
import port_8 from "@/assets/img/home-03/portfolio/dentiste/8 .webp";

const project_data = [
  { id: 1, img_1: port_1, img_2: port_2, meta: "", title: " Dentina", borderClass: "color-blue" },
  { id: 2, img_1: port_3, img_2: port_4, meta: "", title: "Médicia", borderClass: "color-rose" },
  { id: 3, img_1: port_5, img_2: port_6, meta: "", title: "Dentoi", borderClass: "color-vert" },
  { id: 4, img_1: port_7, img_2: port_8, meta: "", title: "Dentify", borderClass: "color-azure" },
];

type IProps = { style_2?: boolean; };

export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 white-bg"}`}>
      <div className="container container-1720">

        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image src={item.img_1} alt="port-img" style={{ height: "auto" }} />
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta}</span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href="/portfolio-details-1">{item.title}</Link>
                      </h4>
                      <Link className="tp-btn-project-sm" href="/avocat/portfolio-avocat">
                        VOIR LES EXEMPLES
                      </Link>
                    </div>
                    <div className={`tp-project-3-border ${item.borderClass} text-center`}>
                      <span></span>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 d-none d-md-block">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image src={item.img_2} alt="port-img" style={{ height: "auto" }} />
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
