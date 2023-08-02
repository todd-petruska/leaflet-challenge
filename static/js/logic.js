// Store API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Utilize the GET request in order to query the URL for the geoJSON data.
d3.json(queryUrl).then(function (data) {
	// Console log the retrieved data
	console.log(data);
	// After receiving a response, send the data.features to createFeatures function.
	createFeatures(data.features);
});

// Create a function to determine the size of the marker.
function markerSize(magnitude) {
	return magnitude * 10000;
};

// Create a function to determine the marker color by depth.
function chooseColor(depth) {
	if (depth < 10) return "lightgreen";
	else if (depth < 30) return "greenyellow";
	else if (depth < 50) return "yellow";
	else if (depth < 70) return "orange";
	else if (depth < 90) return "orangered";
	else return "red";
}

function createFeatures(earthquakeData) {

	// Create an array by defining a function to run through each feature, 
	// and create a popup describing the place, time, and magnitude of the earthquake.
	function onEachFeature(feature, layer) {
		layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);

	}
	// Next create a GeoJSON layer to contain the features array from the earthquakeData object.
	var earthquakes = L.geoJSON(earthquakeData, {
		onEachFeature: onEachFeature,

		// Next point to the alter markers layer.
		pointToLayer: function(feature, latlng) {

			// Next determine the style of markers from properties based on magnitude of the earthquake.
			var markers = {
				radius: markerSize(feature.properties.mag),
				fillColor: chooseColor(feature.geometry.coordinates[2]),
				fillOpacity: 0.7,
				color: "black",
				stroke: true,
				weight: 0.5
			}
			return L.circle(latlng, markers);
		}
	});
	// Use the earthquakes layer to create the map funcion.
	createMap(earthquakes);
}

function createMap(earthquakes) {
	// Next create the tile layer.
	var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});

	// Next create the map using streetview as well as earthquakes layer, which will display on load.
	// Provides coordinates to center the map on the U.S. and established zoom level.
	var myMap = L.map("map", {
		center: [39.623, -104.832],
		zoom: 5,
		layers: [street, earthquakes]
		});

	// Next add a legend to the map
	var legend = L.control({position: "bottomright"});
	legend.onAdd = function() {
		var div = L.DomUtil.create("div", "info legend"),
		depth = [-10, 10, 30, 50, 70, 90];

		for (var i = 0; i < depth.length; i++) {
			div.innerHTML +=
			'<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
		}
		return div;
	};
	legend.addTo(myMap)
};