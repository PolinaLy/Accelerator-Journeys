export const initMap = function () {
  if (document.querySelector('.map')) {
    var map = L.map('map').setView([55.811953, 37.636374], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var icon = new L.Icon({
      iconUrl: 'img/svg/marker-map.svg',
      iconSize: [48, 48],
    });

    L.marker([55.811953, 37.636374], {icon: icon}).addTo(map);
  }
};
