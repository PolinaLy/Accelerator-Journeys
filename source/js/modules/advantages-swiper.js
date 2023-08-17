export const initAdvantagesSwiper = function () {
  new Swiper('.advantages__swiper', {
    navigation: {
      nextEl: '.advantages__swiper .slider-button--next',
      prevEl: '.advantages__swiper .slider-button--prev',
    },
    // отключение скролла
    simulateTouch: false,
    loop: true,

    breakpoints: {
      768: {
          slidesPerView: "auto",
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 1,
      },
    },
  });
};
