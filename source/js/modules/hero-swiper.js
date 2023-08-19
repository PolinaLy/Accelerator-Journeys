export const initHeroSwiper = function () {
  new Swiper(".hero__swiper", {
    loop: true,

    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
    },
  });

  const paginations = document.querySelectorAll('.hero__swiper .swiper-pagination-bullet');
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Space') || (e.keyCode === 32)) {
        e.preventDefault();
        if (paginations[0].classList.contains('swiper-pagination-bullet-active')) {
          paginations[1].click();
        } else if (paginations[1].classList.contains('swiper-pagination-bullet-active')) {
          paginations[2].click();
        } else if (paginations[2].classList.contains('swiper-pagination-bullet-active')) {
          paginations[0].click();
        } else {
          return;
        }
      }
    });
};
