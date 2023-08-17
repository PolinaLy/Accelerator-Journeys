export const initPhotogallerySwiper = function () {
  new Swiper('.photogallery__swiper', {
    navigation: {
      nextEl: '.photogallery__swiper .slider-button--next',
      prevEl: '.photogallery__swiper .slider-button--prev',
    },
    // отключение скролла
    simulateTouch: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.75,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  });
};
