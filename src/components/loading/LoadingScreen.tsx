'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

// Event global pour "fin du loader"
const LOADER_EVENT = 'app:loader:done';
declare global { interface Window { __LOADER_DONE__?: boolean } }

type Props = {
  background?: string;     // fond du loader (haut de l'écran)
  color?: string;          // couleur du texte + barre
  title?: string;          // \n pour un retour à la ligne
  minDuration?: number;    // ms
  letterStagger?: number;  // s
  fontSize?: string;
  blurHeightVH?: number;   // hauteur de la zone floue en vh
  blurStrength?: number;   // px de blur
};

export default function LoadingScreen({
  background = '#ffffff',
  color = '#111111',
  title = 'Un site vraiment simple',
  minDuration = 1400,
  letterStagger = 0.03,
  fontSize = 'clamp(2.2rem, 7vw, 6.2rem)',
  blurHeightVH = 22,
  blurStrength = 16,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);

  const lines = useMemo(() => title.split('\n'), [title]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    const titleEl = titleRef.current;
    const blurEl = blurRef.current;
    if (!wrap || !bar || !titleEl || !blurEl) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // sélection des lettres
    const chars = Array.prototype.slice.call(
      titleEl.querySelectorAll<HTMLElement>('.char')
    ) as HTMLElement[];

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // fonction qui notifie la fin du loader
    const notifyDone = () => {
      try {
        window.__LOADER_DONE__ = true;
        window.dispatchEvent(new Event(LOADER_EVENT));
        // Si ScrollTrigger est dispo globalement, on rafraîchit
        (window as any).ScrollTrigger?.refresh?.();
      } catch {}
    };

    if (reduce) {
      // Mode réduit : pas d'anims, on notifie directement
      gsap.set(bar, { transformOrigin: 'left center', scaleX: 1 });
      gsap.set(blurEl, { opacity: 0 });
      tl.set(wrap, { display: 'none', onComplete: notifyDone });
      return () => { tl.kill(); };
    }

    // États init
    gsap.set(bar, { transformOrigin: 'left center', scaleX: 0 });
    gsap.set(chars, { display: 'inline-block', y: '0.6em', opacity: 0 });
    gsap.set(blurEl, { opacity: 0, y: 20 });

    // 1) Lettres en escalade (le titre reste)
    tl.to(chars, {
      y: 0, opacity: 1, duration: 0.6, stagger: letterStagger
    }, 0);

    // 2) Barre de progression en parallèle
    tl.to(bar, {
      scaleX: 1,
      duration: Math.max(0.6, minDuration / 1000),
      ease: 'power1.inOut',
    }, 0.1);

    // 3) Bande floue : IN puis OUT avant le slide
    tl.to(blurEl, { opacity: 1, y: 0, duration: 0.5 }, 0.1);
    tl.to(blurEl, { opacity: 0, y: 10, duration: 0.35 }, '>-0.15');

    // 4) Fermeture du loader (slide up) + notification
    tl.to(wrap, { yPercent: -100, duration: 0.65, ease: 'power2.inOut' })
      .set(wrap, { display: 'none', onComplete: notifyDone });

    return () => { tl.kill(); };
  }, [minDuration, letterStagger, blurHeightVH, blurStrength, title]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        // Transparent pour que le blur voie la page
        background: 'transparent',
        color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
      }}
      aria-live="polite"
      aria-busy="true"
    >
      {/* Panneau blanc avec dégradé vers transparent en bas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `linear-gradient(to bottom,
            ${background} 0%,
            ${background} ${100 - blurHeightVH}vh,
            rgba(255,255,255,0) 100%)`,
        }}
      />

      {/* Contenu central */}
      <div style={{ textAlign: 'center', width: 'min(92vw, 1000px)', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          aria-label={title}
          style={{
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            fontSize,
          }}
        >
          {lines.map((line, i) => (
            <div key={i} className="line" aria-hidden="true">
              {line.split('').map((ch, j) =>
                ch === ' ' ? (
                  <span
                    key={j}
                    className="char char--space"
                    style={{ width: '0.36em', display: 'inline-block' }}
                  >
                    {'\u00A0'}
                  </span>
                ) : (
                  <span key={j} className="char">{ch}</span>
                )
              )}
            </div>
          ))}
        </div>

        {/* Barre de progression */}
        <div
          style={{
            margin: '28px auto 0',
            width: 'min(460px, 72%)',
            height: 4,
            background: 'rgba(0,0,0,0.08)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <span
            ref={barRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              background: color,
              transform: 'scaleX(0)',
            }}
          />
        </div>
      </div>

      {/* Bande floue animée en bas */}
      <div
        ref={blurRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${blurHeightVH}vh`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          // gradient mask : max en bas → 0 en haut
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          // Fallback si backdrop-filter absent
          background: 'linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0))',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </div>
  );
}
