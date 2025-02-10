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

/*================ preloader =========== */
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    this.document.body.classList.add("loaded");
  }, 1500);
});

/*================ typed Text =========== */
const typed = new Typed(".multiple-text", {
  strings: ["Tailoring Services", "Boutique Sales", "Kitenge Designs"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* Highlight Animation*/

function showHighlight(selected) {
  let highlights = document.querySelectorAll(".highlight");

  highlights.forEach((highlight) => {
    if (highlight === selected) {
      highlight.classList.add("active");
    } else {
      highlight.classList.remove("active");
    }
  });
}

/* Fast Video & Controls*/
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("highlightVid");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  video.playbackRate = 2.0;

  video.pause();
  pauseBtn.style.display = "none";

  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  });

  pauseBtn.addEventListener("click", () => {
    video.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
  });
});
