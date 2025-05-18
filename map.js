

// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';



// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3R0MDExIiwiYSI6ImNtYXQ3M2J4djBqNHoyd29rYWdsMDB4YzcifQ.Np_wx7rHELKIWAVF6XljsA';

// Create the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div in index.html
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027], // [longitude, latitude] - Boston/Cambridge
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});

map.on('load', async () => {
  // Add Boston bike lane data
  map.addSource('boston_route', {
    type: 'geojson',
    data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
  });

  map.addLayer({
    id: 'bike-lanes',
    type: 'line',
    source: 'boston_route',
    paint: {
      'line-color': 'green',
      'line-width': 3,
      'line-opacity': 0.4,
    },
  });
});

let jsonData;
try {
  const jsonurl = 'https://dsc106.com/labs/lab07/data/bluebikes-stations.json';

  // Await JSON fetch
  jsonData = await d3.json(jsonurl);

  console.log('Loaded JSON Data:', jsonData);
} catch (error) {
  console.error('Error loading JSON:', error);
}

let stations = jsonData.data.stations;
console.log('Stations Array:', stations);


map.addSource('cambridge_route', {
  type: 'geojson',
  data: 'https://data.cambridgema.gov/api/geospatial/sckh-bd5c?method=export&format=GeoJSON',
});

map.addLayer({
  id: 'cambridge-bike-lanes',
  type: 'line',
  source: 'cambridge_route',
  paint: {
    'line-color': '#32D400',
    'line-width': 5,
    'line-opacity': 0.6,
  },
});

