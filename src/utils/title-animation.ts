// animations.ts
import { gsap, Power2 } from "gsap";
import $ from "jquery";
import { ScrollTrigger, SplitText } from "@/plugins";
import type { ScrollTrigger as ST } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* =========================
   Helpers / Config globale
   ========================= */
const IS_MOBILE = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;

const REDUCED = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ➜ facteurs d’allongement mobile
const MOBILE_DURATION_FACTOR = 2;   // x2 plus long sur mobile
const MOBILE_STAGGER_FACTOR  = 1.5; // x1.5 pour les staggers
const mDur  = (base: number) => base * MOBILE_DURATION_FACTOR;
const mStag = (base: number) => base * MOBILE_STAGGER_FACTOR;

let _configured = false;
function configureGSAP() {
  if (_configured) return;
  _configured = true;
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
  gsap.ticker.lagSmoothing(500, 33);
}

/* =========================
   Attente du loader (ton event)
   ========================= */
const LOADER_EVENT = "app:loader:done";

function waitForLoaderDone(timeoutMs = 12000): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }
    // si le flag est déjà posé par ton loader
    if ((window as any).__LOADER_DONE__) {
      resolve();
      return;
    }
    const onDone = () => {
      window.removeEventListener(LOADER_EVENT, onDone as EventListener);
      resolve();
    };
    window.addEventListener(LOADER_EVENT, onDone as EventListener, { once: true });
    // garde-fou si jamais l’event ne part pas
    setTimeout(() => {
      window.removeEventListener(LOADER_EVENT, onDone as EventListener);
      resolve();
    }, timeoutMs);
  });
}

/* =========================
   Animations
   ========================= */

function heroTitleAnim() {
  configureGSAP();
  const heroArea = document.querySelector(".tp-hero-2-area");
  if (!heroArea) return;

  if (REDUCED()) {
    gsap.set(
      [".tp-hero-2-title.text-1", ".tp-hero-2-title.text-2", ".tp-hero-2-content"],
      { x: 0, autoAlpha: 1, clearProps: "all" }
    );
    return;
  }

  if (IS_MOBILE()) {
    gsap.set(".tp-hero-2-title.text-1", { x: 40, autoAlpha: 0 });
    gsap.to(".tp-hero-2-title.text-1", {
      scrollTrigger: { trigger: heroArea, start: "top 92%", once: true },
      duration: mDur(0.45),
      x: 0,
      autoAlpha: 1,
      ease: "power1.out",
    });

    gsap.set(".tp-hero-2-title.text-2", { x: -40, autoAlpha: 0 });
    gsap.to(".tp-hero-2-title.text-2", {
      scrollTrigger: { trigger: heroArea, start: "top 92%", once: true },
      duration: mDur(0.45),
      x: 0,
      autoAlpha: 1,
      ease: "power1.out",
      delay: 0.05,
    });

    gsap.set(".tp-hero-2-content", { x: -50, autoAlpha: 0 });
    gsap.to(".tp-hero-2-content", {
      scrollTrigger: { trigger: heroArea, start: "top 90%", once: true },
      duration: mDur(0.5),
      x: 0,
      autoAlpha: 1,
      ease: "power1.out",
      delay: 0.1,
    });
  } else {
    gsap.set(".tp-hero-2-title.text-1", { x: 300 });
    gsap.to(".tp-hero-2-title.text-1", {
      scrollTrigger: { trigger: heroArea, start: "top center", markers: false },
      duration: 1.7,
      x: 0,
    });
    gsap.set(".tp-hero-2-title.text-2", { x: -300 });
    gsap.to(".tp-hero-2-title.text-2", {
      scrollTrigger: { trigger: heroArea, start: "top center", markers: false },
      duration: 1.7,
      x: 0,
    });
    gsap.set(".tp-hero-2-content", { x: -500 });
    gsap.to(".tp-hero-2-content", {
      scrollTrigger: { trigger: heroArea, start: "top center", markers: false },
      duration: 2,
      x: 0,
    });
  }
}

