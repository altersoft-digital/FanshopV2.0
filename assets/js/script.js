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
      spaceBetween: 0,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1040: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

// Swiper Single Product Mobile
var swiper = new Swiper(".swiper-mobile-single", {
  slidesPerView: 1,
  // centeredSlides: true,
  // freeMode: true,
  // grabCursor: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

///////////////////////////////////////////////////////////
// Make mobile filter work

const btnFilterEl = document.querySelector(".btn-filter-icon");
const archiveEl = document.querySelector(".section-product-archive");
const mobileFilterEl = document.querySelector(".filter-box__mobile");
if (btnFilterEl) {
  btnFilterEl.addEventListener("click", function () {
    if (archiveEl.classList.contains("filter-open")) {
      mobileFilterEl.classList.add("close-filter-animation");
      setTimeout(function () {
        archiveEl.classList.toggle("filter-open");
      }, 200);
      setTimeout(function () {
        mobileFilterEl.classList.remove("close-filter-animation");
      }, 800);
    } else {
      mobileFilterEl.classList.add("open-filter-animation");
      setTimeout(function () {
        archiveEl.classList.toggle("filter-open");
      }, 200);
      setTimeout(function () {
        mobileFilterEl.classList.remove("open-filter-animation");
      }, 800);
    }
  });
}
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

// STICKY HEADER

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.querySelector(".header");
let mainHeader = document.querySelector(".main-header");

// Get the offset position of the navbar
let sticky = mainHeader.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
}

// PROFILE NAV CHANGER

function LetsDisplay(btn, section) {
  const activeEls = document.querySelectorAll(".active");
  Array.prototype.forEach.call(activeEls, (item) => {
    if (
      item.classList.contains("section-profile__subsec") ||
      item.classList.contains("profile-nav-list")
    ) {
      item.classList.remove("active");
    }
  });
  if (!document.querySelector(btn).classList.contains("active")) {
    document.querySelector(btn).classList.add("active");
  }
  if (!document.querySelector(section).classList.contains("active")) {
    document.querySelector(section).classList.add("active");
  }
}
