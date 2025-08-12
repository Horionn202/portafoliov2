import { gsap } from "gsap";
window.addEventListener("load", () => {
  const loader = document.querySelector("div.fixed.inset-0.flex.z-50");

  const tl = gsap.timeline({
    onComplete: () => {
      // Ocultamos el loader al terminar la animación
      loader.style.display = "none";
      loader.style.pointerEvents = "none"; // opcional para asegurarnos
    }
  });

  tl.to(".door-left", {
    x: "-100%",
    duration: 1.5,
    ease: "power4.inOut"
  }).to(".door-right", {
    x: "100%",
    duration: 1.5,
    ease: "power4.inOut"
  }, "<"); // el "<" hace que ambas animaciones ocurran simultáneamente
});

//