function heroBgAnimation() {
  configureGSAP();
  const heroBg = document.querySelector(".tp-hero-bg-single");
  if (!heroBg) return;

  if (REDUCED()) {
    gsap.set(heroBg, { scale: 1, autoAlpha: 1, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    gsap.from(heroBg, { scale: 1.06, duration: mDur(0.6), ease: "power1.out", force3D: true });
  } else {
    gsap.from(heroBg, { scale: 1.3, duration: 1.5 });
  }
}

function bounceAnimation() {
  configureGSAP();
  const bounce = document.querySelectorAll(".tp-btn-bounce");
  if (!bounce.length) return;

  if (REDUCED()) {
    gsap.set(bounce, { y: 0, opacity: 1, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    bounce.forEach((btn: any) => {
      const trigger = btn.closest(".tp-btn-trigger") || btn;
      gsap.set(btn, { y: -24, opacity: 0 });
      gsap.to(btn, {
        scrollTrigger: { trigger, start: "top 92%", once: true },
        duration: mDur(0.4),
        ease: "power2.out",
        y: 0,
        opacity: 1,
      });
    });
  } else {
    gsap.from(bounce, { y: -100, opacity: 0 });
    gsap.utils.toArray(bounce).forEach((btn: any) => {
      const $this = $(btn);
      gsap.to(btn, {
        scrollTrigger: { trigger: $this.closest(".tp-btn-trigger"), start: "top center", markers: false },
        duration: 1,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });
    gsap.from(bounce, { y: -100, opacity: 0 });
    gsap.utils.toArray(bounce).forEach((btn: any) => {
      const $this = $(btn);
      gsap.to(btn, {
        scrollTrigger: { trigger: $this.closest(".tp-btn-trigger"), start: "bottom bottom", markers: false },
        duration: 0.9,
        delay: 4,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });
  }
}

function charAnimation() {
  configureGSAP();
  const targets = gsap.utils.toArray(".tp-char-animation") as HTMLElement[];
  if (!targets.length) return;

  if (REDUCED()) {
    gsap.set(targets, { autoAlpha: 1, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    targets.forEach((el) => {
      gsap.set(el, { y: 16, autoAlpha: 0 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        duration: mDur(0.45),
        y: 0,
        autoAlpha: 1,
        ease: "power1.out",
      });
    });
  } else {
    targets.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });
      const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }
}

function fadeAnimation() {
  configureGSAP();

  if (REDUCED()) {
    gsap.set(
      [".tp_fade_bottom", ".tp_fade_top", ".tp_fade_left", ".tp_fade_right", ".tp_fade_anim"],
      { x: 0, y: 0, opacity: 1, clearProps: "all" }
    );
    return;
  }

  if (IS_MOBILE()) {
    const m = (sel: string, from: gsap.TweenVars) => {
      const nodes = gsap.utils.toArray(sel);
      if (!nodes.length) return;
      gsap.set(nodes, from);
      ScrollTrigger.batch(nodes as Element[], {
        start: "top 92%",
        once: true,
        onEnter: (els: Element[], _triggers?: ST[]) => {
          gsap.to(els, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: mDur(0.45),
            ease: "power1.out",
            stagger: mStag(0.05),
          });
        },
      });
    };
    m(".tp_fade_bottom", { y: 40, opacity: 0 });
    m(".tp_fade_top", { y: -40, opacity: 0 });
    m(".tp_fade_left", { x: -40, opacity: 0 });
    m(".tp_fade_right", { x: 40, opacity: 0 });

    const fadeArrayup = gsap.utils.toArray(".tp_fade_anim") as HTMLElement[];
    fadeArrayup.forEach((t) => {
      const from = (t.getAttribute("data-fade-from") || "bottom").toLowerCase();
      const offs = Number(t.getAttribute("data-fade-offset") || 40);
      const dly = Number(t.getAttribute("data-delay") || 0.1);

      const fromVars: gsap.TweenVars =
        from === "top"
          ? { y: -offs, opacity: 0 }
          : from === "left"
          ? { x: -offs, opacity: 0 }
          : from === "right"
          ? { x: offs, opacity: 0 }
          : { y: offs, opacity: 0 };

      gsap.set(t, fromVars);
      gsap.to(t, {
        scrollTrigger: { trigger: t, start: "top 92%", once: true },
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power1.out",
        duration: mDur(0.45),
        delay: dly,
      });
    });
  } else {
    // Desktop inchangé
    if ($(".tp_fade_bottom").length > 0) {
      gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
      const fadeArray = gsap.utils.toArray(".tp_fade_bottom");
      fadeArray.forEach((item: any) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top center+=400" },
        });
        fadeTl.to(item, { y: 0, opacity: 1, ease: "power2.out", duration: 1.5 });
      });
    }
    if ($(".tp_fade_top").length > 0) {
      gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
      const fadetopArray = gsap.utils.toArray(".tp_fade_top");
      fadetopArray.forEach((item: any) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top center+=100" },
        });
        fadeTl.to(item, { y: 0, opacity: 1, ease: "power2.out", duration: 2.5 });
      });
    }
    if ($(".tp_fade_left").length > 0) {
      gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
      const fadeleftArray = gsap.utils.toArray(".tp_fade_left");
      fadeleftArray.forEach((item: any) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top center+=100" },
        });
        fadeTl.to(item, { x: 0, opacity: 1, ease: "power2.out", duration: 2.5 });
      });
    }
    if ($(".tp_fade_right").length > 0) {
      gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
      const faderightArray = gsap.utils.toArray(".tp_fade_right");
      faderightArray.forEach((item: any) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top center+=100" },
        });
        fadeTl.to(item, { x: 0, opacity: 1, ease: "power2.out", duration: 2.5 });
      });
    }
    if ($(".tp_fade_anim").length > 0) {
      const fadeArrayup = gsap.utils.toArray(".tp_fade_anim");
      fadeArrayup.forEach((t: any) => {
        let r = "bottom",
          a = 1,
          o = 1,
          i = 50,
          s = 0.5,
          l = "power2.out";
        t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset"));
        t.getAttribute("data-duration") && (o = t.getAttribute("data-duration"));
        t.getAttribute("data-fade-from") && (r = t.getAttribute("data-fade-from"));
        t.getAttribute("data-on-scroll") && (a = t.getAttribute("data-on-scroll"));
        t.getAttribute("data-delay") && (s = t.getAttribute("data-delay"));
        t.getAttribute("data-ease") && (l = t.getAttribute("data-ease"));
        1 == a
          ? ("top" == r &&
              gsap.from(t, {
                y: -i,
                opacity: 0,
                ease: l,
                duration: o,
                delay: s,
                scrollTrigger: { trigger: t, start: "top 110%" },
              }),
            "left" == r &&
              gsap.from(t, {
                x: -i,
                opacity: 0,
                ease: l,
                duration: o,
                delay: s,
                scrollTrigger: { trigger: t, start: "top 110%" },
              }),
            "bottom" == r &&
              gsap.from(t, {
                y: i,
                opacity: 0,
                ease: l,
                duration: o,
                delay: s,
                scrollTrigger: { trigger: t, start: "top 110%" },
              }),
            "right" == r &&
              gsap.from(t, {
                x: i,
                opacity: 0,
                ease: l,
                duration: o,
                delay: s,
                scrollTrigger: { trigger: t, start: "top 110%" },
              }),
            "in" == r &&
              gsap.from(t, {
                opacity: 0,
                ease: l,
                duration: o,
                delay: s,
                scrollTrigger: { trigger: t, start: "top 110%" },
              }))
          : ("top" == r && gsap.from(t, { y: -i, opacity: 0, ease: l, duration: o, delay: s }),
            "left" == r && gsap.from(t, { x: -i, opacity: 0, ease: l, duration: o, delay: s }),
            "bottom" == r && gsap.from(t, { y: i, opacity: 0, ease: l, duration: o, delay: s }),
            "right" == r && gsap.from(t, { x: i, opacity: 0, ease: l, duration: o, delay: s }),
            "in" == r && gsap.from(t, { opacity: 0, ease: l, duration: o, delay: s }));
      });
    }
  }
}

