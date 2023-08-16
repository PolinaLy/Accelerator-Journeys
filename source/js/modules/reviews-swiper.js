export const initReviewsSwiper = function () {
  new Swiper('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__swiper .slider__button--next',
      prevEl: '.reviews__swiper .slider__button--prev',
    },
    // // Задает класс активным слайдам
    // watchSlidesProgress: true,
    // // Задаем класс активным слайдам
    // slideVisibleClass: 'slider__slide--visible',
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
