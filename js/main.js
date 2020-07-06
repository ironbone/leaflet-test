let map;
let marker = null;
const maxZoom = 22;
const bounceSpeed = 100;

$(function () {
    map = L.map('mapid', {"doubleClickZoom": false}).setView([50.801415, 21.4241], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: maxZoom,
        maxNativeZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    map.on('click', function (e) {
        setMarker(e.latlng, 'My name is Bond');
    });

});




//Sets the current user marcef for several situations. Click, Zoom
function setMarker(latlng, popupText = "") {
    
    let personIcon = L.icon({
        iconUrl: "img/man.png",
        iconSize: [128, 128],
        className: 'myicon'
    });

    marker = L.marker(latlng, {icon: personIcon})
        .bindPopup(popupText).bounce()
        .setBouncingOptions({
            bounceSpeed: bounceSpeed,
        }).addTo(map);
}

