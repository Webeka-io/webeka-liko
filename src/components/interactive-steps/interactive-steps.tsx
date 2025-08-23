"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function InteractiveStepsV4Isolated() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  // Crée / récupère le shadow root une seule fois
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // si le shadow existe déjà, on le réutilise
    if (host.shadowRoot) {
      shadowRef.current = host.shadowRoot;
    } else {
      shadowRef.current = host.attachShadow({ mode: "open" });
    }
    setRoot(shadowRef.current);
    // pas de dépendances → ne s'exécute qu'une fois par instance
  }, []);

  // ----- styles encapsulés -----
  const css = `
    :host { all: initial; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial; line-height: 1.5; color: #111827; }
    .isv4 { position: relative; min-height: 400vh; background: #fff; }
    .isv4-header { position: sticky; top: 0; z-index: 50; background:#fff; border-bottom: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
    .isv4-container { max-width: 1200px; margin: 0 auto; padding: 16px 24px; }
    .isv4-h1 { margin: 0; font-size: 20px; font-weight: 700; color:#111827; }

    .isv4-steps-outer { position: relative; padding-top: 500px; }
    .isv4-steps-inner { position: relative; max-width: 64rem; margin: 0 auto; }

    .isv4-step { position: sticky; top: 8rem; margin-bottom: 1rem; transition: transform .6s cubic-bezier(0.4,0,0.2,1); }
    .isv4-card { position: relative; background:#fff; border: 2px solid #d1d5db; box-shadow: 0 12px 30px rgba(0,0,0,.08); border-radius: 1rem; }
    .isv4-body { position: relative; background:#fff; border-radius: 1rem; padding: 2rem; height: 20rem; }

    .isv4-row { display:flex; align-items:center; justify-content:space-between; margin-bottom: 1.5rem; }
    .isv4-icon { width: 4rem; height: 4rem; border-radius: 9999px; background:#000; color:#fff; display:flex; align-items:center; justify-content:center; font-size: 1.5rem; box-shadow: 0 10px 20px rgba(0,0,0,.15); }
    .isv4-stepmeta { text-align: right; }
    .isv4-stepmeta .lbl { color:#6b7280; font-size:.875rem; font-weight:600; }
    .isv4-stepmeta .num { color:#111827; font-size:1.75rem; font-weight:800; }

    .isv4-title { margin:0 0 .5rem; font-size:1.75rem; font-weight:800; color:#111827; }
    .isv4-desc { margin:0; color:#4b5563; font-size:1.125rem; line-height:1.7; }

    .isv4-progress { position:absolute; left:2rem; right:2rem; bottom:2rem; }
    .isv4-progress .top { display:flex; align-items:center; justify-content:space-between; margin-bottom:.5rem; }
    .isv4-progress .lbl { color:#6b7280; font-size:.875rem; }
    .isv4-progress .val { color:#111827; font-size:.875rem; font-weight:600; }
    .isv4-bar { width:100%; height:.5rem; background:#e5e7eb; border-radius:9999px; overflow:hidden; }
    .isv4-bar > span { display:block; height:100%; background:#000; width:0%; transition: width 1s ease-out; border-radius:9999px; }

    .isv4-deco { position:absolute; border-radius:9999px; background:#f3f4f6; filter:blur(16px); opacity:.6; pointer-events:none; }
    .isv4-deco.a { top:.75rem; right:.75rem; width:5rem; height:5rem; }
    .isv4-deco.b { bottom:.75rem; left:.75rem; width:4rem; height:4rem; filter:blur(12px); opacity:.35; }

    .isv4-side { position: fixed; right: 2rem; top: 50%; transform: translateY(-50%); z-index: 40; display:flex; flex-direction:column; gap:1rem; }
    .isv4-dot { width:12px; height:12px; border-radius:9999px; background:#9ca3af; transition: all .5s ease; box-shadow:none; }
    .isv4-dot.active { background:#000; box-shadow: 0 4px 12px rgba(0,0,0,.25); }

    @media (max-width: 991.98px) {
      .isv4-steps-outer { padding-top: 400px; }
      .isv4-body { height: 19rem; }
      .isv4-title { font-size: 1.6rem; }
      .isv4-desc { font-size: 1.0625rem; }
    }
    @media (max-width: 767.98px) {
      .isv4-steps-outer { padding-top: 320px; }
      .isv4-step { top: 6.5rem; }
      .isv4-body { padding: 1.25rem; min-height: 16rem; height: auto; }
      .isv4-title { font-size: 1.4rem; }
      .isv4-desc { font-size: 1rem; }
      .isv4-side { right: .75rem; gap: .75rem; }
      .isv4-container { padding: 12px 16px; }
    }
  `;

  // ----- logique d’état -----
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { id: 1, title: "Découverte",  description: "Analysez vos besoins et définissez vos objectifs pour créer une stratégie personnalisée.", icon: "🔍" },
    { id: 2, title: "Planification", description: "Élaborez un plan détaillé avec des étapes claires et des délais réalistes.", icon: "📋" },
    { id: 3, title: "Exécution",    description: "Mettez en œuvre votre plan avec précision et suivez les progrès en temps réel.", icon: "⚡" },
    { id: 4, title: "Optimisation", description: "Analysez les résultats et optimisez continuellement pour maximiser les performances.", icon: "🚀" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      const step = Math.min(Math.floor(window.scrollY / (h * 0.6)), steps.length - 1);
      setActiveStep(step);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [steps.length]);

  // mapping pour l’effet “cascade”
  const yForIndex = (i: number) => (i === 1 ? 120 : i === 2 ? 240 : i === 3 ? 350 : 0);

  return (
    <div ref={hostRef}>
      {root &&
        createPortal(
          <>
            <style>{css}</style>

            <div className="isv4">
              {/* Header */}
              <div className="isv4-header">
                <div className="isv4-container">
                  <h1 className="isv4-h1">Processus en 4 Étapes</h1>
                </div>
              </div>

              {/* Steps */}
              <div className="isv4-steps-outer">
                <div className="isv4-steps-inner">
                  {steps.map((step, index) => {
                    const translateY = yForIndex(index);
                    const done = index <= activeStep;

                    return (
                      <div
                        key={step.id}
                        className="isv4-step"
                        style={{ transform: `translateY(${translateY}px)`, zIndex: 10 + index }}
                      >
                        <div className="isv4-card">
                          <div className="isv4-body">
                            <div className="isv4-row">
                              <div className="isv4-icon"><span>{step.icon}</span></div>
                              <div className="isv4-stepmeta">
                                <div className="lbl">Étape</div>
                                <div className="num">{step.id}</div>
                              </div>
                            </div>

                            <div>
                              <h3 className="isv4-title">{step.title}</h3>
                              <p className="isv4-desc">{step.description}</p>
                            </div>

                            <div className="isv4-progress">
                              <div className="top">
                                <span className="lbl">Progression</span>
                                <span className="val">{done ? "100%" : "0%"}</span>
                              </div>
                              <div className="isv4-bar">
                                <span style={{ width: done ? "100%" : "0%" }} />
                              </div>
                            </div>

                            <div className="isv4-deco a" />
                            <div className="isv4-deco b" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Side dots */}
                <div className="isv4-side">
                  {steps.map((_, i) => (
                    <div key={i} className={`isv4-dot ${i <= activeStep ? "active" : ""}`} />
                  ))}
                </div>
              </div>
            </div>
          </>,
          root
        )}
    </div>
  );
}
