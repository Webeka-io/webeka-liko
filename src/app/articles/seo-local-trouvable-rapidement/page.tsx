"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);
import Image from "next/image";
import Link from "next/link";
import { ArrowBg, RightArrowTwo } from "@/components/svg";

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import ContactCalendly from "@/components/Calendlyform/ContactCalendly";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import LoadingScreen from "@/components/loading/LoadingScreen";
import ArticlesPage from "@/components/articles/articles-global";



const HomeFourMain = () => {


  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });


  
   return (
    <Wrapper>
      {/* Loader (white/black) */}
      <LoadingScreen
        title={'Articles.'}
        color="#111"
        background="#fff"
        logoSrc="/assets/img/logo/logo-anim.png"
        logoAlt="Webeka Articles"
        logoWidth={200}
      />
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

   <article className="article-page container pt-150">
  {/* HERO IMAGE */}
  <div className="article-hero position-relative mb-4 rounded-4 overflow-hidden">
    <Image
      src="/assets/img/articles/cover-seo-local.jpg"
      alt="SEO local : rendre votre activité trouvable rapidement"
      width={1200}
      height={500}
      priority
      className="w-100 h-auto object-cover"
    />
    <div className="article-tag">SEO</div>
  </div>

  {/* META */}
  <div className="text-center mb-4">
    <p className="text-muted mb-1">
      Publié le <strong>20 octobre 2025</strong> • Temps de lecture : <strong>5 min</strong>
    </p>
    <h1 className="fw-bold display-6 text-dark">
      SEO local : rendre votre activité trouvable en 24h
    </h1>
  </div>

  {/* CONTENT */}
  <div className="article-content mx-auto" style={{ maxWidth: "760px" }}>
    <p className="lead text-black-50">
      Le SEO local ne demande pas des mois : avec les bons fondamentaux, vous pouvez
      devenir trouvable **dès aujourd’hui** sur les recherches proches de chez vous
      (“près de moi”, “[métier] + ville”). Voici un plan concret, actionnable en quelques heures.
    </p>

    <h2 className="mt-5 mb-3">1) Les bases techniques (indispensables)</h2>
    <p>
      Avant tout, assurez-vous que Google peut explorer et comprendre votre site :
    </p>
    <ul>
      <li><strong>Indexation :</strong> pas de <code>noindex</code> involontaire, sitemap envoyé dans la Search Console.</li>
      <li><strong>NAP cohérent :</strong> Nom, Adresse, Téléphone identiques partout (site, Google Business Profile, annuaires).</li>
      <li><strong>Pages rapides & mobiles :</strong> Core Web Vitals corrects, boutons clic-to-call visibles sur mobile.</li>
      <li><strong>Balises :</strong> un <code>&lt;title&gt;</code> clair “{`{métier}`} à {`{ville}` } – prise de RDV”, méta-description orientée bénéfices.</li>
    </ul>

    <figure className="my-4 text-center">
      <Image
        src="/assets/img/articles/seo-gbp-exemple.jpg"
        alt="Exemple de fiche Google Business Profile bien optimisée"
        width={900}
        height={150}
        className="rounded-4 object-cover"
      />
      <figcaption className="text-muted small mt-2">
        Une fiche Google Business Profile complète (catégorie, services, horaires, photos) est la base
        d’une visibilité locale immédiate.
      </figcaption>
    </figure>

    <h2 className="mt-5 mb-3">2) Construisez la pertinence locale</h2>
    <p>
      Google met en avant les résultats les plus pertinents pour une zone donnée. Travaillez ces leviers :
    </p>
    <ul>
      <li>
        <strong>Google Business Profile (GBP) :</strong> catégorie principale précise,
        <em>services</em> renseignés, <em>zones desservies</em>, photos récentes, description claire.
      </li>
      <li>
        <strong>Pages locales ciblées :</strong> créez une page “{`{métier}`} à {`{ville}` }” avec
        preuve sociale (avis), FAQ locale, et un plan Google Maps intégré.
      </li>
      <li>
        <strong>Schéma LocalBusiness :</strong> ajoutez des données structurées (adresse, téléphone, horaires)
        pour aider Google à vous comprendre.
      </li>
      <li>
        <strong>Avis clients :</strong> demandez des avis authentiques (avec mots-clés naturels) et répondez-y.
      </li>
    </ul>

    <h2 className="mt-5 mb-3">3) Captez la demande “urgente”</h2>
    <p>
      Pour les métiers d’intervention (plombier, électricien, serrurier, santé), optimisez pour l’instantané :
    </p>
    <ul>
      <li><strong>Bouton “Appeler”</strong> visible en premier écran (mobile), numéros cliquables <code>tel:</code>.</li>
      <li><strong>Horaires à jour</strong> (ou “ouvert maintenant”) et messages rassurants (délais d’intervention, zone couverte).</li>
      <li><strong>FAQ locale</strong> : prix indicatifs, modalités, urgence, devis.</li>
      <li><strong>Contenu court & clair</strong> : une action par écran (appeler, réserver, écrire).</li>
    </ul>

    <blockquote className="my-5 p-4 rounded-4 bg-light text-dark fw-medium border-start border-4 border-dark">
      “Le SEO local n’est pas (que) du contenu : c’est de la clarté d’information et de la cohérence
      sur toutes les plateformes où l’on vous cherche.”
    </blockquote>

    <h2 className="mt-5 mb-3">Checklist “trouvable aujourd’hui”</h2>
    <ul>
      <li>✔️ Fiche Google Business Profile complète (catégorie, services, description, photos).</li>
      <li>✔️ NAP identique partout + page “{`{métier}`} à {`{ville}` }”.</li>
      <li>✔️ Bouton “Appeler” en haut de page, visible sur mobile.</li>
      <li>✔️ 3 à 5 avis clients récents, réponses professionnelles.</li>
      <li>✔️ Données structurées LocalBusiness.</li>
    </ul>

    <p className="mt-4">
      En appliquant ces points, vous pouvez déjà apparaître sur des requêtes locales à faible concurrence,
      puis consolider sur 2–4 semaines avec des avis réguliers et quelques liens locaux (annuaires sérieux,
      partenaires, associations).
    </p>
  </div>

  {/* CTA FINAL */}
  <div className="text-center mt-5 pt-5">
    <h3 className="mb-3 fw-semibold text-dark">
      Besoin de booster votre visibilité locale ?
    </h3>
    <p className="text-muted mb-4">
      On vérifie votre fiche Google et votre page locale ensemble — rapide, concret, sans engagement.
    </p>
    <Link
      href="https://calendly.com/webeka-contact/30min"
      className="tp-btn-black-2"
    >
      Réserver un audit SEO local{" "}
      <span className="p-relative">
        <RightArrowTwo />
        <ArrowBg />
      </span>
    </Link>
  </div>

  <style jsx>{`
    .article-hero { aspect-ratio: 3 / 1; }
    .article-tag {
      position: absolute;
      top: 20px; left: 20px;
      background: rgba(0,0,0,0.75); color: #fff;
      font-size: 14px; padding: 6px 12px; border-radius: 999px;
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    }
    .article-content p { line-height: 1.7; color: #333; font-size: 17px; margin-bottom: 1.2rem; }
    .article-content h2 { font-size: 22px; font-weight: 600; color: #000; }
    blockquote { font-size: 18px; background: #f7f7f7; }
    .tp-btn-black-2 {
      background: #000; color: #fff; padding: 12px 30px; border-radius: 999px;
      font-weight: 500; transition: all .3s ease;
    }
    .tp-btn-black-2:hover { background: #fff; color: #000; border: 1px solid #000; }
    :global(.object-cover) { object-fit: cover; }
  `}</style>
</article>


             {/* hero area start */}
                          <div className="tm-hero-area tm-hero-ptb p-relative">
                            <div className="container">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="tm-hero-content">
                                    <span className="tm-hero-subtitle">Webeka</span>
                                    <h4 className="tm-hero-title-big tp_reveal_anim">
                                      Réservation
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* hero area end */}
            
                          {/* contact area start */}
                          <ContactCalendly />
                          {/* contact area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
