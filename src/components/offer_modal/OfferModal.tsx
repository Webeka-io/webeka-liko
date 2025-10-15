'use client';
import React, { useEffect, useRef } from 'react';

export default function OfferModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
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
            <li>Création complète du site <strong>offerte</strong> (maquette vivante).</li>
            <li>Vous ne payez <strong>que si vous êtes satisfait</strong> du résultat.</li>
            <li>Abonnement préférentiel : <strong>75 €/mois</strong> tout inclus (hébergement, maintenance, mises à jour).</li>
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
            href="mailto:hello@dentiste-webeka.fr?subject=Offre%20de%20lancement%20Webeka"
            className="offer-modal__btn offer-modal__btn--ghost"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
