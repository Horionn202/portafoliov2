    import { gsap } from "gsap";

    let logo = document.querySelector(".logo");

    gsap.from(logo,{
        color:"red",
        backgroundColor:"blue",
        x: -100,
        rotate: 360,
        scale: 3,
        duration: 1
    })