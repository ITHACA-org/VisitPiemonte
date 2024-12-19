
//------ MAP1 -------------------------------------------------------------------------------------
var map1 = new maplibregl.Map({
    container: 'map1', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map1.on('load', async () => {
    const poi_icon = await map1.loadImage('../icons/point-of-interest4.png');
    map1.addImage('poi_icon', poi_icon.data);
    map1.addSource("Ciclovia_1", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_1.geojson"});
    map1.addSource("Poi_cicl_1", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_1.geojson"});
    map1.addLayer({"id": "Ciclovia_1","source": "Ciclovia_1","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    // map1.addLayer({"id": "Poi_cicl_1","source": "Poi_cicl_1","type": "circle","paint": {'circle-radius': 6, 'circle-color': '#fcf900'}});
    map1.addLayer({"id": "Poi_cicl_1","source": "Poi_cicl_1","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP1 -------------------------------------------------------------------------------------
var map2 = new maplibregl.Map({
    container: 'map2', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 45.11823], // starting position [lng, lat]
    zoom:6, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map2.on('load', () => {
    map2.addSource("Ciclovia_4", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map2.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width":3,"line-color": "#00FFFD"}});
});