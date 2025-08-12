import { gsap } from "gsap";

  let logo = document.querySelector(".logo");

    gsap.from(logo,{
        color:"black",
        x:-50,
        ease: "power3.out",
        scale: 3,
        duration: 2
    })

    gsap.from(".menu-item", {
        color:"red",
        y:-100,
        ease: "power3.out",
        duration: 3,
        stagger:  .2
    })
