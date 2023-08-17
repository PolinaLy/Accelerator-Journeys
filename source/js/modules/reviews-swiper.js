export const initReviewsSwiper = function () {
  new Swiper('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__swiper .slider-button--next',
      prevEl: '.reviews__swiper .slider-button--prev',
    },
    // отключение скролла
    simulateTouch: false,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
  });
};
