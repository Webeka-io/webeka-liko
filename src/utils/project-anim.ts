import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
gsap.registerPlugin(ScrollTrigger);

// Types GSAP pour éviter les "implicit any"
import type { ScrollTrigger as ST } from "gsap/ScrollTrigger";

/* Helpers */
const IS_MOBILE = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 1199px)").matches;
const REDUCED = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ========= Project list (v3) ========= */
function projectThreeAnimation(): void {
  const area = document.querySelector<HTMLElement>(".tp-project-3-area");
  if (!area) return;
  if (area.dataset.p3Init === "1") return; // évite double init si la fonction est rappelée
  area.dataset.p3Init = "1";

  const mm = gsap.matchMedia();

  // Desktop (>=1200): pin + scrub (comportement d'origine)
  mm.add("(min-width: 1200px)", () => {
    if (REDUCED()) {
      document
        .querySelectorAll<HTMLElement>(
          ".tp-project-3-wrap .pro-img-1 img, .tp-project-3-wrap .pro-img-2 img"
        )
        .forEach((el) => gsap.set(el, { x: 0 }));
      return;
    }

    const wraps = Array.from(
      document.querySelectorAll<HTMLElement>(".tp-project-3-wrap")
    );

    wraps.forEach((wrap, idx) => {
      const img1 = wrap.querySelector<HTMLElement>(".pro-img-1 img");
      const img2 = wrap.querySelector<HTMLElement>(".pro-img-2 img");
      if (img1) gsap.set(img1, { x: 500 });
      if (img2) gsap.set(img2, { x: -500 });

      if (img1) {
        gsap.to(img1, {
          x: 0,
          ease: "none",
          transformOrigin: "50% 50%",
          scrollTrigger: {
            id: `p3-img1-${idx}`,
            trigger: wrap,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: true,
          },
        });
      }
      if (img2) {
        gsap.to(img2, {
          x: 0,
          ease: "none",
          transformOrigin: "50% 50%",
          scrollTrigger: {
            id: `p3-img2-${idx}`,
            trigger: wrap,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: false,
          },
        });
      }
    });

    // cleanup optionnel si tu utilises mm.revert() ailleurs
    return () => {
      (ScrollTrigger.getAll() as ST[]).forEach((t) => {
        const id = typeof t.vars?.id === "string" ? t.vars.id : "";
        if (id.startsWith("p3-img")) t.kill();
      });
    };
  });

  // Mobile (<1200): reveals courts, une seule fois (pas de pin/scrub)
  mm.add("(max-width: 1199px)", () => {
    if (REDUCED()) {
      document
        .querySelectorAll<HTMLElement>(
          ".tp-project-3-wrap .pro-img-1 img, .tp-project-3-wrap .pro-img-2 img"
        )
        .forEach((el) => gsap.set(el, { x: 0, autoAlpha: 1 }));
      return;
    }

    const wraps = Array.from(
      document.querySelectorAll<HTMLElement>(".tp-project-3-wrap")
    );

    wraps.forEach((wrap) => {
      const img1 = wrap.querySelector<HTMLElement>(".pro-img-1 img");
      const img2 = wrap.querySelector<HTMLElement>(".pro-img-2 img");

      if (img1) {
        gsap.set(img1, { x: 40, autoAlpha: 0 });
        gsap.to(img1, {
          x: 0,
          autoAlpha: 1,
          duration: 0.45,
          ease: "power1.out",
          scrollTrigger: { trigger: wrap, start: "top 92%", once: true },
        });
      }
      if (img2) {
        gsap.set(img2, { x: -40, autoAlpha: 0 });
        gsap.to(img2, {
          x: 0,
          autoAlpha: 1,
          duration: 0.45,
          ease: "power1.out",
          scrollTrigger: { trigger: wrap, start: "top 92%", once: true },
        });
      }
    });
  });
}

/* ========= Project details (pin right column) ========= */
function projectDetailsPin(): void {
  const area = document.querySelector<HTMLElement>(".project-details-1-area");
  const pinTarget = document.querySelector<HTMLElement>(".project-details-1-right-wrap");
  if (!area || !pinTarget) return;

  const mm = gsap.matchMedia();
  mm.add("(min-width: 1400px)", () => {
    if (REDUCED() || ScrollTrigger.getById("pd1-pin")) return;

    ScrollTrigger.create({
      id: "pd1-pin",
      trigger: area,
      start: "top top",
      end: "bottom 100%",
      pin: pinTarget,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getById("pd1-pin")?.kill();
    };
  });
}

/* ========= Project details 2 (pin video + lecteur léger) ========= */
function projectDetailsVideoPin(): void {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    const projectDetails2Area = document.querySelector<HTMLElement>(".project-details-2-area");
    const projectDetailsVideo = document.querySelector<HTMLElement>(".project-details-video");
    if (!REDUCED() && projectDetails2Area && projectDetailsVideo && !ScrollTrigger.getById("pd2-video-pin")) {
      ScrollTrigger.create({
        id: "pd2-video-pin",
        trigger: projectDetails2Area,
        start: "top top",
        end: "bottom -100%",
        pin: projectDetailsVideo,
        pinSpacing: false,
      });
    }
    return () => {
      ScrollTrigger.getById("pd2-video-pin")?.kill();
    };
  });

  // Lecteur vidéo (idempotent + rAF au lieu d'interval)
  const progress = document.getElementById("progress") as HTMLProgressElement | null;
  const timer = document.getElementById("timer") as HTMLElement | null;
  const videoProgressBtn = document.getElementById("play") as HTMLElement | null;
  const video = document.querySelector("video") as HTMLVideoElement | null;

  if (!video) return;
  if ((video as any)._pdVideoInit) return;
  (video as any)._pdVideoInit = true;

  let rafId: number | null = null;

  const updateUI = () => {
    if (!video || !progress || !timer) return;
    const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    const cur = video.currentTime || 0;
    if (dur > 0) progress.value = Math.round((cur / dur) * 100);
    const mins = Math.floor(cur / 60);
    const secs = Math.floor(cur % 60);
    timer.innerHTML = `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const tick = () => {
    updateUI();
    if (!video?.paused && !video?.ended) {
      rafId = requestAnimationFrame(tick);
    } else if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const playPause = () => {
    if (!video || !videoProgressBtn) return;
    if (video.paused) {
      void video.play();
      videoProgressBtn.innerHTML = "&#10073;&#10073;"; // pause
    } else {
      video.pause();
      videoProgressBtn.innerHTML = "►"; // play
    }
  };

  video.addEventListener("play", () => {
    if (rafId) cancelAnimationFrame(rafId);
    tick();
  });
  video.addEventListener("pause", () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    updateUI();
  });
  video.addEventListener("ended", () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    updateUI();
  });

  if (videoProgressBtn && !(videoProgressBtn as any)._pdBtnInit) {
    (videoProgressBtn as any)._pdBtnInit = true;
    videoProgressBtn.addEventListener("click", playPause);
  }
}

// ✅ Exports nommés (réparent l’erreur TS2459 dans home-4.tsx)
export { projectThreeAnimation, projectDetailsPin, projectDetailsVideoPin };
