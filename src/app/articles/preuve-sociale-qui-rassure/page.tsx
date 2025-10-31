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
      src="/assets/img/articles/cover-preuve-sociale.jpg"
      alt="Preuve sociale : l’arme douce qui rassure (avis, logos, chiffres)"
      width={1200}
      height={500}
      priority
      className="w-100 h-auto object-cover"
    />
    <div className="article-tag">Conversion</div>
  </div>

  {/* META */}
  <div className="text-center mb-4">
    <p className="text-muted mb-1">
      Publié le <strong>14 octobre 2025</strong> • Temps de lecture : <strong>3 min</strong>
    </p>
    <h1 className="fw-bold display-6 text-dark">
      Preuve sociale : l’arme douce qui rassure <br />(avis, logos, chiffres)
    </h1>
    <p className="text-muted mt-2">
      Comment intégrer avis, avatars et micro-chiffres pour convaincre sans forcer.
    </p>
  </div>

  {/* CONTENT */}
  <div className="article-content mx-auto" style={{ maxWidth: "760px" }}>
    <p className="lead text-black-50">
      La preuve sociale n’agresse pas. Elle rassure. Un visiteur hésite ?  
      Montrez-lui discrètement que d’autres vous font déjà confiance. Le cerveau
      **imite ce qui semble sûr** — surtout quand l’effort de décision est élevé.
    </p>

    <h2 className="mt-5 mb-3">1) Les avis : humains, courts, crédibles</h2>
    <p>
      Privilégiez des extraits <em>courts</em> (1–2 phrases), une identité <em>vérifiable</em>
      (prénom + initiale, avatar), et un contexte <em>concret</em> (service, ville).
      Évitez les pavés et les émojis excessifs : la sobriété inspire confiance.
    </p>

    <figure className="my-4 text-center">
      <Image
        src="/assets/img/articles/avatars-strip.jpg"
        alt="Exemple d’avatars et d’avis clients"
        width={900}
        height={150}
        className="rounded-4 object-cover"
      />
      <figcaption className="text-muted small mt-2">
        Strip d’avatars + étoiles remplies + micro-citation : la combinaison la plus lisible.
      </figcaption>
    </figure>

    <ul>
      <li><strong>Format efficace :</strong> ⭐️⭐️⭐️⭐️⭐️ + 1 phrase + identité (avatar).</li>
      <li><strong>Placement :</strong> visible <em>au dessus de la ligne de flottaison</em> et répété plus bas.</li>
      <li><strong>Variez :</strong> 3–6 avis, profils différents, cas d’usage différents.</li>
    </ul>

    <h2 className="mt-5 mb-3">2) Logos clients : preuve douce, sans dominer</h2>
    <p>
      Les logos sont un repère visuel immédiat. Affichez-les en monochrome, petite taille,
      espacés, avec un titre discret (“Ils nous font confiance”). L’objectif : rassurer, pas impressionner.
    </p>

    <figure className="my-4 text-center">
      <Image
        src="/assets/img/articles/logos-wall.jpg"
        alt="Mur de logos clients sobre"
        width={900}
        height={150}
        className="rounded-4 object-cover"
      />
      <figcaption className="text-muted small mt-2">
        Mur de logos en niveaux de gris, tailles homogènes, marges respirantes.
      </figcaption>
    </figure>

    <ul>
      <li><strong>Monochrome :</strong> évite l’effet “marché coloré”.</li>
      <li><strong>Homogénéité :</strong> mêmes marges, mêmes hauteurs, pas d’outliers dominants.</li>
      <li><strong>Contextualisez :</strong> si possible, liez chaque logo à un mini cas (1 phrase).</li>
    </ul>

    <h2 className="mt-5 mb-3">3) Micro-chiffres : le signal qui déclenche</h2>
    <p>
      Les petits chiffres concrets (ex. “+38&nbsp;% d’appels en 30 jours”, “4,8/5 sur 126 avis”)
      créent un déclic de confiance. Préférez 2–3 <em>indicateurs forts</em> à un tableau exhaustif.
    </p>

    <figure className="my-4 text-center">
      <Image
        src="/assets/img/articles/kpis-cards.jpg"
        alt="Cartes de micro-chiffres (KPIs) claires"
        width={900}
        height={150}
        className="rounded-4 object-cover"
      />
      <figcaption className="text-muted small mt-2">
        2–3 cartes KPI, gros chiffre, label court, légende en une ligne : impact immédiat.
      </figcaption>
    </figure>

    <ul>
      <li><strong>Lisibilité :</strong> un gros chiffre, un label, une micro-preuve en dessous.</li>
      <li><strong>Vérité :</strong> pas de promesses vagues ; un chiffre daté et sourcé vaut mieux que du flou.</li>
      <li><strong>Position :</strong> près d’un CTA pour lever l’hésitation au clic.</li>
    </ul>

    <blockquote className="my-5 p-4 rounded-4 bg-light text-dark fw-medium border-start border-4 border-dark">
      “Ce n’est pas vous qui dites que vous êtes bon ; ce sont les autres qui le montrent.”
    </blockquote>

    <h2 className="mt-5 mb-3">Checklist “preuve sociale” à intégrer aujourd’hui</h2>
    <ul>
      <li>✔️ 3–6 avis courts avec avatars + étoiles remplies (jaune doux).</li>
      <li>✔️ Mur de 6–12 logos en monochrome, tailles harmonisées.</li>
      <li>✔️ 2–3 micro-chiffres clés près du CTA.</li>
      <li>✔️ Répéter une preuve sociale <em>au dessus</em> et <em>au dessous</em> de la ligne de flottaison.</li>
      <li>✔️ Ton sobre, “calme premium” — pas d’hyperbole.</li>
    </ul>

    <p className="mt-4">
      La preuve sociale agit comme un **calme visuel** : elle rassure sans parler fort.  
      Bien dosée, elle transforme une bonne impression en **action**.
    </p>
  </div>

  {/* CTA FINAL */}
  <div className="text-center mt-5 pt-5">
    <h3 className="mb-3 fw-semibold text-dark">
      Vous voulez une preuve sociale qui convertit, sans surjouer ?
    </h3>
    <p className="text-muted mb-4">
      On vous conçoit un bloc d’avis + logos + KPIs sur-mesure, intégré à votre page en 48h.
    </p>
    <Link
      href="/rdv"
      className="tp-btn-black-2"
    >
      Concevoir ma preuve sociale{" "}
      <span className="p-relative">
        <RightArrowTwo />
        <ArrowBg />
      </span>
    </Link>
  </div>

  <style jsx>{`
    .article-hero { aspect-ratio: 3 / 1; }
    .article-tag {
      position: absolute; top: 20px; left: 20px;
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
