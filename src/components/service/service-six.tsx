import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/webeka/01.png";
import ser_img_2 from "@/assets/img/webeka/02.png";
import ser_img_3 from "@/assets/img/webeka/03.png";
import ser_img_4 from "@/assets/img/webeka/04.png";
import { RightArrow, ProjectShape } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Choix du site",
    title: "Séléctionner votre site",
    text: "Choisissez votre site parmi les modèles qui vous ont été envoyés par message !",
    lists: [
      "Design moderne",
      "Responsive (mobile & PC)",
      "Optimisé pour Google",
      "Personnalisable",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Personnalisation",
    title: "Adapter à votre image",
    text: "Ajoutez vos informations (nom, logo, photos, services, horaires). Nous personnalisons le modèle pour qu’il reflète fidèlement votre commerce.",
    lists: [
      "Logo et identité visuelle",
      "Textes adaptés",
      "Images personnalisées",
      "Intégrations (Whatsapp , Planity , Calendly , Google )",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Mise en ligne",
    title: "Publication rapide",
    text: "Nous configurons votre domaine, l’hébergement sécurisé et mettons votre site en ligne en quelques jours.",
    lists: [
      "Nom de domaine personnalisé",
      "Hébergement inclus",
      "Sécurité HTTPS",
      "Maintenance technique",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Votre visibilité",
    title: "Profitez de votre présence en ligne",
    text: "Votre site devient un outil puissant pour attirer de nouveaux clients et fidéliser les anciens.",
    lists: [
      "Présence professionnelle",
      "Facile à partager",
      "Compatible réseaux sociaux",
      "Optimisation Fiche Google",
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
                            href="/portfolio-wrapper"
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
