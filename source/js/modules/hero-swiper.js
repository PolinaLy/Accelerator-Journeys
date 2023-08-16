export const initHeroSwiper = function () {
  new Swiper(".hero__swiper", {
    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
    },
  });
};
