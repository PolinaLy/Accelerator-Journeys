const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu__toggle');

header.classList.remove('no-js');
header.classList.remove('open-menu');

menuButton.addEventListener('click', function () {
  header.classList.toggle('open-menu');
});
