const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu__toggle');
const body = document.querySelector('body');
const linkHeader = document.querySelectorAll('.menu a');

const outsideHeaderClick = (evt) => {
  if (evt.target === header && evt.target.closest !== 'header__wrapper') {
    header.classList.remove('open-menu');
    body.style.position = 'inherit';
  }
};

header.classList.remove('no-js');
header.classList.remove('open-menu');

if (document.querySelector('.menu') && menuButton) {
  menuButton.addEventListener('click', function () {
    header.classList.toggle('open-menu');

    if (header.classList.contains('open-menu')) {
      body.style.position = 'fixed';

      header.addEventListener('click', outsideHeaderClick);

      linkHeader.forEach((el) => {
        el.addEventListener('click', () => {
          header.classList.remove('open-menu');
          body.style.position = 'inherit';
        });
      });
    } else {
      body.style.position = 'inherit';
    }
  });
}

