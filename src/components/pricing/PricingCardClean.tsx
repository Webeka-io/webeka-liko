// PricingCardClean.tsx
'use client';
import React from 'react';

export default function PricingCardClean() {
  return (
    <section className="pricing" aria-label="Forfait Annuel Unique">
      <div className="borderWrap">
        <div className="inner">

          {/* Badge */}
          <div className="badge" role="note" aria-label="Création gratuite">
            <span aria-hidden>🎉</span> Création 100% GRATUITE
          </div>

          {/* Titre & prix */}
          <h3 className="title">Forfait Annuel Unique</h3>

          <div className="priceRow">
            <span className="amount">
              199<span className="eur">€</span>
            </span>
            <span className="per">/an</span>
          </div>

          <p className="subtitle">Hébergement, maintenance et support inclus</p>

          {/* Avantages */}
          <ul className="features" aria-label="Avantages">
            <li>
              <CheckIcon />
              <div>
                <strong>Hébergement sécurisé</strong>
                <span>Serveurs français, certificat SSL inclus</span>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>Modifications incluses</strong>
                <span>Changements de textes et images</span>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>Maintenance technique</strong>
                <span>Mises à jour et sauvegardes automatiques</span>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <strong>Assistance rapide</strong>
                <span>Support téléphone et email</span>
              </div>
            </li>
          </ul>

          {/* Bonus */}
          <div className="bonus">
            <p className="bonusTitle">+ Bonus inclus :</p>
            <ul className="bonusGrid">
              <li><TrendIcon /> Optimisation Google</li>
              <li><ShieldIcon /> Sécurité renforcée</li>
              <li><ZapIcon /> Vitesse optimisée</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="ctaRow">
            <a href="/contact" className="ctaBtn" aria-label="Commencer maintenant">
              Commencer maintenant
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Styles encapsulés, sans animations ni dépendances */}
      <style jsx>{`
        .pricing {
          margin: 40px auto 0;
          max-width: 880px;
          padding-inline: 16px;
        }
        .borderWrap {
          position: relative;
          border-radius: 28px;
          padding: 1px; /* épaisseur de bordure */
          background: white;
        }
        .inner {
          border-radius: 27px;
          background: rgba(255,255,255,0.95);
          padding: clamp(18px, 3.5vw, 36px);
          color: #0f172a;
        }
        @media (prefers-color-scheme: dark) {
          .inner { background: rgba(20,20,24,0.8); color: #e5e7eb; }
        }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 700;
          font-size: clamp(12px, 1.6vw, 14px);
          color: #fff;
          background: linear-gradient(90deg, #6d28d9, #7c3aed);
          margin: 4px 0 16px;
        }

        .title {
          margin: 0 0 8px;
          text-align: center;
          font-weight: 800;
          font-size: clamp(20px, 3.2vw, 32px);
          letter-spacing: .2px;
        }

        .priceRow {
          display: flex; align-items: baseline; justify-content: center; gap: 10px;
          margin: 8px 0 10px;
        }
        .amount {
          font-weight: 900;
          line-height: 1;
          color: #2563eb;
          font-size: clamp(40px, 7vw, 64px);
        }
        .eur { font-weight: 900; }
        .per { opacity: .85; font-size: clamp(14px, 2vw, 18px); }

        .subtitle {
          text-align: center;
          opacity: .8;
          font-size: clamp(14px, 1.7vw, 18px);
          margin: 6px 0 18px;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          list-style: none; margin: 0; padding: 0;
        }
        .features li {
          display: grid;
          grid-template-columns: 28px 1fr;
          align-items: start;
          gap: 12px;
        }
        .features strong { display: block; font-weight: 700; }
        .features span { display: block; opacity: .75; font-size: .95em; }

        @media (min-width: 768px) {
          .features {
            grid-template-columns: 1fr 1fr;
            column-gap: clamp(16px, 3vw, 28px);
            row-gap: 16px;
          }
        }

        .bonus {
          margin-top: clamp(18px, 3vw, 26px);
          padding: clamp(12px, 2.4vw, 18px);
          border-radius: 18px;
          background: #faf7ff;
          border: 1px solid rgba(124,58,237,.15);
        }
        @media (prefers-color-scheme: dark) {
          .bonus { background: rgba(124,58,237,.12); border-color: rgba(124,58,237,.3); }
        }
        .bonusTitle {
          margin: 0 0 10px; font-weight: 700; text-align: center;
        }
        .bonusGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          list-style: none; margin: 0; padding: 0;
          text-align: center;
        }
        .bonusGrid li {
          display: inline-flex; align-items: center; gap: 8px; justify-content: center;
        }
        @media (min-width: 576px) { .bonusGrid { grid-template-columns: repeat(3, 1fr); } }

        .ctaRow { display: flex; justify-content: center; margin-top: clamp(18px, 3vw, 28px); }
        .ctaBtn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(90deg, #6d28d9, #7c3aed, #2563eb);
        }
        .ctaBtn svg { flex: 0 0 auto; }
      `}</style>
    </section>
  );
}

/* Icônes inline, sans dépendances ni animations */
function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" opacity=".18"/>
      <path d="M6.5 12.5l3.2 3.2 7.8-7.8" fill="none" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M3 17l6-6 4 4 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 11-14h-7V2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
