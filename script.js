function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Why BeatXTech scroll animation
const whyCards = document.querySelectorAll(".why-card");

window.addEventListener("scroll", () => {
  whyCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});


// Services scroll reveal animation
const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  serviceCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});


// Contact section animation
const contactElements = document.querySelectorAll(
  ".contact-card, .contact-form"
);

window.addEventListener("scroll", () => {
  contactElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

const animatedElements = document.querySelectorAll(
  ".service-card, .why-card, .contact-form"
);

window.addEventListener("scroll", () => {
  animatedElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
