const map = L.map('map', {scrollWheelZoom:false}).setView([7.048005, 38.495448], 11.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

const marker1 = L.marker([7.048005, 38.495448]).addTo(map);

const basicBeachIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-chair.svg',
    iconSize: [40, 40],
  });
