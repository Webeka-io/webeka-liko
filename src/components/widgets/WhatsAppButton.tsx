"use client";

import { useState, useEffect, CSSProperties } from "react";
import { createPortal } from "react-dom";

interface WhatsAppButtonProps {
  phoneE164: string;
  message?: string;
  label?: string;
  className?: string;
  customPosition?: CSSProperties; // ex: { bottom: "24px", right: "24px" } ou { top: 40, left: 40 }
  theme?: "dark" | "light";       // noir (par défaut) ou blanc
}

export default function WhatsAppButton({
  phoneE164,
  message = "Bonjour, j'aimerais réserver !",
  label = "WhatsApp",
  className,
  customPosition = { bottom: 24, right: 10 }, // défaut : bas-droite
  theme = "dark",
}: WhatsAppButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!phoneE164) return null;
  const cleanPhone = phoneE164.replace(/[\s\-()]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  const baseBtnStyle: CSSProperties =
    theme === "dark"
      ? { backgroundColor: "#f5f7f5", color: "#1e1e1e", border: "1px solid #1e1e1e" }
      : { backgroundColor: "#f5f7f5", color: "#1e1e1e", border: "1px solid #1e1e1e" };

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsPopupOpen(false);
  };

  const content = (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsPopupOpen(true)}
        aria-label={`${label} - Ouvrir une conversation`}
        className={`position-fixed d-flex align-items-center justify-content-center rounded-circle whatsapp-button-sdw ${className || ""}`}
        style={{
          width: 43,
          height: 43,
          zIndex: 1050,
          cursor: "pointer",
          transition: "transform .2s ease, box-shadow .2s ease",
          ...baseBtnStyle,
          ...customPosition, // ✅ position libre (top/bottom/left/right)
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 .7rem 1.5rem rgba(0,0,0,.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.2)";
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <>
          {/* Backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.2)", zIndex: 1040 }}
            onClick={() => setIsPopupOpen(false)}
          />
          {/* Fenêtre chat */}
          <div
            className="position-fixed bg-white rounded-4 shadow-lg"
            style={{
              // place la popup près du bouton (adapte au besoin)
              bottom: 90,
              right: 20,
              width: 320,
              maxWidth: "calc(100% - 2rem)",
              zIndex: 1051,
              overflow: "hidden",
            }}
          >
            <div
              className="px-3 py-2 d-flex justify-content-between align-items-center"
              style={{ background: theme === "dark" ? "#000" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}
            >
              <span className="fw-bold">WhatsApp</span>
              <button onClick={() => setIsPopupOpen(false)} className="btn-close btn-close-white" aria-label="Fermer" />
            </div>
            <div className="p-3 bg-light">
              <div className="bg-white p-2 rounded-3 shadow-sm" style={{ maxWidth: "80%" }}>
                <p className="mb-0 small text-muted">{message}</p>
              </div>
            </div>
            <div className="p-3 border-top">
              <button onClick={handleOpenWhatsApp} className="btn btn-dark w-100 rounded-pill">
                Lancer le chat
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );

  // ✅ Render en portal pour que position:fixed marche même avec des parents transformés
  if (!mounted) return null;
  return createPortal(content, document.body);
}
