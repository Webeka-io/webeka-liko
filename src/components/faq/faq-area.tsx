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
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "La création du site est-elle incluse dans 199€/an ?",
    answer:
      "Oui. La mise en place du site vitrine (sur la base d’un template personnalisé avec vos textes, couleurs et photos) est incluse. Aucun frais d’installation supplémentaire.",
  },
  {
    id: 2,
    question: "Quel est le délai moyen de mise en ligne ?",
    answer:
      "En général 3 à 5 jours ouvrés après réception de vos contenus (logo, textes, photos, horaires, liens).",
  },
  {
    id: 3,
    question: "Que comprend la maintenance annuelle ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.!",
  },
  {
    id: 4,
    question: "Proposez-vous la prise de rendez-vous en ligne ?",
    answer:
      "Oui. Nous intégrons un bouton de réservation (Cal.com, Calendly ou Google Calendar) et/ou un lien vers vos plateformes (ex. Planity).",
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
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
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
