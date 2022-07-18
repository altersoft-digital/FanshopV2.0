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