function revelAnimationOne() {
  configureGSAP();
  const anims = document.querySelectorAll<HTMLElement>(".tp_reveal_anim");
  if (!anims.length) return;

  if (REDUCED()) {
    gsap.set(anims, { autoAlpha: 1, y: 0, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    anims.forEach((el) => {
      gsap.set(el, { y: 24, autoAlpha: 0 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        duration: mDur(0.5),
        y: 0,
        autoAlpha: 1,
        ease: "power1.out",
      });
    });
  } else {
    anims.forEach((areveal: any) => {
      let duration_value: any = 1.5;
      let onscroll_value: any = 1;
      let stagger_value: any = 0.02;
      let data_delay: any = 0.05;

      if (areveal.getAttribute("data-duration")) duration_value = areveal.getAttribute("data-duration");
      if (areveal.getAttribute("data-on-scroll")) onscroll_value = areveal.getAttribute("data-on-scroll");
      if (areveal.getAttribute("data-stagger")) stagger_value = areveal.getAttribute("data-stagger");
      if (areveal.getAttribute("data-delay")) data_delay = areveal.getAttribute("data-delay");

      areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "tp-reveal-line" });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: { trigger: areveal, start: "top 85%", end: "bottom 15%", toggleActions: "play reverse play reverse" },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}

function revelAnimationTwo() {
  configureGSAP();
  const anims = document.querySelectorAll<HTMLElement>(".tp_reveal_anim-2");
  if (!anims.length) return;

  if (REDUCED()) {
    gsap.set(anims, { autoAlpha: 1, y: 0, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    anims.forEach((el) => {
      gsap.set(el, { y: 24, autoAlpha: 0 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        duration: mDur(0.5),
        y: 0,
        autoAlpha: 1,
        ease: "power1.out",
      });
    });
  } else {
    anims.forEach((areveal: any) => {
      let duration_value: any = 2;
      let onscroll_value: any = 1;
      let stagger_value: any = 0.05;
      let data_delay: any = 0.1;

      if (areveal.getAttribute("data-duration")) duration_value = areveal.getAttribute("data-duration");
      if (areveal.getAttribute("data-on-scroll")) onscroll_value = areveal.getAttribute("data-on-scroll");
      if (areveal.getAttribute("data-stagger")) stagger_value = areveal.getAttribute("data-stagger");
      if (areveal.getAttribute("data-delay")) data_delay = areveal.getAttribute("data-delay");

      areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "tp-reveal-line-2" });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: { trigger: areveal, start: "top 85%" },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}

function zoomAnimation() {
  configureGSAP();

  if (REDUCED()) {
    const nodes = document.querySelectorAll(".anim-zoomin");
    if (nodes.length) gsap.set(nodes, { autoAlpha: 1, scale: 1, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    const nodes = document.querySelectorAll(".anim-zoomin");
    nodes.forEach((el: any) => {
      gsap.set(el, { autoAlpha: 0, scale: 1.02 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        duration: mDur(0.45),
        autoAlpha: 1,
        scale: 1,
        ease: "power1.out",
        clearProps: "all",
      });
    });
  } else {
    if ($(".anim-zoomin").length > 0) {
      $(".anim-zoomin").each(function () {
        $(this).wrap('<div class="anim-zoomin-wrap"></div>');
        $(".anim-zoomin-wrap").css({ overflow: "hidden" });

        const $this = $(this);
        const $asiWrap = $this.parents(".anim-zoomin-wrap");

        let tp_ZoomIn = gsap.timeline({
          scrollTrigger: { trigger: $asiWrap, start: "top 90%", markers: false },
        });
        tp_ZoomIn.from($this, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.4,
          ease: Power2.easeOut,
          clearProps: "all",
        });
      });
    }
  }
}

function titleAnimation() {
  configureGSAP();

  const titles = gsap.utils.toArray(".tp_title_anim") as HTMLElement[];
  if (!titles.length) return;

  if (REDUCED()) {
    gsap.set(titles, { autoAlpha: 1, clearProps: "all" });
    return;
  }

  if (IS_MOBILE()) {
    titles.forEach((el) => {
      gsap.set(el, { y: 16, autoAlpha: 0 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        duration: mDur(0.5),
        y: 0,
        autoAlpha: 1,
        ease: "power1.out",
      });
    });
  } else {
    titles.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: splitTextLine, start: "top 90%", end: "bottom 60%", scrub: false, markers: false, toggleActions: "play none none none" },
      });
      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  }
}

/* =========================
   Bootstrap & Export
   ========================= */
function startAllAnimations() {
  heroTitleAnim();
  heroBgAnimation();
  bounceAnimation();
  fadeAnimation();
  charAnimation();
  revelAnimationTwo();
  revelAnimationOne();
  zoomAnimation();
  titleAnimation();
  ScrollTrigger.refresh(); // sécu après init
}

let _bootstrapped = false;
export async function initPageAnimationsAfterLoader() {
  if (_bootstrapped || typeof window === "undefined") return;
  _bootstrapped = true;
  await waitForLoaderDone();   // <-- attend *ton* event/flag
  startAllAnimations();
}

// Auto-boot si import côté client
if (typeof window !== "undefined") {
  initPageAnimationsAfterLoader();
}

export {
  heroTitleAnim,
  heroBgAnimation,
  bounceAnimation,
  fadeAnimation,
  charAnimation,
  revelAnimationTwo,
  revelAnimationOne,
  zoomAnimation,
  titleAnimation,
};
