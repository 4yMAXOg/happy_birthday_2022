window.addEventListener("DOMContentLoaded", init);

var swiper;

function init() {
    swiper = new Swiper('.my__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 3,
    // effect: 'cards',
    // slideClass: 'my__swiper-slide',
    // wrapperClass: 'my__swiper-wrapper',

    // slidesPerGroup: 'auto',
    // slidesPerView: 'auto',
    slidesPerGroup: 2,
    slidesPerView: 2,
    // spaceBetween: 50,
    // centerInsufficientSlides: true,

    on: {
      slideChange: swiperSlideChanged,
      doubleClick: swiperDoubleClick,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    mousewheel: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

function swiperSlideChanged() {
  console.log("Slide changed!");
}

function swiperDoubleClick() {
  console.log("Lightning bolt!");
}
