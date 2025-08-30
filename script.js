function openModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  modal.style.display = "flex";
  video.src = videoSrc;
  video.play();
}
function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  modal.style.display = "none";
  video.pause();
  video.src = "";
}
function toggleCard(card) {
  document.querySelectorAll(".card").forEach(c => {
    if (c !== card) c.classList.remove("active");
  });
  card.classList.toggle("active");
}
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

document.querySelectorAll('a.scroll-top').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      // Custom smooth scroll
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    });
  });
// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,   // Animation duration (ms)
    easing: 'ease-in-out', // Smooth curve
    once: false,      // Animate every time you scroll
  });
});

const airplane = document.querySelector(".airplane");

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let maxScroll = document.body.scrollHeight - window.innerHeight;
  let progress = scrollY / maxScroll;

  // Vertical flight path (top to bottom)
  let y = progress * (window.innerHeight - 180);

  // Detect scroll direction
  let direction = scrollY > lastScrollY ? "down" : "up";
  lastScrollY = scrollY;

  // Base rotation (90° = facing downwards)
  let rotation = direction === "down" ? 90 : -90;

  // Combine translate + rotation
  airplane.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
});
function openCertificate(src) {
  document.getElementById('certModal').style.display = 'block';
  document.getElementById('certImage').src = src;
}

function closeCertificate() {
  document.getElementById('certModal').style.display = 'none';
}
// JS to keep button above footer
const resumeBtn = document.querySelector('.resume-btn');
const footer = document.querySelector('footer'); // make sure your footer has <footer> tag

function updateButtonPosition() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // If footer is visible, move button above it
    if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top + 20; // 20px margin
        resumeBtn.style.bottom = `${overlap}px`;
    } else {
        resumeBtn.style.bottom = `20px`; // default
    }
}

// Update on scroll & resize
window.addEventListener('scroll', updateButtonPosition);
window.addEventListener('resize', updateButtonPosition);
updateButtonPosition(); // initial
