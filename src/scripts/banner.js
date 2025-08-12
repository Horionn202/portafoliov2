
import { gsap } from "gsap";

import SplitType from "split-type";




    gsap.from(".foto",{
        y:100,
        ease:"elastic.out",
        duration:4,
        stagger: .5

    })

    gsap.from(".iconos",{
        color:"red",
        duration:4,

    })

    gsap.from(".botones",{
        backgroundColor:"white",
        x:20,
        z:10,
        y:-100,
        ease:"elastic.in",
        duration: 1
    })

//animacion para las letras del hero-tittle
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
       duration: 1.4,

      
    })
   })

//animacion para el parrafo
   gsap.from(".parrafo",{
    y:100,
    duration:1,
  
    ease: "back.in"
   })









