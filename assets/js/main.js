/*================ scroll reveal =========== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".home-container, h2, .pro-container img, .newsletter-form, #ankara img",
  { origin: "top" }
);
ScrollReveal().reveal(
  "#home, .home-container p, h3, .home-container button, footer p",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  "#home, .home-container p, h3, .home-container button, footer p",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".home-container h, .pro-container, .ankara-gallery, .newsletter-form button",
  { origin: "right" }
);

/*================ typed Text =========== */
const typed = new Typed(".multiple-text", {
  strings: ["Tailoring Services", "Boutique Sales", "Kitenge Designs"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
