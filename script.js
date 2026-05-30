(() => {
  const slider = document.querySelector("[data-case-slider]");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".case-slide"));
  const prev = slider.querySelector("[data-slide-prev]");
  const next = slider.querySelector("[data-slide-next]");
  const count = slider.querySelector("[data-slide-count]");
  let current = 0;

  const update = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
    });
    if (count) count.textContent = `${current + 1} / ${slides.length}`;
  };

  prev?.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    update();
  });

  next?.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    update();
  });

  update();
})();
