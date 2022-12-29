const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'cube',
  cubeEffect: {
    shadow: false, 
    slideShadows: false,
  },

  autoHeight: false,
  preloadImages: true,
  updateOnImagesReady: true,
});

startConfetti();

