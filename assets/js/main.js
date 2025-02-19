/*================ scroll reveal =========== */
/*ScrollReveal({
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

/*================ Preloader =========== */
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1500);
});

/*================ Typed Text =========== */
const typed = new Typed(".multiple-text", {
  strings: ["Tailoring Services", "Boutique Sales", "Kitenge Designs"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*================ Highlight Animation =========== */
function showHighlight(selected) {
  document.querySelectorAll(".highlight").forEach((highlight) => {
    highlight.classList.toggle("active", highlight === selected);
  });
}

/*================ Fast Video & Controls =========== */
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("highlightVid");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  // Set faster playback speed
  video.playbackRate = 2.0;

  // Ensure video starts paused
  video.pause();
  pauseBtn.classList.add("hidden");

  // Play button event
  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  });

  // Pause button event
  pauseBtn.addEventListener("click", () => {
    video.pause();
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
  });

  // Reset buttons when video ends
  video.addEventListener("ended", () => {
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  });
});
