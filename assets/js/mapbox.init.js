mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkZXJyYTdtYW5lIiwiYSI6ImNrbGgydW1tbzAyN20ycHFpZmt5Nm45czgifQ.6fI5TAtVkybEqG-xSTbQPQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [54.366669, 24.466667], // starting position
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Abu Dhabi, UAE'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([54.366669, 24.466667])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// disable map zoom when using scroll
map.scrollZoom.disable();