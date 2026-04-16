

/* ========================================================= FAQ ========================================================= */

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});


/* ======================================= SCROLL TO TOP BUTTON ====================================== */

const scrollTopBtn = document.querySelector(".footer-bottom i");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================================== PROCRASTINATOR =========================================== */

/*const proItems = document.querySelectorAll(".pro-item");

proItems.forEach(item => {
  item.addEventListener("click", () => {

    proItems.forEach(i => i.classList.remove("active"));

    item.classList.add("active");
  });
});
*/



const proItems = document.querySelectorAll(".pro-item");
const proImage = document.querySelector(".pro-right img");

proItems.forEach(item => {
  item.addEventListener("click", () => {

    // active class remove
    proItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // image change
    const newImg = item.getAttribute("data-img");
    if (proImage && newImg) {
      proImage.src = newImg;
    }

  });
});



/* ========================================== MOBILE NAVIGATION TOGGLE ====================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


/* =========================================== TESTIMONIALS (LOAD MORE ) ======================================= */

const btn = document.querySelector(".load-more-btn");
const cards = document.querySelectorAll(".testimonial-card");

let visible = 4; 

function handleTestimonials() {
  if (window.innerWidth <= 768) {

    cards.forEach((card, index) => {
      card.style.display = index < visible ? "block" : "none";
    });

    if (btn) btn.style.display = "flex";

  } else {

    cards.forEach(card => {
      card.style.display = "block";
    });

    if (btn) btn.style.display = "none";
  }
}

handleTestimonials();

window.addEventListener("resize", handleTestimonials);


if (btn) {
  btn.addEventListener("click", () => {

    visible += 5;

    cards.forEach((card, index) => {
      if (index < visible) {
        card.style.display = "block";
      }
    });

    if (visible >= cards.length) {
      btn.style.display = "none";
    }
  });
}