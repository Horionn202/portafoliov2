if (typeof window !== "undefined") {
  import("gsap").then(({ gsap }) => {
    window.addEventListener("load", () => {
      const isMobile = window.innerHeight <= 768;
      const loader = document.querySelector("div.fixed.inset-0.flex.z-50");

      if (!isMobile) {
        const tl = gsap.timeline({
          onComplete: () => {
            loader.style.display = "none";
            loader.style.pointerEvents = "none";
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
        }, "<");
      } else {
        loader.style.display = "none";
        loader.style.pointerEvents = "none";
      }
    });
  });
}
