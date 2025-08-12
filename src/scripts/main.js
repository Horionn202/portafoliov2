import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

    let logo = document.querySelector(".logo");

    gsap.from(logo,{
        color:"black",
        x:-50,
        ease: "power3.out",
        scale: 3,
        duration: 1
    })

    gsap.from(".menu-item", {
        color:"red",
        y:-100,
        ease: "power3.out",
        duration: 2,
        stagger:  .2
    })


    gsap.from(".foto",{
        y:100,
        ease:"elastic.out",
        duration:3,
        stragger: .5

    })

    gsap.from(".iconos",{
        color:"red",
        duration:3,

    })

    gsap.from(".botones",{
        backgroundColor:"white",
        x:20,
        z:10,
        y:-100,
        ease:"elastic.in"
    })


   const text = new SplitType(".hero-tittle",{types:"word ,chars"})

   text.chars.forEach((char, index) =>{
    gsap.from(char, {
        y: gsap.utils.random(-150,150),
        x: gsap.utils.random(-300,300),
        rotate:gsap.utils.random(-360,360),
        scale:gsap.utils.random(1,10),
       color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
       ease:"back.Out",
       opacity: 0,
       duration: .6,

      
    })
   })


   gsap.from(".parrafo",{
    y:100,
    duration:.5,
  
    ease: "back.in"
   })

