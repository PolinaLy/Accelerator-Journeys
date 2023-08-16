export const initAudio = function () {
  let audio = document.querySelector('iframe');
  let buttonPlay = document.querySelector('.hero__audio-player-button');
  let audioPlayerImage = document.querySelector('.audio-player-image');

  if (audio && buttonPlay) {
    buttonPlay.addEventListener('click', () => {
      if (audio.classList.contains('is-active')) {
        audio.classList.remove('is-active');
      } else {
        audio.classList.remove('visually-hidden');
        audio.classList.add('is-active');
        buttonPlay.classList.add('visually-hidden');
        audioPlayerImage.classList.add('visually-hidden');
      }
    });
  }
};
