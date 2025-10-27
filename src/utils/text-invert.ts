import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, SplitText);

const IS_MOBILE = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;
const REDUCED = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function textInvert() {
  const selector = ".tp_text_invert";
  const nodes = document.querySelectorAll<HTMLElement>(selector);
  if (!nodes.length) return;

  // Accessibilité : pas d’anim
  if (REDUCED()) {
    nodes.forEach((el) => gsap.set(el, { backgroundPositionX: 0, clearProps: "will-change" }));
    return;
  }

  if (IS_MOBILE()) {
    // ✅ MOBILE : pas de SplitText, reveal léger & one-shot
    nodes.forEach((el) => {
      // Evite les doubles initialisations si la fonction est rappelée
      if (el.dataset.tiInit === "1") return;
      el.dataset.tiInit = "1";

      gsap.to(el, {
        backgroundPositionX: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
        onStart() {
          el.style.willChange = "background-position";
        },
        onComplete() {
          el.style.willChange = "";
        },
      });
    });
  } else {
    // 💻 DESKTOP : comportement d’origine (SplitText lignes + scrub)
    const split = new SplitText(selector, { type: "lines" });
    const lines: HTMLElement[] = (split.lines as unknown as HTMLElement[]) || [];

    lines.forEach((target: HTMLElement) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 85%",
          end: "bottom center",
        },
        onStart() {
          target.style.willChange = "background-position";
        },
        onComplete() {
          target.style.willChange = "";
        },
      });
    });
  }
}

export { textInvert };
