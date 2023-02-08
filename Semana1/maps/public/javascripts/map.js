/*var map = L.map('main_map', {
    center: [6.2442876, -75.616231],
    zoom: 12
});*/

var map = L.map('main_map').setView([6.2442876, -75.616231],13)

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map)

var marker = L.marker([6.235143, -75.589028]).addTo(map).bindPopup('Unidad Deportiva');
var marker = L.marker([6.256702, -75.590551]).addTo(map).bindPopup('Estadio').openPopup();


$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})


