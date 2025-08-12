import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proyectos = document.querySelectorAll("#Proyecto .bg-white");

proyectos.forEach(proyecto => {
  gsap.from(proyecto, {
    scrollTrigger: {
      trigger: proyecto,
      start: "top 80%",  // Cuando la parte superior del proyecto llega al 80% de la pantalla
      toggleActions: "play none none none",
      // markers: true, // Quita el comentario para ver marcadores mientras pruebas
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
  });
});


gsap.from(".pro-tittle",{
    color:"green",
    duration: 6
})