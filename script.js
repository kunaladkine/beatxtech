/* =====================
   Navbar Elements
===================== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

/* =====================
   Toggle Mobile Menu
===================== */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

/* =====================
   Close Menu On Link Click
===================== */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

/* =====================
   Navbar Scroll Effect
===================== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =====================
   WhatsApp CTA Show After Scroll
===================== */
const whatsappBtn = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    whatsappBtn.style.opacity = "1";
    whatsappBtn.style.pointerEvents = "auto";
  } else {
    whatsappBtn.style.opacity = "0";
    whatsappBtn.style.pointerEvents = "none";
  }
});

/* =====================
   Project Enquiry WhatsApp
===================== */
const enquiryForm = document.getElementById("enquiryForm");
const enquiryStatus = document.getElementById("enquiryStatus");

enquiryForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;
  const project = this.project_type.value;
  const tech = this.technology.value;
  const message = this.message.value;

  const whatsappNumber = "919130537754"; // replace with your number

  const whatsappMessage = 
`Hello BeatXTech 👋
Name: ${name}
Email: ${email}
WhatsApp: ${phone}
Project Type: ${project}
Technology: ${tech}
Message: ${message}`;

  const whatsappURL = 
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

  enquiryStatus.style.color = "#16a34a";
  enquiryStatus.textContent = "✔ Enquiry sent successfully via WhatsApp";

  this.reset();
});
