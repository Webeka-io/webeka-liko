import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}

// faq data (sans prix)
export const faq_data: IFaq[] = [
  
  {
    id: 1,
    question: "Que comprend l'abonnement mensuel ?",
    answer:
      "L'abonnement inclut l'hébergement du site, les mises à jour techniques, la maintenance, les sauvegardes et les modifications courantes (textes, images, horaires)."
  },
  {
    id: 2,
    question: "Est-ce que le nom de domaine m'appartient ?",
    answer:
      "Oui, le nom de domaine est enregistré au nom du client. Vous en restez propriétaire à 100 %, même en cas de résiliation."
  },
  {
    id: 3,
    question: "Puis-je demander des modifications sur mon site ?",
    answer:
      "Oui, vous pouvez demander des modifications simples (textes, images, horaires, coordonnées). Pour des changements plus importants, un devis spécifique pourra être proposé."
  },
  {
    id: 4,
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non, notre offre est sans durée minimale d'engagement. Vous pouvez arrêter à tout moment, avec un préavis d’un mois."
  },
  {
    id: 5,
    question: "Sous combien de temps mon site sera-t-il prêt ?",
    answer:
      "En moyenne, le site est livré sous 7 à 14 jours après réception de vos contenus (photos, textes, coordonnées, logo)."
  },
  {
    id: 6,
    question: "Est-ce que mon site sera optimisé pour Google ?",
    answer:
      "Oui, nous intégrons les optimisations SEO de base : structure, balises, vitesse, compatibilité mobile et fiche Google Business Profile."
  },
  {
    id: 7,
    question: "Mon site sera-t-il adapté aux mobiles ?",
    answer:
      "Absolument. Tous les sites que nous créons sont responsives, c'est-à-dire adaptés aux ordinateurs, tablettes et smartphones."
  },
];

export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">FAQ</h4>
                <p>
                  Tout sur l’essai 30 jours, le nom de domaine, les mises à jour et les
                  intégrations (Doctolib, Planity, WhatsApp, Google Maps).
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Rechercher une question" />
                <button className="fq-faq-sidebar-search" aria-label="Rechercher">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
