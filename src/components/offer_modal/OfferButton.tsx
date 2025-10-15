'use client';
import React from 'react';
import { useOfferModal } from '@/components/offer_modal/OfferModalContext';

export default function OfferButton({
  label = 'Je me lance',
  className = 'tp-btn-black-2',
}: {
  label?: string;
  className?: string;
}) {
  const { openOfferModal } = useOfferModal();

  return (
    <button
      type="button"
      className={className}
      onClick={openOfferModal}
      aria-label={`Ouvrir les détails de l'offre : ${label}`}
    >
      {label}
    </button>
  );
}
