import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const tituloAnim = gsap.from(".pro-tittle", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    paused: true,
  });

  ScrollTrigger.create({
    trigger: ".pro-tittle",
    start: "top 90%",
    end: "bottom 10%",
    onEnter: () => tituloAnim.play(),
    onLeaveBack: () => tituloAnim.restart(),
  });

  const proyectos = document.querySelectorAll(".project-card");

  proyectos.forEach((proyecto) => {
    const randomX = gsap.utils.random(-800, 800);
    const randomY = gsap.utils.random(-600, 600);
    const randomRotation = gsap.utils.random(-90, 90);
    const randomScale = gsap.utils.random(0.3, 1.5);

    const proyectoAnim = gsap.from(proyecto, {
      x: randomX,
      y: randomY,
      rotation: randomRotation,
      scale: randomScale,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: proyecto,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => proyectoAnim.play(),
      onLeaveBack: () => proyectoAnim.restart(),
    });

    const video = proyecto.querySelector("video");
    const botones = proyecto.querySelectorAll(".btn");

    if (video && botones.length) {
      const botonesAnim = gsap.from(botones, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: video,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => botonesAnim.play(),
        onLeaveBack: () => botonesAnim.restart(),
      });
    }

  });

  
  
});


gsap.from("#Sobre-mi h1", {
  scrollTrigger: {
    trigger: "#Sobre-mi h1",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from("#Sobre-mi h3.sobre-tittle", {
  scrollTrigger: {
    trigger: "#Sobre-mi h3.sobre-tittle",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".sobre-texto", {
  scrollTrigger: {
    trigger: ".sobre-texto",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".sobre-text", {
  scrollTrigger: {
    trigger: ".sobre-texto",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  },
  y: gsap.utils.random(-150,150),
  x: gsap.utils.random(-350,350),
  scale:2,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});





gsap.from("#Sobre-mi div.grid.grid-cols-2 > div", {
  scrollTrigger: {
    trigger: "#Sobre-mi div.grid.grid-cols-2",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  },
  y: 30,
  opacity: 0,
  scale: 1,
  duration: 0.6,
  ease: "back.out(1.7)",
  stagger: 0.2,
});

const track = document.querySelector('.carousel-track');
const items = gsap.utils.toArray('.carousel-track > img');

const itemWidth = 100;
const gap = 32;
const numberOfItems = items.length / 2;
const totalWidth = numberOfItems * itemWidth + (numberOfItems - 1) * gap;

gsap.to(track, {
  x: `-=${totalWidth}`,
  ease: "none",
  duration: 30,
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
  }
});



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-title",
    start: "top 80%", // cuando el texto entra en pantalla
    toggleActions: "play none none reverse"
  }
});

// Texto aparece primero
tl.from(".animated-title", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
})

// Manos desde los costados
.from(".hand-top", {
  x: -150, // entra desde la izquierda
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8") // empieza mientras el texto está apareciendo

.from(".hand-bottom", {
  x: 150, // entra desde la derecha
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8"); // también empieza casi al mismo tiempo

  gsap.from(".title-2", {
    scale: 0.3,
    opacity: 0,
    duration: 1.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".title-2",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });