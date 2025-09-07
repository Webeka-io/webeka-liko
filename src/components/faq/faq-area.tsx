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
    question: "La création du site est-elle incluse dans l’abonnement ?",
    answer:
      "Oui. La mise en place de votre site vitrine (sur la base d’un template personnalisé avec vos textes, couleurs et photos) est incluse. Aucun frais d’installation caché. Le 1er mois est offert et sans engagement.",
  },
  {
    id: 2,
    question: "Quel est le délai moyen de mise en ligne ?",
    answer:
      "Généralement 48–72 h ouvrées après réception de vos contenus (logo, textes, photos, horaires, liens). Si tout n’est pas prêt, nous publions une version provisoire et complétons ensuite.",
  },
  {
    id: 3,
    question: "Comment fonctionne l’essai de 30 jours ?",
    answer:
      "Votre site est mis en ligne sur un sous-domaine pendant l’essai. Vous testez tout (mobile, appels, itinéraire, prise de rendez-vous). Vous pouvez arrêter à tout moment durant ces 30 jours. Le nom de domaine est relié à l’activation de l’abonnement.",
  },
  {
    id: 4,
    question: "Que comprend la maintenance continue ?",
    answer:
      "Hébergement, certificat SSL (HTTPS), mises à jour techniques, sauvegardes, correctifs, et petites modifications de contenu (textes, images, horaires, liens).",
  },
  {
    id: 5,
    question: "Intégrez-vous la prise de rendez-vous en ligne ?",
    answer:
      "Oui. Nous intégrons un bouton ou un module vers vos outils : Doctolib, Planity, Calendly, Google Calendar… ainsi que WhatsApp et l’appel en 1 clic. Les clics clés (Appeler, RDV, Itinéraire) peuvent être suivis.",
  },
  {
    id: 6,
    question: "Qui possède le nom de domaine ?",
    answer:
      "Vous. Nous pouvons l’acheter et le configurer à votre nom, puis le relier au site. Pendant l’essai, le site reste sur un sous-domaine ; à l’activation de l’abonnement, nous branchons votre domaine.",
  },
  {
    id: 7,
    question: "Quelles modifications sont incluses ?",
    answer:
      "Les changements simples (textes, photos, horaires, liens) sont inclus. Pour des ajouts importants (nouvelles sections, nouvelles pages, refonte), nous proposons un chiffrage rapide avant validation.",
  },
  {
    id: 8,
    question: "Puis-je passer d’un site “salon” à un site “dentaire” (ou inversement) ?",
    answer:
      "Oui. Nous adaptons la structure, les intégrations (Planity/Doctolib) et les mentions. La transition se fait sans interruption de service.",
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
