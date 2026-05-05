function initCarousel() {
  const rows = document.querySelectorAll(".carousel-row");

  rows.forEach((row) => {
    row.innerHTML += row.innerHTML;

    const totalWidth = row.scrollWidth / 2;
    const isReverse = row.classList.contains("reverse");

    if (isReverse) gsap.set(row, { x: -totalWidth });

    const tween = gsap.to(row, {
      x: isReverse ? 0 : -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    row.addEventListener("mouseenter", () => tween.timeScale(0.2));
    row.addEventListener("mouseleave", () => tween.timeScale(1));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCarousel);
} else {
  initCarousel();
}
