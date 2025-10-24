import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, SplitText);

/* Helpers */
const IS_MOBILE = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;
const REDUCED = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Type pour la fonction chroma.scale(...) afin d’éviter any */
type ChromaScaleFn = (t: number) => { hex: () => string };

export function ctaAnimation() {
  const nodes = document.querySelectorAll<HTMLElement>(".cta-text");
  if (!nodes.length) return;

  if (REDUCED()) {
    nodes.forEach((el) => {
      gsap.set(el, { opacity: 1, clearProps: "all" });
    });
    return;
  }

  if (IS_MOBILE()) {
    // 🔹 MOBILE : ultra light (pas de SplitText, pas de loop)
    nodes.forEach((el) => {
      if (el.dataset.ctaInit === "1") return;
      el.dataset.ctaInit = "1";

      // ✅ Dégradé or statique performant (CSS text gradient)
      applyStaticGoldGradient(el);

      gsap.fromTo(
        el,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power1.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onStart() {
            el.style.willChange = "opacity, transform";
          },
          onComplete() {
            el.style.willChange = "";
          },
        }
      );
    });
    return;
  }

  // 💻 DESKTOP : effet d’origine, mais pause quand hors écran
  nodes.forEach((el, idx) => {
    if ((el as any)._ctaInit) return;
    (el as any)._ctaInit = true;

    // Fade-in unique à l’apparition
    gsap.set(el, { opacity: 0 });
    gsap.to(el, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: { trigger: el, start: "bottom 100%-=50px", once: true },
    });

    // SplitText une fois
    const split = new SplitText(el, { type: "words,chars" });
    const chars = (split.chars as unknown as Element[]) || [];

    // ✅ Palette or cinématique (gold-600 → gold-300)
    const endGradient: ChromaScaleFn = (chroma as any).scale([
      "#C28E4A", // gold-600
      "#DDA85A", // gold-500
      "#E3B567", // gold-400
      "#F5D9A8", // gold-300
    ]);

    // Timeline infinie (contrôlée au scroll)
    const tl = gsap.timeline({ repeat: -1, paused: true });

    tl.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power1.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
      onStart() {
        chars.forEach((c) => ((c as HTMLElement).style.willChange = "transform, color, text-shadow"));
      },
    });

    // petite montée
    tl.to(
      chars,
      {
        yPercent: -20,
        ease: "elastic.out(1, 0.6)",
        stagger: 0.03,
        duration: 0.8,
      },
      0.5
    );

    // retour élastique
    tl.to(
      chars,
      {
        scaleY: 1,
        ease: "elastic.out(1, 0.6)",
        stagger: 0.03,
        duration: 1.5,
      },
      0.5
    );

    // ✅ passage en dégradé or + halo doux
    tl.to(
      chars,
      {
        color: (i: number, _el: Element, arr: Element[]) => endGradient(i / arr.length).hex(),
        textShadow: "0 0 16px rgba(221,168,90,0.28)",
        ease: "power1.out",
        stagger: 0.03,
        duration: 0.3,
      },
      0.5
    );

    // RAZ position
    tl.to(
      chars,
      {
        yPercent: 0,
        ease: "back.out(1.4)",
        stagger: 0.03,
        duration: 0.8,
      },
      0.7
    );

    // ✅ retour à une couleur de base lisible : or principal (au lieu de #fff)
    tl.to(chars, {
      color: "var(--gold-500, #DDA85A)",
      textShadow: "none",
      duration: 1.4,
      stagger: 0.05,
      onComplete() {
        chars.forEach((c) => ((c as HTMLElement).style.willChange = ""));
      },
    });

    // Trigger visibilité
    ScrollTrigger.create({
      id: `cta-loop-${idx}`,
      trigger: el,
      start: "bottom 100%-=50px",
      end: "bottom top",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.pause(),
      onLeaveBack: () => tl.pause(),
    });
  });
}

/* ✅ Applique un gradient texte or (performant) + halo discret pour mobile */
function applyStaticGoldGradient(el: HTMLElement) {
  const gradient =
    "linear-gradient(90deg, #C28E4A 0%, #DDA85A 35%, #E3B567 70%, #F5D9A8 100%)";
  el.style.backgroundImage = gradient;
  (el.style as any).webkitBackgroundClip = "text";
  el.style.backgroundClip = "text";
  el.style.color = "transparent";
  // halo discret lisible sur fond sombre
  el.style.textShadow = "0 0 12px rgba(221,168,90,0.22)";
}
