
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
    map1.addLayer({"id": "Poi_cicl_1","source": "Poi_cicl_1","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP4 -------------------------------------------------------------------------------------
var map4 = new maplibregl.Map({
    container: 'map4', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map4.on('load', async () => {
    const poi_icon = await map4.loadImage('../icons/point-of-interest4.png');
    map4.addImage('poi_icon', poi_icon.data);
    map4.addSource("Ciclovia_4", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map4.addSource("Poi_cicl_4", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_4.geojson"});
    map4.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map4.addLayer({"id": "Poi_cicl_4","source": "Poi_cicl_4","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP5 -------------------------------------------------------------------------------------
var map5 = new maplibregl.Map({
    container: 'map5', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map5.on('load', async () => {
    const poi_icon = await map5.loadImage('../icons/point-of-interest4.png');
    map5.addImage('poi_icon', poi_icon.data);
    map5.addSource("Ciclovia_5", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_5.geojson"});
    map5.addSource("Poi_cicl_5", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_5.geojson"});
    map5.addLayer({"id": "Ciclovia_5","source": "Ciclovia_5","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map5.addLayer({"id": "Poi_cicl_5","source": "Poi_cicl_5","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP6 -------------------------------------------------------------------------------------
var map6 = new maplibregl.Map({
    container: 'map6', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map6.on('load', async () => {
    const poi_icon = await map6.loadImage('../icons/point-of-interest4.png');
    map6.addImage('poi_icon', poi_icon.data);
    map6.addSource("Ciclovia_6", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_6.geojson"});
    map6.addSource("Poi_cicl_6", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_6.geojson"});
    map6.addLayer({"id": "Ciclovia_6","source": "Ciclovia_6","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map6.addLayer({"id": "Poi_cicl_6","source": "Poi_cicl_6","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP7 -------------------------------------------------------------------------------------
var map7 = new maplibregl.Map({
    container: 'map7', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map7.on('load', async () => {
    const poi_icon = await map7.loadImage('../icons/point-of-interest4.png');
    map7.addImage('poi_icon', poi_icon.data);
    map7.addSource("Ciclovia_7", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_7.geojson"});
    map7.addSource("Poi_cicl_7", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_7.geojson"});
    map7.addLayer({"id": "Ciclovia_7","source": "Ciclovia_7","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map7.addLayer({"id": "Poi_cicl_7","source": "Poi_cicl_7","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP8 -------------------------------------------------------------------------------------
var map8 = new maplibregl.Map({
    container: 'map8', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map8.on('load', async () => {
    const poi_icon = await map8.loadImage('../icons/point-of-interest4.png');
    map8.addImage('poi_icon', poi_icon.data);
    map8.addSource("Ciclovia_8", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_8.geojson"});
    map8.addSource("Poi_cicl_8", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_8.geojson"});
    map8.addLayer({"id": "Ciclovia_8","source": "Ciclovia_8","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map8.addLayer({"id": "Poi_cicl_8","source": "Poi_cicl_8","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP10 -------------------------------------------------------------------------------------
var map10 = new maplibregl.Map({
    container: 'map10', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map10.on('load', async () => {
    const poi_icon = await map10.loadImage('../icons/point-of-interest4.png');
    map10.addImage('poi_icon', poi_icon.data);
    map10.addSource("Ciclovia_10", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_10.geojson"});
    map10.addSource("Poi_cicl_10", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_10.geojson"});
    map10.addLayer({"id": "Ciclovia_10","source": "Ciclovia_10","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map10.addLayer({"id": "Poi_cicl_10","source": "Poi_cicl_10","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP15 -------------------------------------------------------------------------------------
var map15 = new maplibregl.Map({
    container: 'map15', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map15.on('load', async () => {
    const poi_icon = await map15.loadImage('../icons/point-of-interest4.png');
    map15.addImage('poi_icon', poi_icon.data);
    map15.addSource("Ciclovia_15", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_15.geojson"});
    map15.addSource("Poi_cicl_15", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_15.geojson"});
    map15.addLayer({"id": "Ciclovia_15","source": "Ciclovia_15","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map15.addLayer({"id": "Poi_cicl_15","source": "Poi_cicl_15","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP16 -------------------------------------------------------------------------------------
var map16 = new maplibregl.Map({
    container: 'map16', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map16.on('load', async () => {
    const poi_icon = await map16.loadImage('../icons/point-of-interest4.png');
    map16.addImage('poi_icon', poi_icon.data);
    map16.addSource("Ciclovia_16", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_16.geojson"});
    map16.addSource("Poi_cicl_16", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_16.geojson"});
    map16.addLayer({"id": "Ciclovia_16","source": "Ciclovia_16","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map16.addLayer({"id": "Poi_cicl_16","source": "Poi_cicl_16","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP19 -------------------------------------------------------------------------------------
var map19 = new maplibregl.Map({
    container: 'map19', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map19.on('load', async () => {
    const poi_icon = await map19.loadImage('../icons/point-of-interest4.png');
    map19.addImage('poi_icon', poi_icon.data);
    map19.addSource("Ciclovia_19", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_19.geojson"});
    map19.addSource("Poi_cicl_19", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_19.geojson"});
    map19.addLayer({"id": "Ciclovia_19","source": "Ciclovia_19","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map19.addLayer({"id": "Poi_cicl_19","source": "Poi_cicl_19","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP20 -------------------------------------------------------------------------------------
var map20 = new maplibregl.Map({
    container: 'map20', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map20.on('load', async () => {
    const poi_icon = await map20.loadImage('../icons/point-of-interest4.png');
    map20.addImage('poi_icon', poi_icon.data);
    map20.addSource("Ciclovia_20", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_20.geojson"});
    map20.addSource("Poi_cicl_20", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_20.geojson"});
    map20.addLayer({"id": "Ciclovia_20","source": "Ciclovia_20","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map20.addLayer({"id": "Poi_cicl_20","source": "Poi_cicl_20","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});

//------ MAP22 -------------------------------------------------------------------------------------
var map22 = new maplibregl.Map({
    container: 'map22', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.96067, 44.71823], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map22.on('load', async () => {
    const poi_icon = await map22.loadImage('../icons/point-of-interest4.png');
    map22.addImage('poi_icon', poi_icon.data);
    map22.addSource("Ciclovia_22", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_22.geojson"});
    map22.addSource("Poi_cicl_22", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/poi_cicl_22.geojson"});
    map22.addLayer({"id": "Ciclovia_22","source": "Ciclovia_22","type": "line","paint": {"line-width":3,"line-color": "#FF0002"}});
    map22.addLayer({"id": "Poi_cicl_22","source": "Poi_cicl_22","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
});