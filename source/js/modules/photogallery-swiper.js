export const initPhotogallerySwiper = function () {
  new Swiper('.photogallery__swiper', {
    navigation: {
      nextEl: '.photogallery__swiper .slider-button--next',
      prevEl: '.photogallery__swiper .slider-button--prev',
    },
    // отключение скролла
    simulateTouch: false,
    slidesPerView: 'auto',
  });
};
