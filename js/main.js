//------ SET BASE MAP FEATURES -------------------------------------------------------------------------------------
var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
    center: [7.36067, 44.90823], // starting position [lng, lat]
    zoom: 8, // starting zoom
    attributionControl: false,
});
map.addControl(
    new maplibregl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);
map.addControl(
    new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
    })
);
map.on('load', () => {
    map.addSource('ciclabili', {
        'type': 'geojson',
        'data': './geojson/piste_ciclabili_wgs84.geojson'
    });
    map.addLayer({
        'id': 'ciclabili',
        'source': 'ciclabili',
        'type': 'line',
        'paint': {
            'line-width': 3,
            'line-color': '#f7ff00'
        }
    });
})