function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupRevealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length === 0) return;

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) element.classList.add("active");
    });
  };

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupCtaBarPadding() {
  const ctaBar = document.querySelector(".cta-bar");
  if (!ctaBar) return;
  document.body.classList.add("has-cta-bar");
}

setupNavbarScroll();
setupRevealOnScroll();
setupSmoothScroll();
setupCtaBarPadding();

