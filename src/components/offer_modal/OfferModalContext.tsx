'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import OfferModal from '@/components/offer_modal/OfferModal';

type OfferContextType = {
  openOfferModal: () => void;
  closeOfferModal: () => void;
};

const OfferModalContext = createContext<OfferContextType | undefined>(undefined);

export function OfferModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openOfferModal = () => setIsOpen(true);
  const closeOfferModal = () => setIsOpen(false);

  // ✅ Event delegation: tout élément avec data-offer-modal ouvre la modale
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest<HTMLElement>('[data-offer-modal]');
      if (trigger) {
        // Laisse un href "fallback" mais empêche la navigation
        e.preventDefault();
        openOfferModal();
      }
    };
    // useCapture=true pour intercepter avant d'autres handlers
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return (
    <OfferModalContext.Provider value={{ openOfferModal, closeOfferModal }}>
      {children}
      {isOpen && <OfferModal onClose={closeOfferModal} />}
    </OfferModalContext.Provider>
  );
}

export function useOfferModal() {
  const ctx = useContext(OfferModalContext);
  if (!ctx) throw new Error('useOfferModal must be used within OfferModalProvider');
  return ctx;
}
