export const initToursSwiper = function () {
  new Swiper('.tours__swiper', {
    navigation: {
      nextEl: '.tours__swiper .slider-button--next',
      prevEl: '.tours__swiper .slider-button--prev',
    },
    // Задает класс активным слайдам
    watchSlidesProgress: true,
    // Задаем класс активным слайдам
    slideVisibleClass: 'slider__slide--visible',
    // отключение скролла
    simulateTouch: false,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
