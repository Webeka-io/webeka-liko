import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/webeka/1.jpg";
import ser_img_2 from "@/assets/img/webeka//2.jpg";
import ser_img_3 from "@/assets/img/webeka/3.jpg";
import ser_img_4 from "@/assets/img/webeka/4.jpg";
import { RightArrow, ProjectShape } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Conception",
    title: "Un design pensé pour vous",
    text: "Nous concevons chaque site avec une approche sur mesure, adaptée à votre domaine et à vos objectifs. Design, performance, clarté : tout est optimisé pour offrir à vos visiteurs une expérience fluide et inspirer confiance dès la première impression.",
    lists: [
      "Style visuel sur mesure",
      "Compatible mobile et ordinateur",
      "Navigation intuitive",
      "Bases solides pour Google",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Personnalisation",
    title: "Votre image, mise en avant",
    text: "Nous intégrons vos éléments (logo, photos, équipe, services, horaires) pour que votre site devienne le prolongement naturel de votre activité. Chaque détail est ajusté pour vous ressembler.",
    lists: [
      "Identité visuelle intégrée",
      "Textes écrits et adaptés à votre métier",
      "Images personnalisées",
      "Connexion à vos outils ( Whatsapp, Google Maps, Calendly …)",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Mise en ligne",
    title: "Une présence maîtrisée",
    text: "Nous configurons pour vous le nom de domaine, la sécurité et l’hébergement. En quelques jours, votre site est prêt, fiable et opérationnel, avec toutes les garanties techniques.",
    lists: [
      "Nom de domaine à votre nom",
      "Hébergement inclus",
      "Sécurité HTTPS et sauvegardes",
      "Maintenance technique continue",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Résultats",
    title: "Un site qui attire des clients",
    text: "Votre site devient bien plus qu’une vitrine : il rassure, informe et incite à l’action. Il vous aide à développer votre notoriété et à générer de nouvelles opportunités au quotidien.",
    lists: [
      "Image professionnelle forte",
      "Facile à partager et à trouver",
      "Liens optimisés vers vos réseaux sociaux",
      "Fiche Google optimisée",
    ],
  },
];


export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2 ">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className=" md : d-none d-md-block sv-service-thumb ">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%" }}
                  />
                </div>
                
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center ">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                           className="tp-btn-zikzak p-relative"
                            href="/contact"
                        >
                          <span className="zikzak-content">
                            Je <br /> Me lance
                            <RightArrow clr="currentColor" />
                          </span>
                          <ProjectShape  />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
