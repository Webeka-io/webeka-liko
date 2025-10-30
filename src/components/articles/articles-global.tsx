'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoMain from "@/assets/img/articles/logo_articles.png";

type Article = {
  title: string;
  slug: string;
  excerpt: string;
  cover: string; // chemin image
  tag: string;
  date: string; // "2025-10-28"
  readTime: string; // "4 min"
};

const ARTICLES: Article[] = [
  {
    title: "Pourquoi un site clair convertit mieux (et comment y arriver)",
    slug: "site-clair-convertit-mieux",
    excerpt:
      "Simplicité, hiérarchie, confiance : 3 leviers concrets pour transformer vos visiteurs en prospects.",
    cover: "/assets/img/articles/cover-ux-clarte.jpg",
    tag: "UX Design",
    date: "2025-10-28",
    readTime: "4 min",
  },
  {
    title: "SEO local : rendre votre activité trouvable en 24h",
    slug: "seo-local-trouvable-rapidement",
    excerpt:
      "Les bases utiles (vraiment) pour faire remonter votre site sur les recherches locales.",
    cover: "/assets/img/articles/cover-seo-local.jpg",
    tag: "SEO",
    date: "2025-10-20",
    readTime: "5 min",
  },
  {
    title: "Preuve sociale : l’arme douce qui rassure (avis, logos, chiffres)",
    slug: "preuve-sociale-qui-rassure",
    excerpt:
      "Comment intégrer avis, avatars, et micro-chiffres pour convaincre sans forcer.",
    cover: "/assets/img/articles/cover-preuve-sociale.jpg",
    tag: "Conversion",
    date: "2025-10-14",
    readTime: "3 min",
  },
];

export default function ArticlesPage() {
  return (
   <div className="tp-hero-3-area tp-hero-3-ptb1 fix">
      <div className="container">
        {/* HERO */}
        <div className="row">
          <div className="col-xl-12 pt-dynamic">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape3 my-custom-circle">
                <span></span>
              </div>

              <h4 className="tp-hero-3-title1 tp_reveal_anim mb-2 ">
                <span className="tp-reveal-line pb-0  ">
                  Nos Articles
                  <span className="logo-wrap d-inline-block position-relative align-middle icontitle ml-10 ">
                    <Image
                      src={logoMain}
                      alt="Logo Webeka"
                      fill
                      className="object-fit-contain handshake-logo"
                      sizes="(min-width:1200px) 180px, (min-width:768px) 60px, (min-width:576px) 60px, 40px"
                    />
                  </span>
                </span>
              </h4>


              <span className="md:d-none d-md-block tp-hero-3-category tp_reveal_anim mb-3 d-inline-block">
                Design, SEO, conversion — des conseils concrets pour faire grandir votre activité.
              </span>

              <p
                className="d-none d-md-block tp-hero-3-category-2 fs-5 mt-2"
                style={{ maxWidth: "720px", margin: "0 auto" }}
              >
                Des analyses courtes, actionnables et honnêtes. Pas de jargon inutile, juste ce qui
                améliore votre visibilité et vos prises de rendez-vous.
              </p>
            </div>
          </div>
        </div>

        {/* GRID ARTICLES */}
        <div className="row g-3 g-md-4 mt-5">
          {ARTICLES.map((a) => (
            <div key={a.slug} className="col-12 col-md-6 col-xl-4">
              <Link href={`/articles/${a.slug}`} className="text-decoration-none">
                <article className="article-card h-100 border rounded-4 bg-white overflow-hidden d-flex flex-column">
                  {/* Cover */}
                  <div className="article-cover position-relative">
                    <Image
                      src={a.cover}
                      alt={a.title}
                      width={1200}
                      height={720}
                      className="w-100 h-100 object-cover"
                    />
                    <span className="article-tag">{a.tag}</span>
                  </div>

                  {/* Content */}
                  <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h5 className="mb-2 text-dark">{a.title}</h5>
                      <p className="mb-0 text-muted">{a.excerpt}</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <small className="text-muted">
                        {a.date} • {a.readTime}
                      </small>

                      {/* Bouton “Lire l’article” noir avec inversion au hover */}
                      <span className="article-btn">Lire l’article →</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM spacing */}
        <div className="py-5" />
      </div>

      {/* Styles locaux */}
      <style jsx>{`
        .article-card {
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .article-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-color: transparent;
        }

        .article-cover { aspect-ratio: 16 / 9; }
        .article-tag {
          position: absolute;
          left: 16px;
          top: 16px;
          background: rgba(0,0,0,0.75);
          color: #fff;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .article-btn {
          display: inline-block;
          background: #000;
          color: #fff;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 24px;
          transition: all .3s ease;
          border: 1px solid transparent;
        }
        .article-btn:hover {
          background: #fff;
          color: #000;
          border-color: #000;
        }

        /* Optionnel : rendre les images bien “cover” sur toutes tailles */
        :global(.object-cover) {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
