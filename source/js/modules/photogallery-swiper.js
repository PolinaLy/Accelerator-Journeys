export const initPhotogallerySwiper = function () {
  new Swiper('.photogallery__swiper', {
    navigation: {
      nextEl: '.photogallery__swiper .slider__button--next',
      prevEl: '.photogallery__swiper .slider__button--prev',
    },
    // отключение скролла
    simulateTouch: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.326,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 2.48,
        spaceBetween: 5,
      },
    },
  });
};
