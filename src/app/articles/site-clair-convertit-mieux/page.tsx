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
          src="/assets/img/articles/exemple-clarte1.jpg"
          alt="Pourquoi un site clair convertit mieux"
          width={1200}
          height={500} // ✅ hauteur réduite
          priority
          className="w-100 h-auto object-cover"
        />
        <div className="article-tag">UX Design</div>
      </div>

      {/* META */}
      <div className="text-center mb-4">
        <p className="text-muted mb-1">
          Publié le <strong>28 octobre 2025</strong> • Temps de lecture : <strong>4 min</strong>
        </p>
        <h1 className="fw-bold display-6 text-dark">
          Pourquoi un site clair convertit mieux <br />(et comment y arriver)
        </h1>
      </div>

      {/* CONTENT */}
      <div className="article-content mx-auto" style={{ maxWidth: "760px" }}>
        <p className="lead text-black-50">
          La simplicité n’est pas un luxe visuel — c’est un levier de confiance.
          Un site clair, fluide et bien structuré inspire instantanément plus que des effets de mode.
        </p>

        <h2 className="mt-5 mb-3">1. Le cerveau cherche le calme</h2>
        <p>
          Une interface surchargée fait fuir inconsciemment.
          L’utilisateur scanne, mais ne lit pas : il décide en moins de 3 secondes
          si le site semble professionnel et compréhensible.
          C’est pourquoi la hiérarchie visuelle est capitale : titres nets,
          espaces blancs et parcours logique.
        </p>

        <figure className="my-4 text-center">
          <Image
            src="/assets/img/articles/exemple-clarte.jpg"
            alt="Exemple de site clair"
            width={900}
            height={150} // ✅ image secondaire plus petite aussi
            className="rounded-4 object-cover"
          />
          <figcaption className="text-muted small mt-2">
           Un agencement simple et rassurant.
          </figcaption>
        </figure>

        <h2 className="mt-5 mb-3">2. La clarté inspire la confiance</h2>
        <p>
          Le design influence la perception de sérieux.
          75 % des visiteurs jugent la crédibilité d’un site selon son apparence.
          C’est pourquoi Webeka conçoit chaque page comme une conversation claire —
          avec un objectif : rassurer et convaincre sans forcer.
        </p>

        <blockquote className="my-5 p-4 rounded-4 bg-light text-dark fw-medium border-start border-4 border-dark">
          « Le bon design, c’est le moins de design possible. »
          <span className="d-block mt-2 text-muted small">— Dieter Rams</span>
        </blockquote>

        <h2 className="mt-5 mb-3">3. Simplifier, c’est convertir</h2>
        <p>
          En retirant le superflu, on guide mieux l’utilisateur vers l’action.
          C’est vrai pour les sites vitrines comme pour les boutiques :
          un seul message fort, une action claire, une navigation fluide.
        </p>

        <p>Un bon design ne se remarque pas. Il se ressent.</p>
      </div>

      {/* CTA FINAL */}
      <div className="text-center mt-5 pt-5">
        <h3 className="mb-3 fw-semibold text-dark">
          Envie d’un site qui inspire confiance ?
        </h3>
        <p className="text-muted mb-4">
          Parlons de votre projet — sans engagement, juste pour voir ce qu’on peut créer ensemble.
        </p>
        <Link
          href="/rdv"
          className="tp-btn-black-2"
        >
          Réserver un appel{" "}
          <span className="p-relative">
            <RightArrowTwo />
            <ArrowBg />
          </span>
        </Link>
      </div>

      <style jsx>{`
        .article-hero {
          aspect-ratio: 3 / 1; /* ✅ ratio plus plat, image moins haute */
        }

        .article-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.75);
          color: #fff;
          font-size: 14px;
          padding: 6px 12px;
          border-radius: 999px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .article-content p {
          line-height: 1.7;
          color: #333;
          font-size: 17px;
          margin-bottom: 1.2rem;
        }

        .article-content h2 {
          font-size: 22px;
          font-weight: 600;
          color: #000;
        }

        blockquote {
          font-size: 18px;
          background: #f7f7f7;
        }

        .tp-btn-black-2 {
          background: #000;
          color: #fff;
          padding: 12px 30px;
          border-radius: 999px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tp-btn-black-2:hover {
          background: #fff;
          color: #000;
          border: 1px solid #000;
        }

        :global(.object-cover) {
          object-fit: cover;
        }
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
