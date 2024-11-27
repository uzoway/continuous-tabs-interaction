"use strict";

gsap.registerPlugin(CustomEase);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");

function initializeAnimation() {}

window.addEventListener("DOMContentLoaded", initializeAnimation);
