import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

function panelOneAnimation() {
  // --- AVANT: matchMedia (min-width: 1200px)
  // --- MAINTENANT: même code exécuté tout le temps
  const panelsSections = gsap.utils.toArray(".panels");
  for (var i = 0; i < panelsSections.length; i++) {
    const thePanelsSection: any = panelsSections[i];
    const panels = gsap.utils.toArray(
      ".panels-container .panel",
      thePanelsSection
    );
    const panelsContainer =
      thePanelsSection.querySelector(".panels-container");

    gsap.set(panelsContainer, { height: window.innerHeight });
    gsap.set(panels, { height: window.innerHeight });

    let totalPanelsWidth = 0;
    panels.forEach(function (panel: any) {
      if (panel) {
        totalPanelsWidth += $(panel).width() ?? 0;
      }
    });

    gsap.set(panelsContainer, { width: totalPanelsWidth });
    gsap.to(panels, {
      x: -totalPanelsWidth + innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        start: "top 140",
        scrub: 1,
        end: (st: any) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
      },
    });
  }

  // --- AVANT: matchMedia (min-width: 992px)
  // --- MAINTENANT: même code exécuté tout le temps
  if (document.querySelector(".tp-project-2-area")) {
    let sections = gsap.utils.toArray(".tp-project-2-area");
    let listItem = gsap.utils.toArray(".tpproject");
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        markers: false,
        start: "bottom 115%",
        end: "bottom -100%",
        toggleClass: { targets: listItem[index], className: "addclass" },
      });
    });
  }
}

// PORTFOLIO TWO ANIMATION
function panelTwoAnimation() {
  const isMobile = window.innerWidth < 768 || (ScrollTrigger as any).isTouch;

  const projectPanels = Array.from(document.querySelectorAll<HTMLElement>(".project-panel"));

  // --- spacers entre panels (déjà en place) ---
  if (isMobile) {
    projectPanels.forEach((section, idx) => {
      if (!section.nextElementSibling || !(section.nextElementSibling as HTMLElement).classList.contains("st-spacer")) {
        if (idx !== projectPanels.length - 1) {
          const spacer = document.createElement("div");
          spacer.className = "st-spacer";
          spacer.style.height = section.offsetHeight + "px";
          spacer.style.pointerEvents = "none";
          spacer.style.visibility = "hidden";
          spacer.style.opacity = "0";
          section.after(spacer);
        }
      }
    });

    // --- NEW: spacer de fin après le dernier panel ---
    const area = document.querySelector(".project-panel-area") || document.body;
    const last = projectPanels[projectPanels.length - 1];
    if (last && area) {
      const already = area.querySelector(".st-tail");
      if (!already) {
        const tail = document.createElement("div");
        tail.className = "st-tail";
        // assez d’espace pour “dépin” proprement le dernier
        tail.style.height = Math.max(window.innerHeight, last.offsetHeight) + "px";
        tail.style.pointerEvents = "none";
        tail.style.visibility = "hidden";
        tail.style.opacity = "0";
        area.appendChild(tail);
      }
    }
  }

  // pins (inchangés)
  const tl = gsap.timeline();
  projectPanels.forEach((section) => {
    tl.to(section, {
      scrollTrigger: {
        trigger: section,
        pin: section,
        pinType: "transform",
        scrub: 1,
        start: "top top",
        end: "bottom 100%",
        endTrigger: ".project-panel-area",
        pinSpacing: false,
        markers: false,
        invalidateOnRefresh: true,
      },
    });
  });

  // maintenir les hauteurs des spacers à jour
  if (isMobile) {
    const updateSpacers = () => {
      projectPanels.forEach((section) => {
        const next = section.nextElementSibling as HTMLElement | null;
        if (next && next.classList.contains("st-spacer")) {
          next.style.height = section.offsetHeight + "px";
        }
      });
      const area = document.querySelector(".project-panel-area");
      const last = projectPanels[projectPanels.length - 1];
      const tail = area?.querySelector(".st-tail") as HTMLElement | null;
      if (area && last && tail) {
        tail.style.height = Math.max(window.innerHeight, last.offsetHeight) + "px";
      }
    };
    ScrollTrigger.addEventListener("refresh", updateSpacers);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
}

function studioPanel() {
  // --- AVANT: matchMedia (min-width: 1200px)
  // --- MAINTENANT: même code exécuté tout le temps
  const panelsSectionss = gsap.utils.toArray(".panels-2");
  for (let i = 0; i < panelsSectionss.length; i++) {

    const thePanelsSection: any = panelsSectionss[i];
    const panels = gsap.utils.toArray(".panels-container-2 .panel-2", thePanelsSection);
    const panelsContainer = thePanelsSection.querySelector(".panels-container-2");

    gsap.set(panelsContainer, { height: window.innerHeight });
    gsap.set(panels, { height: window.innerHeight });

    let totalPanelsWidth: any = 0;
    panels.forEach(function (panel: any) {
      totalPanelsWidth += $(panel).width();
    });

    gsap.set(panelsContainer, { width: totalPanelsWidth });
    let scrollTween = gsap.to(panels, {
      x: - totalPanelsWidth + innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        pinSpacing: true,
        start: "top 0",
        scrub: 1,
        end: (st) => "+=" + totalPanelsWidth,
      }
    });

    const services_items: any = gsap.utils.toArray(".tp-studio-service-item");

    services_items.forEach(function (item: any) {
      gsap.to(item, {
        marginLeft: '0',
        scrollTrigger: {
          trigger: '.tp-studio-service-area',
          containerAnimation: scrollTween,
          start: "left center",
          end: "400px 200px",
          scrub: .5,
        }
      })
    });
  }
};

function servicePanel() {
  // --- AVANT: matchMedia (min-width: 991px)
  // --- MAINTENANT: même code exécuté tout le temps
  const tl = gsap.timeline();
  const projectpanelss = document.querySelectorAll('.project-panel-2');
  projectpanelss.forEach((section) => {
    tl.to(section, {
      scrollTrigger: {
        trigger: section,
        pin: section,
        scrub: 1,
        start: 'top top',
        end: "bottom 100%",
        endTrigger: '.project-panel-area-2',
        pinSpacing: false,
        markers: false,
      },
    });
  });
};

export { panelOneAnimation, panelTwoAnimation, studioPanel, servicePanel };
