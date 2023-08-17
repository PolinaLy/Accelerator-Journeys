export const initTrainingSwiper = function () {
  new Swiper('.training__swiper', {
    navigation: {
      nextEl: '.training__swiper .slider-button--next',
      prevEl: '.training__swiper .slider-button--prev',
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
        slidesPerView: 3,
        // Отступ между слайдами
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
};
