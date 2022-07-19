// Swiper Configuration
var swiper = new Swiper(".swiper-header-posters", {
  slidesPerView: 1,
  // centeredSlides: true,
  // freeMode: true,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 14000,
    disableOnInteraction: false,
  },
});

// Swiper Configuration
var swiper = new Swiper(".swiper-new-colection", {
  slidesPerView: 3,
  // centeredSlides: true,
  // freeMode: true,
  // grabCursor: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 14000,
    disableOnInteraction: false,
  },

  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1040: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Swiper Advertisement
var swiper = new Swiper(".swiper-advertisement", {
  slidesPerView: 1,
  // centeredSlides: true,
  // freeMode: true,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//Single Product page IMG function
let bigImgEl = document.querySelector(".big-one");
let SmallImgEl = document.querySelectorAll(".small-one");
Array.prototype.forEach.call(SmallImgEl, (item) => {
  item.onclick = function () {
    bigImgEl.firstElementChild.src = item.firstElementChild.src;
  };
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-burger-menu");
const headerEl = document.querySelector(".main-header");
const mobileNavEl = document.querySelector(".mobile-menu");
btnNavEl.addEventListener("click", function () {
  if (document.body.classList.contains("nav-open")) {
    mobileNavEl.classList.add("close-animation");
    setTimeout(function () {
      document.body.classList.toggle("nav-open");
    }, 200);
    setTimeout(function () {
      mobileNavEl.classList.remove("close-animation");
    }, 800);
  } else {
    mobileNavEl.classList.add("open-animation");
    setTimeout(function () {
      document.body.classList.toggle("nav-open");
    }, 200);
    setTimeout(function () {
      mobileNavEl.classList.remove("open-animation");
    }, 800);
  }
});

// scroll

let question = document.querySelectorAll(".drop-down__before-box");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".drop-down__before-box.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
