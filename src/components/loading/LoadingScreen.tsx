'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

const LOADER_EVENT = 'app:loader:done';
declare global { interface Window { __LOADER_DONE__?: boolean } }

type Props = {
  background?: string;
  color?: string;
  title?: string;
  minDuration?: number;        // ms
  letterStagger?: number;      // s
  fontSize?: string;
  blurHeightVH?: number;
  blurStrength?: number;
  revealDelaySec?: number;     // délai avant révélation (s)
  revealDurationSec?: number;  // durée révélation (s)
  clipGuardPx?: number;        // desktop: px masqués en bas du titre (anti chevauchement)
  mobileGuardMb?: number;      // mobile: margin-bottom temporaire (évite chevauchement sans clip)

  /** 🆕 Logo au-dessus du slogan */
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;          // px
};

export default function LoadingScreen({
  background = '#ffffff',
  color = '#111111',
  title = 'Un site vraiment simple',
  minDuration = 1400,
  letterStagger = 0.02,
  fontSize = 'clamp(2.2rem, 7vw, 6.2rem)',
  blurHeightVH = 22,
  blurStrength = 16,
  revealDelaySec = 0,
  revealDurationSec = 1.25,
  clipGuardPx = 18,      // desktop
  mobileGuardMb = 28,    // mobile

  // 🆕 Logo
  logoSrc,
  logoAlt = 'Webeka',
  logoWidth = 112,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null); // 🆕

  const lines = useMemo(() => title.split('\n'), [title]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    const titleEl = titleRef.current;
    const titleWrapEl = titleWrapRef.current;
    const blurEl = blurRef.current;
    const logoEl = logoRef.current; // 🆕

    if (!wrap || !bar || !titleEl || !titleWrapEl || !blurEl) return;

    const isMobile = typeof window !== 'undefined'
      ? window.matchMedia?.('(max-width: 640px)')?.matches === true
      : false;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const chars = Array.from(titleEl.querySelectorAll<HTMLElement>('.char'));
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, smoothChildTiming: true });

    const notifyDone = () => {
      try {
        window.__LOADER_DONE__ = true;
        window.dispatchEvent(new Event(LOADER_EVENT));
        (window as any).ScrollTrigger?.refresh?.();
      } catch {}
    };

    // anti-flash SSR
    gsap.set(titleWrapEl, { visibility: 'visible' });
    if (logoEl) gsap.set(logoEl, { visibility: 'visible' }); // 🆕

    if (reduce) {
      gsap.set(bar, { transformOrigin: 'left center', scaleX: 1 });
      gsap.set(blurEl, { opacity: 0 });
      gsap.set(titleWrapEl, { WebkitClipPath: 'none', clipPath: 'none' });
      if (logoEl) gsap.set(logoEl, { opacity: 1, y: 0, scale: 1 }); // 🆕
      tl.set(wrap, { display: 'none', onComplete: notifyDone });
      return () => { tl.kill(); };
    }

    // --- États init ---
    const barDur = Math.max(0.6, minDuration / 1000);
    const initialY = isMobile ? 72 : 96;

    gsap.set(bar, { transformOrigin: 'left center', scaleX: 0 });
    gsap.set(chars, {
      display: 'inline-block',
      y: initialY,
      autoAlpha: 0,
      willChange: 'transform, opacity',
      force3D: true,
      rotateZ: 0.01,
    });
    gsap.set(blurEl, { opacity: 0, y: 20 });

    // 🆕 Logo initial state
    if (logoEl) {
      gsap.set(logoEl, {
        opacity: 0,
        y: 20,
        scale: 0.96,
        willChange: 'transform, opacity',
        visibility: 'hidden',
      });
    }

    if (isMobile) {
      gsap.set(titleWrapEl, {
        WebkitClipPath: 'none',
        clipPath: 'none',
        marginBottom: mobileGuardMb,
      });
    } else {
      gsap.set(titleWrapEl, {
        WebkitClipPath: `inset(0 0 ${clipGuardPx}px 0)`,
        clipPath: `inset(0 0 ${clipGuardPx}px 0)`,
        marginBottom: clipGuardPx,
      });
    }

    // --- 1) Barre de progression ---
    tl.to(bar, { scaleX: 1, duration: barDur, ease: 'power1.inOut' }, 0);

    // --- 2) Bande floue ---
    tl.to(blurEl, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
      .to(blurEl, { opacity: 0, y: 10, duration: 0.35 }, '>-0.15');

    // 🆕 2bis) Révélation du logo (juste avant le texte)
    if (logoEl) {
      tl.set(logoEl, { visibility: 'visible' }, 0);
      tl.to(logoEl, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
        delay: revealDelaySec * 0.6, // commence un peu avant le texte
      }, 0);
    }

    // --- 3) Révélation des lettres ---
    const revealTotal = revealDelaySec + revealDurationSec;
    tl.to(chars, {
      duration: revealDurationSec,
      ease: 'power4.out',
      y: 0,
      autoAlpha: 1,
      stagger: { each: letterStagger, from: 'start' },
      clearProps: 'transform,opacity',
      delay: revealDelaySec,
    }, 0);

    // --- 3bis) Fin d’anim : on relâche proprement ---
    if (isMobile) {
      tl.to(titleWrapEl, {
        marginBottom: clipGuardPx,
        duration: 0.25,
        ease: 'power1.out',
      }, revealTotal - 0.05);
    } else {
      tl.to(titleWrapEl, {
        WebkitClipPath: 'inset(0 0 0 0)',
        clipPath: 'inset(0 0 0 0)',
        duration: 0.22,
        ease: 'power1.out',
      }, revealTotal - 0.05);
    }

    // --- 4) Fermeture ---
    const totalWait = Math.max(revealTotal, barDur);
    tl.to(wrap, { yPercent: -100, duration: 0.65, ease: 'power2.inOut' }, totalWait + 0.1)
      .set(wrap, { display: 'none', onComplete: notifyDone });

    return () => { tl.kill(); };
  }, [
    minDuration,
    letterStagger,
    blurHeightVH,
    blurStrength,
    title,
    revealDelaySec,
    revealDurationSec,
    clipGuardPx,
    mobileGuardMb,
  ]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
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
      {/* Panneau blanc avec dégradé */}
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
        {/* 🆕 Logo au-dessus du titre */}
        {logoSrc && (
          <div
            ref={logoRef}
            style={{
              visibility: 'hidden',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-hidden="true"
          >
            {/* img simple pour compat max, remplaçable par <Image/> si tu veux */}
            <img
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={Math.round(logoWidth * 0.3)}
              style={{ display: 'block', height: 'auto' }}
            />
          </div>
        )}

        {/* Wrapper du titre */}
        <div
          ref={titleWrapRef}
          style={{
            display: 'inline-block',
            visibility: 'hidden', // anti-flash SSR
          }}
        >
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
            position: 'relative',
            zIndex: 3,
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
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          background: 'linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0))',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </div>
  );
}
