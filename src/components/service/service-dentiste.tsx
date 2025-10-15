import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/webeka/01.webp";
import ser_img_2 from "@/assets/img/webeka//02.webp";
import ser_img_3 from "@/assets/img/webeka/03.webp";
import ser_img_4 from "@/assets/img/webeka/04.webp";
import { RightArrow, ProjectShape } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Conception",
    title: "Un site pensé pour votre cabinet",
    text: "Nous créons un site sur mesure pour votre cabinet dentaire : moderne, clair et rassurant pour vos patients. Chaque détail est étudié pour inspirer confiance et mettre en valeur votre expertise.",
    lists: [
      "Design adapté à votre spécialité",
      "Lisible sur mobile & tablette",
      "Navigation intuitive pour vos patients",
      "Bases solides pour Google (SEO local)",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Personnalisation",
    title: "Mettez en avant votre image",
    text: "Vos photos, votre équipe, vos spécialités (orthodontie, implantologie, esthétique) sont intégrées pour que vos patients vous reconnaissent immédiatement. Nous ajustons textes et visuels pour refléter votre identité.",
    lists: [
      "Présentation de l’équipe et du cabinet",
      "Textes adaptés aux patients",
      "Photos personnalisées",
      "Connexion aux outils : Doctolib, Google Maps, WhatsApp…",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Mise en ligne",
    title: "Un site conforme et sécurisé",
    text: "Nous gérons pour vous le domaine, l’hébergement et la sécurité. Votre site est conforme aux recommandations de l’Ordre, avec mentions obligatoires, RGPD et informations légales intégrées.",
    lists: [
      "Nom de domaine à votre nom",
      "Hébergement inclus",
      "Sécurité HTTPS et sauvegardes",
      "Mentions obligatoires intégrées (Ordre & tarifs)",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Résultats",
    title: "Développez votre patientèle",
    text: "Votre site devient un véritable outil pour attirer de nouveaux patients et rassurer les actuels. Vos services, vos horaires et vos avis patients sont clairs et accessibles en un clic.",
    lists: [
      "Prise de rendez-vous simplifiée (Doctolib, appel direct)",
      "Horaires et plan visibles immédiatement",
      "Avis patients mis en avant",
      "Image professionnelle forte et rassurante",
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
                            href="https://calendly.com/webeka-contact/30min?month=2025-10"
                            data-offer-modal

                        >
                          <span className="zikzak-content">
                            Nous <br /> Contacter
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
