"use strict";

gsap.registerPlugin(CustomEase);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");

const navBtns = gsap.utils.toArray("[data-nav-btn]");
let currentNavbutton = navBtns[0];
const tabIndicator = document.querySelector("[data-tab-indicator]");

const updateTabIndicator = () => {
  gsap.set(tabIndicator, {
    x: currentNavbutton.offsetLeft,
    width: currentNavbutton.clientWidth,
  });
};

const mm = gsap.matchMedia();

mm.add(
  {
    isDesktop: "(min-width: 750px)",
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    const { reduceMotion } = context.conditions;

    navBtns.forEach((button) => {
      button.addEventListener("click", function () {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        gsap.to(tabIndicator, {
          x: button.offsetLeft,
          width: button.clientWidth,
          overwrite: true,
          ease: prefersReducedMotion ? "none" : "back.out(0.7)",
          duration: prefersReducedMotion ? 0 : 0.46,
        });

        currentNavbutton = button;
      });
    });
  }
);

// Update the tab indicator on window resize
window.addEventListener("resize", () => {
  updateTabIndicator();
});

// Initialize the tab indicator on page load
updateTabIndicator();
