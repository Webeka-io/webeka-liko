'use client';
import React, { useState, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

export default function SiteWideBanner() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const text =
    '🎁 Offre de lancement Webeka : création du site offerte — paiement uniquement si vous êtes satisfait • 15 places disponibles • 75 €/mois tout inclus';

  // scroll lock quand modal ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ESC pour fermer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="site-banner">
        {/* overlay cliquable */}
        <button
          ref={btnRef}
          type="button"
          className="site-banner__overlay-btn"
          aria-label="Voir les détails de l’offre de lancement Webeka"
          onClick={() => setOpen(true)}
        />
        <Marquee
          className="site-banner__marquee"
          speed={60}
          gradient={false}
          pauseOnHover
          autoFill
        >
          <span className="site-banner__item">{text}</span>
        </Marquee>
      </div>

      {/* Modal */}
      {open && <OfferModal onClose={() => setOpen(false)} />}
    </>
  );
}

/* ============== Modal interne ============== */
function OfferModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // focus dans le modal
    closeRef.current?.focus();
  }, []);

  const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="offer-modal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-modal-title"
      onClick={closeOnBackdrop}
    >
      <div ref={dialogRef} className="offer-modal__dialog">
        <div className="offer-modal__header">
          <h2 id="offer-modal-title" className="offer-modal__title">
            Offre de lancement Webeka
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="offer-modal__close"
            aria-label="Fermer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="offer-modal__body">
          <p className="offer-modal__badge">🔥 15 premiers clients — satisfaction avant paiement</p>
          <ul className="offer-modal__list">
            <li>Création complète du site <strong>offerte</strong> ( maquette vivante ).</li>
            <li>Vous ne payez <strong>que si vous êtes satisfait</strong> du résultat.</li>
            <li>Abonnement préférentiel : <strong>75 €/mois</strong> tout inclus ( hébergement, maintenance, mises à jour ).</li>
            <li>Référencement : <strong>1 article SEO / mois</strong>.</li>
            <li>Publication <strong>hebdo</strong> Google Business / réseaux ( en option ).</li>
          </ul>

          <div className="offer-modal__note">
              Offre limitée aux 15 premiers clients{" "}
              <strong style={{ color: "#e63946", fontWeight: 700 }}>( plus que 11 places )</strong>.
              Après validation, l’abonnement démarre à 75 €/mois.
          </div>
        </div>

        <div className="offer-modal__actions">
          <a
            href="/dentiste/rdv-dentiste"
            target="_blank"
            rel="noopener noreferrer"
            className="offer-modal__btn offer-modal__btn--primary text-white"
          >
            Réserver un appel
          </a>
          <a
            href="mailto:contact@webeka.fr?subject=Offre%20de%20lancement%20Webeka"
            className="offer-modal__btn offer-modal__btn--ghost"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
