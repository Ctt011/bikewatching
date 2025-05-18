// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

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

