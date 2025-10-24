"use client";
import { useState, useEffect, CSSProperties } from "react";
import { createPortal } from "react-dom";

const GOLD = "#DDA85A";
const GOLD_SOFT = "rgba(227,181,103,0.35)"; // halo doux

interface WhatsAppButtonProps {
  phoneE164: string;
  message?: string;
  label?: string;
  className?: string;
  customPosition?: CSSProperties;
  theme?: "dark" | "light";
}

export default function WhatsAppButton({
  phoneE164,
  message = "Bonjour, je veux mon site !",
  label = "WhatsApp",
  className,
  customPosition = { bottom: 24, right: 10 },
  theme = "dark",
}: WhatsAppButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsDesktop("matches" in e ? e.matches : (e as MediaQueryList).matches);
    setIsDesktop(mql.matches);
    mql.addEventListener?.("change", onChange as (e: MediaQueryListEvent) => void);
    // @ts-ignore
    mql.addListener?.(onChange);
    return () => {
      mql.removeEventListener?.("change", onChange as (e: MediaQueryListEvent) => void);
      // @ts-ignore
      mql.removeListener?.(onChange);
    };
  }, []);

  if (!mounted) return null;

  const cleanPhone = (phoneE164 || "").replace(/[\s\-()]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  const emailUrl = `mailto:hello@dentiste-webeka.fr?subject=${encodeURIComponent(
    "Demande d'information - Site Web"
  )}&body=${encodeURIComponent(
    "Bonjour,\n\nJe suis intéressé(e) par votre offre de site web.\n\n— Envoyé depuis le bouton PC Webeka"
  )}`;

  // === THEME NOIR + OR ===
  const baseBtnStyle: CSSProperties =
    theme === "dark"
      ? {
          backgroundColor: "#000",      // fond noir
          color: GOLD,                  // icône + texte or (via currentColor)
          border: `1px solid ${GOLD}`,  // contour or
          boxShadow: `0 0 14px ${GOLD_SOFT}`,
        }
      : {
          backgroundColor: "#f5f7f5",
          color: "#1e1e1e",
          border: "1px solid #1e1e1e",
        };

  const handleOpenWhatsApp = () => {
    if (!cleanPhone) return;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsPopupOpen(false);
  };
  const handleOpenEmail = () => (window.location.href = emailUrl);

  const hoverEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow =
      theme === "dark" ? `0 0 20px ${GOLD_SOFT}` : "0 .7rem 1.5rem rgba(0,0,0,.3)";
  };
  const hoverLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow =
      theme === "dark" ? `0 0 14px ${GOLD_SOFT}` : "0 .5rem 1rem rgba(0,0,0,.2)";
  };

  // ---- RENDER ----
  const mobileContent = (
    <>
      {/* Bouton flottant WhatsApp (mobile) */}
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
          ...customPosition,
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
      >
        {/* Icône WhatsApp → prend la couleur or via currentColor */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      </button>

      {/* Popup WhatsApp */}
      {isPopupOpen && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.2)", zIndex: 1040 }}
            onClick={() => setIsPopupOpen(false)}
          />
          <div
            className="position-fixed rounded-4"
            style={{
              bottom: 90,
              right: 20,
              width: 320,
              maxWidth: "calc(100% - 2rem)",
              zIndex: 1051,
              overflow: "hidden",
              background: "#0A0A0A",               // popup en noir premium
              border: `1px solid ${GOLD}`,         // contour or
              color: GOLD,                          // titres & icônes or
              boxShadow: `0 0 22px ${GOLD_SOFT}`,   // halo doux
            }}
          >
            <div className="px-3 py-2 d-flex justify-content-between align-items-center border-bottom"
                 style={{ borderColor: "rgba(221,168,90,0.25)" }}>
              <span className="fw-bold">WhatsApp</span>
              <button onClick={() => setIsPopupOpen(false)} className="btn-close btn-close-white" aria-label="Fermer" />
            </div>
            <div className="p-3" style={{ background: "#111" }}>
              <div className="p-2 rounded-3" style={{ background: "#000", color: "#fff", maxWidth: "80%" }}>
                <p className="mb-0 small" style={{ color: "#ddd" }}>{message}</p>
              </div>
            </div>
            <div className="p-3 border-top" style={{ borderColor: "rgba(221,168,90,0.25)" }}>
              <button
                onClick={handleOpenWhatsApp}
                className="w-100 rounded-pill"
                disabled={!cleanPhone}
                style={{
                  background: "#000",
                  color: GOLD,
                  border: `1px solid ${GOLD}`,
                  padding: "10px 14px",
                  boxShadow: `0 0 14px ${GOLD_SOFT}`,
                }}
              >
                Lancer le chat
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );

  const desktopContent = (
    <>
      {/* Bouton flottant Email (desktop) */}
      <button
        onClick={handleOpenEmail}
        aria-label="Envoyer un email"
        className={`position-fixed d-flex align-items-center justify-content-center rounded-circle whatsapp-button-sdw ${className || ""}`}
        style={{
          width: 43,
          height: 43,
          zIndex: 1050,
          cursor: "pointer",
          transition: "transform .2s ease, box-shadow .2s ease",
          ...baseBtnStyle,
          ...customPosition,
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        title="Envoyer un e-mail"
      >
        {/* Icône enveloppe → or via currentColor */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 5.907a1 1 0 001.228 0L20 8.236V18H4z" />
        </svg>
      </button>
    </>
  );

  const content = isDesktop ? desktopContent : mobileContent;
  return createPortal(content, document.body);
}
