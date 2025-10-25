import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/webeka/1-avocat.jpg";
import ser_img_2 from "@/assets/img/webeka/2-avocat.jpg";
import ser_img_3 from "@/assets/img/webeka/3-avocat.jpg";
import ser_img_4 from "@/assets/img/webeka/4-avocat.jpg";
import { RightArrow, ProjectShape } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Conception",
    title: "Un site pensé pour votre cabinet",
    text: "Nous concevons un site sur mesure pour votre cabinet d’avocats : clair, élégant et structuré pour inspirer confiance à vos clients. Chaque élément est pensé pour valoriser vos expertises et votre image professionnelle.",
    lists: [
      "Design sobre et professionnel",
      "Lecture fluide sur mobile et ordinateur",
      "Structure optimisée pour vos domaines de droit",
      "Référencement local optimisé (Google)",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Personnalisation",
    title: "Une image qui vous représente",
    text: "Votre cabinet, vos valeurs, vos spécialités. Nous intégrons vos photos, présentons votre équipe et rédigeons des textes adaptés à votre clientèle : particuliers, entreprises ou institutions.",
    lists: [
      "Présentation claire de vos domaines d’intervention",
      "Portraits et photos du cabinet",
      "Textes adaptés à votre ton et à votre clientèle",
      "Connexion à vos outils : Justifit, Google Maps, WhatsApp Business…",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Mise en ligne",
    title: "Un site conforme et sécurisé",
    text: "Nous gérons pour vous le domaine, l’hébergement et la sécurité. Votre site respecte les obligations légales et déontologiques : mentions légales, RGPD et conformité avec l’Ordre des Avocats.",
    lists: [
      "Nom de domaine à votre nom",
      "Hébergement et maintenance inclus",
      "Sécurité HTTPS, sauvegardes et mises à jour",
      "Mentions légales & RGPD intégrées",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Impact",
    title: "Développez votre visibilité",
    text: "Votre site devient un véritable levier de visibilité et de crédibilité. Il attire de nouveaux clients, met en avant vos avis et facilite les prises de contact directes.",
    lists: [
      "Formulaire et contact rapide en un clic",
      "Mise en avant des avis clients (Google, Justifit…)",
      "Optimisation SEO pour vos villes et spécialités",
      "Image de marque forte et cohérente",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="d-none d-md-block sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
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
                          <ProjectShape />
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
