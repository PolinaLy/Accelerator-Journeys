export const initSwiper = function () {
  new Swiper(".hero__swiper", {
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    pagination: {
      el: '.hero-swiper__pagination',
      clickable: true,
    },
  });
};
