
//------ SET BASE MAP FEATURES -------------------------------------------------------------------------------------
var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    center: [7.36067, 44.90823], // starting position [lng, lat]
    zoom: 9, // starting zoom
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
let hoveredStateId = null;

//-------ADD LAYERS------------------------------------------------------------------------------------------------
map.on('load', () => {

    //SOURCES
    map.addSource("Ciclovia_1", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_1.geojson"});
    map.addSource("Ciclovia_2", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_2.geojson"});
    map.addSource("Ciclovia_3", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_3.geojson"});
    map.addSource("Ciclovia_4", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map.addSource("Ciclovia_5", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_5.geojson"});
    map.addSource("Ciclovia_6", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_6.geojson"});
    map.addSource("Ciclovia_7", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_7.geojson"});
    map.addSource("Ciclovia_8", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_8.geojson"});
    map.addSource("Ciclovia_9", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_9.geojson"});
    map.addSource("Ciclovia_10", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_10.geojson"});
    map.addSource("Ciclovia_11", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_11.geojson"});
    map.addSource("Ciclovia_12", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_12.geojson"});
    map.addSource("Ciclovia_13", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_13.geojson"});
    map.addSource("Ciclovia_14", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_14.geojson"});
    map.addSource("Ciclovia_15", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_15.geojson"});
    map.addSource("Ciclovia_16", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_16.geojson"});
    map.addSource("Ciclovia_17", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_17.geojson"});
    map.addSource("Ciclovia_18", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_18.geojson"});
    map.addSource("Ciclovia_19", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_19.geojson"});
    map.addSource("Ciclovia_20", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_20.geojson"});
    map.addSource("Ciclovia_21", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_21.geojson"});
    map.addSource("Ciclovia_22", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_22.geojson"});
    map.addSource("Ciclovia_23", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_23.geojson"});
    map.addSource("Ciclovia_24", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_24.geojson"});
    map.addSource("Ciclovia_25", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_25.geojson"});
    map.addSource("Ciclovia_26", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_26.geojson"});
    map.addSource("Ciclovia_27", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_27.geojson"});
    map.addSource("Ciclovia_28", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_28.geojson"});

    //LAYER
    map.addLayer({"id": "Ciclovia_1","source": "Ciclovia_1","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#fd0004"}});
    map.addLayer({"id": "Ciclovia_2","source": "Ciclovia_2","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#e8334b"}});
    map.addLayer({"id": "Ciclovia_3","source": "Ciclovia_3","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ed085f"}});
    map.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ea1f8a"}});
    map.addLayer({"id": "Ciclovia_5","source": "Ciclovia_5","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ed2ba7"}});
    map.addLayer({"id": "Ciclovia_6","source": "Ciclovia_6","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ed2bc1"}});
    map.addLayer({"id": "Ciclovia_7","source": "Ciclovia_7","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ed15d9"}});
    map.addLayer({"id": "Ciclovia_8","source": "Ciclovia_8","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#f80ef8"}});
    map.addLayer({"id": "Ciclovia_9","source": "Ciclovia_9","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#df0ef8"}});
    map.addLayer({"id": "Ciclovia_10","source": "Ciclovia_10","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#c108f8"}});
    map.addLayer({"id": "Ciclovia_11","source": "Ciclovia_11","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#9908f8"}});
    map.addLayer({"id": "Ciclovia_12","source": "Ciclovia_12","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#8008f8"}});
    map.addLayer({"id": "Ciclovia_13","source": "Ciclovia_13","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#5c08f8"}});
    map.addLayer({"id": "Ciclovia_14","source": "Ciclovia_14","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#3008f8"}});
    map.addLayer({"id": "Ciclovia_15","source": "Ciclovia_15","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#3376f5"}});
    map.addLayer({"id": "Ciclovia_16","source": "Ciclovia_16","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#33e6f5"}});
    map.addLayer({"id": "Ciclovia_17","source": "Ciclovia_17","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#05ffca"}});
    map.addLayer({"id": "Ciclovia_18","source": "Ciclovia_18","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#05ff8a"}});
    map.addLayer({"id": "Ciclovia_19","source": "Ciclovia_19","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#05ff49"}});
    map.addLayer({"id": "Ciclovia_20","source": "Ciclovia_20","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#32ff05"}});
    map.addLayer({"id": "Ciclovia_21","source": "Ciclovia_21","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#67ff05"}});
    map.addLayer({"id": "Ciclovia_22","source": "Ciclovia_22","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#acff05"}});
    map.addLayer({"id": "Ciclovia_23","source": "Ciclovia_23","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#d2ff05"}});
    map.addLayer({"id": "Ciclovia_24","source": "Ciclovia_24","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ffe405"}});
    map.addLayer({"id": "Ciclovia_25","source": "Ciclovia_25","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ffaf05"}});
    map.addLayer({"id": "Ciclovia_26","source": "Ciclovia_26","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ff7a05"}});
    map.addLayer({"id": "Ciclovia_27","source": "Ciclovia_27","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ff4505"}});
    map.addLayer({"id": "Ciclovia_28","source": "Ciclovia_28","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#ff0505"}});

//---------CREATE SELECTION--------------------------------------------

    map.on("mousemove", "Ciclovia_1", (e) => {console.log(e); if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_1", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_2", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_2", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_3", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_3", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_3", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_3", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_3", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_4", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_4", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_4", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_4", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_4", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_5", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_5", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_5", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_5", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_5", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_6", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_6", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_6", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_6", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_6", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_7", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_7", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_7", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_7", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_7", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_8", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_8", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_8", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_8", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_8", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_9", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_9", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_9", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_9", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_9", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_10", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_10", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_11", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_11", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_11", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_11", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_11", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_12", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_12", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_12", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_12", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_12", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_13", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_13", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_13", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_13", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_13", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_14", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_14", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_14", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_14", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_14", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_15", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_15", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_16", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_16", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_17", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_17", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_17", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_17", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_17", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_18", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_18", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_18", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_18", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_18", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_19", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_19", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_20", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_20", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_21", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_21", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_21", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_21", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_21", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_22", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_22", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_23", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_23", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_23", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_23", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_23", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_24", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_24", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_24", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_24", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_24", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_25", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_25", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_25", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_25", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_25", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_26", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_26", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_26", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_26", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_26", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_27", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_27", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_27", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_27", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_27", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    map.on("mousemove", "Ciclovia_28", (e) => {if (e.features.length > 0) {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_28", id: hoveredStateId}, {hover: false});}; hoveredStateId = e.features[0].id; map.setFeatureState({source: "Ciclovia_28", id: hoveredStateId},{hover: true});}});
    map.on("mouseleave", "Ciclovia_28", () => {if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_28", id: hoveredStateId},{hover: false});} hoveredStateId = null; });
    hoveredStateId = null;
    
    //----INFO-POPUP---------------------------------------
    var my_popup = new maplibregl.Popup()
    map.on("mousemove", "Ciclovia_1", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>1 - EUROVELO 8</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_1", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_2", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>2 - VENTO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_2", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_3", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>3 - CANALE CAVOUR</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_3", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_4", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>4 - VIA DEL MARE</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_4", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_5", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>5 - VIA FRANCIGENA VALLE D AOSTA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_5", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_6", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>6 - VIA FRANCIGENA VALLE SUSA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_6", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_7", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>7 - VIA DEL TICINO E DEL LAGO MAGGIORE</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_7", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_8", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>8 - VIA PROVENZALE</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_8", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_9", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>9 - VIA DEL MONVISO LUNGO IL PO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_9", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_10", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>10 - VIA PEDEMONTANA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_10", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_11", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>11 - VIA GRANDA - RACCONIGI SALUZZO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_11", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_12", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>12 - VIA GRANDA - SALUZZO FOSSANO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_12", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_13", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>13 - VIA DELLA VAL VARAITA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_13", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_14", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>14 - VIA LANPO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_14", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_15", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>15 - CORONA DI DELIZIE</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_15", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_16", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>16 - BAR2BAR</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_16", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_17", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>17 - 2 RUOTE 2 REGGE</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_17", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_18", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>18 - ALESSANDRIA - ACQUI - ALBA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_18", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_19", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>19 - TERRE DI COPPI</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_19", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_20", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>20 - TRACCE DEI GHIACCIAI</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_20", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_21", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>21 - LIMONE - MONESI</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_21", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_22", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>22 - AIDA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_22", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_23", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>23 - VELA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_23", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_24", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>24 - DELL ORCO</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_24", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_25", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>25 - DORA BALTEA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_25", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_26", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>26 - DELLA SESIA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_26", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_27", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>27 - CARMAGNOLA - BRA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_27", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_28", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>28 - ALBA - ALESSANDRIA</div>'; my_popup.setLngLat(coordinates).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_28", () => {my_popup.remove()});
    
    
    //----ONCLIK GO TO PAGES-------------------
    map.on("click", "Ciclovia_1", () => {window.location.href = "../pages/ciclabili.html#c1"});
    map.on("click", "Ciclovia_2", () => {window.location.href = "../pages/ciclabili.html#c2"});
    map.on("click", "Ciclovia_3", () => {window.location.href = "../pages/ciclabili.html#c3"});
    map.on("click", "Ciclovia_4", () => {window.location.href = "../pages/ciclabili.html#c4"});
    map.on("click", "Ciclovia_5", () => {window.location.href = "../pages/ciclabili.html#c5"});
    map.on("click", "Ciclovia_6", () => {window.location.href = "../pages/ciclabili.html#c6"});
    map.on("click", "Ciclovia_7", () => {window.location.href = "../pages/ciclabili.html#c7"});
    map.on("click", "Ciclovia_8", () => {window.location.href = "../pages/ciclabili.html#c8"});
    map.on("click", "Ciclovia_9", () => {window.location.href = "../pages/ciclabili.html#c9"});
    map.on("click", "Ciclovia_10", () => {window.location.href = "../pages/ciclabili.html#c10"});
    map.on("click", "Ciclovia_11", () => {window.location.href = "../pages/ciclabili.html#c11"});
    map.on("click", "Ciclovia_12", () => {window.location.href = "../pages/ciclabili.html#c12"});
    map.on("click", "Ciclovia_13", () => {window.location.href = "../pages/ciclabili.html#c13"});
    map.on("click", "Ciclovia_14", () => {window.location.href = "../pages/ciclabili.html#c14"});
    map.on("click", "Ciclovia_15", () => {window.location.href = "../pages/ciclabili.html#c15"});
    map.on("click", "Ciclovia_16", () => {window.location.href = "../pages/ciclabili.html#c16"});
    map.on("click", "Ciclovia_17", () => {window.location.href = "../pages/ciclabili.html#c17"});
    map.on("click", "Ciclovia_18", () => {window.location.href = "../pages/ciclabili.html#c18"});
    map.on("click", "Ciclovia_19", () => {window.location.href = "../pages/ciclabili.html#c19"});
    map.on("click", "Ciclovia_20", () => {window.location.href = "../pages/ciclabili.html#c20"});
    map.on("click", "Ciclovia_21", () => {window.location.href = "../pages/ciclabili.html#c21"});
    map.on("click", "Ciclovia_22", () => {window.location.href = "../pages/ciclabili.html#c22"});
    map.on("click", "Ciclovia_23", () => {window.location.href = "../pages/ciclabili.html#c23"});
    map.on("click", "Ciclovia_24", () => {window.location.href = "../pages/ciclabili.html#c24"});
    map.on("click", "Ciclovia_25", () => {window.location.href = "../pages/ciclabili.html#c25"});
    map.on("click", "Ciclovia_26", () => {window.location.href = "../pages/ciclabili.html#c26"});
    map.on("click", "Ciclovia_27", () => {window.location.href = "../pages/ciclabili.html#c27"});
    map.on("click", "Ciclovia_28", () => {window.location.href = "../pages/ciclabili.html#c28"});

    //------ON HOVER LEGENDA-------------------------------------------------
    function evidenzia1(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: false});}; hoveredStateId = 1; map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia1(){{map.setFeatureState({source: "Ciclovia_1", id: 1},{hover: false});} hoveredStateId = null;};
    function evidenzia2(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: false});}; hoveredStateId = 2; map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia2(){{map.setFeatureState({source: "Ciclovia_2", id: 2},{hover: false});} hoveredStateId = null;};
    function evidenzia3(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_3", id: hoveredStateId},{hover: false});}; hoveredStateId = 3; map.setFeatureState({source: "Ciclovia_3", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia3(){{map.setFeatureState({source: "Ciclovia_3", id: 3},{hover: false});} hoveredStateId = null;};
    function evidenzia4(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_4", id: hoveredStateId},{hover: false});}; hoveredStateId = 4; map.setFeatureState({source: "Ciclovia_4", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia4(){{map.setFeatureState({source: "Ciclovia_4", id: 4},{hover: false});} hoveredStateId = null;};
    function evidenzia5(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_5", id: hoveredStateId},{hover: false});}; hoveredStateId = 5; map.setFeatureState({source: "Ciclovia_5", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia5(){{map.setFeatureState({source: "Ciclovia_5", id: 5},{hover: false});} hoveredStateId = null;};
    function evidenzia6(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_6", id: hoveredStateId},{hover: false});}; hoveredStateId = 6; map.setFeatureState({source: "Ciclovia_6", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia6(){{map.setFeatureState({source: "Ciclovia_6", id: 6},{hover: false});} hoveredStateId = null;};
    function evidenzia7(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_7", id: hoveredStateId},{hover: false});}; hoveredStateId = 7; map.setFeatureState({source: "Ciclovia_7", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia7(){{map.setFeatureState({source: "Ciclovia_7", id: 7},{hover: false});} hoveredStateId = null;};
    function evidenzia8(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_8", id: hoveredStateId},{hover: false});}; hoveredStateId = 8; map.setFeatureState({source: "Ciclovia_8", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia8(){{map.setFeatureState({source: "Ciclovia_8", id: 8},{hover: false});} hoveredStateId = null;};
    function evidenzia9(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_9", id: hoveredStateId},{hover: false});}; hoveredStateId = 9; map.setFeatureState({source: "Ciclovia_9", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia9(){{map.setFeatureState({source: "Ciclovia_9", id: 9},{hover: false});} hoveredStateId = null;};
    function evidenzia10(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: false});}; hoveredStateId = 10; map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia10(){{map.setFeatureState({source: "Ciclovia_10", id: 10},{hover: false});} hoveredStateId = null;};
    function evidenzia11(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_11", id: hoveredStateId},{hover: false});}; hoveredStateId = 11; map.setFeatureState({source: "Ciclovia_11", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia11(){{map.setFeatureState({source: "Ciclovia_11", id: 11},{hover: false});} hoveredStateId = null;};
    function evidenzia12(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_12", id: hoveredStateId},{hover: false});}; hoveredStateId = 12; map.setFeatureState({source: "Ciclovia_12", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia12(){{map.setFeatureState({source: "Ciclovia_12", id: 12},{hover: false});} hoveredStateId = null;};
    function evidenzia13(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_13", id: hoveredStateId},{hover: false});}; hoveredStateId = 13; map.setFeatureState({source: "Ciclovia_13", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia13(){{map.setFeatureState({source: "Ciclovia_13", id: 13},{hover: false});} hoveredStateId = null;};
    function evidenzia14(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_14", id: hoveredStateId},{hover: false});}; hoveredStateId = 14; map.setFeatureState({source: "Ciclovia_14", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia14(){{map.setFeatureState({source: "Ciclovia_14", id: 14},{hover: false});} hoveredStateId = null;};
    function evidenzia15(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: false});}; hoveredStateId = 15; map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia15(){{map.setFeatureState({source: "Ciclovia_15", id: 15},{hover: false});} hoveredStateId = null;};
    function evidenzia16(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: false});}; hoveredStateId = 16; map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia16(){{map.setFeatureState({source: "Ciclovia_16", id: 16},{hover: false});} hoveredStateId = null;};
    function evidenzia17(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_17", id: hoveredStateId},{hover: false});}; hoveredStateId = 17; map.setFeatureState({source: "Ciclovia_17", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia17(){{map.setFeatureState({source: "Ciclovia_17", id: 17},{hover: false});} hoveredStateId = null;};
    function evidenzia18(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_18", id: hoveredStateId},{hover: false});}; hoveredStateId = 18; map.setFeatureState({source: "Ciclovia_18", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia18(){{map.setFeatureState({source: "Ciclovia_18", id: 18},{hover: false});} hoveredStateId = null;};
    function evidenzia19(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: false});}; hoveredStateId = 19; map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia19(){{map.setFeatureState({source: "Ciclovia_19", id: 19},{hover: false});} hoveredStateId = null;};
    function evidenzia20(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: false});}; hoveredStateId = 20; map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia20(){{map.setFeatureState({source: "Ciclovia_20", id: 20},{hover: false});} hoveredStateId = null;};
    function evidenzia21(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_21", id: hoveredStateId},{hover: false});}; hoveredStateId = 21; map.setFeatureState({source: "Ciclovia_21", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia21(){{map.setFeatureState({source: "Ciclovia_21", id: 21},{hover: false});} hoveredStateId = null;};
    function evidenzia22(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: false});}; hoveredStateId = 22; map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia22(){{map.setFeatureState({source: "Ciclovia_22", id: 22},{hover: false});} hoveredStateId = null;};
    function evidenzia23(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_23", id: hoveredStateId},{hover: false});}; hoveredStateId = 23; map.setFeatureState({source: "Ciclovia_23", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia23(){{map.setFeatureState({source: "Ciclovia_23", id: 23},{hover: false});} hoveredStateId = null;};
    function evidenzia24(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_24", id: hoveredStateId},{hover: false});}; hoveredStateId = 24; map.setFeatureState({source: "Ciclovia_24", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia24(){{map.setFeatureState({source: "Ciclovia_24", id: 24},{hover: false});} hoveredStateId = null;};
    function evidenzia25(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_25", id: hoveredStateId},{hover: false});}; hoveredStateId = 25; map.setFeatureState({source: "Ciclovia_25", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia25(){{map.setFeatureState({source: "Ciclovia_25", id: 25},{hover: false});} hoveredStateId = null;};
    function evidenzia26(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_26", id: hoveredStateId},{hover: false});}; hoveredStateId = 26; map.setFeatureState({source: "Ciclovia_26", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia26(){{map.setFeatureState({source: "Ciclovia_26", id: 26},{hover: false});} hoveredStateId = null;};
    function evidenzia27(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_27", id: hoveredStateId},{hover: false});}; hoveredStateId = 27; map.setFeatureState({source: "Ciclovia_27", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia27(){{map.setFeatureState({source: "Ciclovia_27", id: 27},{hover: false});} hoveredStateId = null;};
    function evidenzia28(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_28", id: hoveredStateId},{hover: false});}; hoveredStateId = 28; map.setFeatureState({source: "Ciclovia_28", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia28(){{map.setFeatureState({source: "Ciclovia_28", id: 28},{hover: false});} hoveredStateId = null;};


    document.getElementById("cicl1").addEventListener("mouseover", evidenzia1);
    document.getElementById("cicl1").addEventListener("mouseleave", disevidenzia1);
    document.getElementById("cicl2").addEventListener("mouseover", evidenzia2);
    document.getElementById("cicl2").addEventListener("mouseleave", disevidenzia2);
    document.getElementById("cicl3").addEventListener("mouseover", evidenzia3);
    document.getElementById("cicl3").addEventListener("mouseleave", disevidenzia3);
    document.getElementById("cicl4").addEventListener("mouseover", evidenzia4);
    document.getElementById("cicl4").addEventListener("mouseleave", disevidenzia4);
    document.getElementById("cicl5").addEventListener("mouseover", evidenzia5);
    document.getElementById("cicl5").addEventListener("mouseleave", disevidenzia5);
    document.getElementById("cicl6").addEventListener("mouseover", evidenzia6);
    document.getElementById("cicl6").addEventListener("mouseleave", disevidenzia6);
    document.getElementById("cicl7").addEventListener("mouseover", evidenzia7);
    document.getElementById("cicl7").addEventListener("mouseleave", disevidenzia7);
    document.getElementById("cicl8").addEventListener("mouseover", evidenzia8);
    document.getElementById("cicl8").addEventListener("mouseleave", disevidenzia8);
    document.getElementById("cicl9").addEventListener("mouseover", evidenzia9);
    document.getElementById("cicl9").addEventListener("mouseleave", disevidenzia9);
    document.getElementById("cicl10").addEventListener("mouseover", evidenzia10);
    document.getElementById("cicl10").addEventListener("mouseleave", disevidenzia10);
    document.getElementById("cicl11").addEventListener("mouseover", evidenzia11);
    document.getElementById("cicl11").addEventListener("mouseleave", disevidenzia11);
    document.getElementById("cicl12").addEventListener("mouseover", evidenzia12);
    document.getElementById("cicl12").addEventListener("mouseleave", disevidenzia12);
    document.getElementById("cicl13").addEventListener("mouseover", evidenzia13);
    document.getElementById("cicl13").addEventListener("mouseleave", disevidenzia13);
    document.getElementById("cicl14").addEventListener("mouseover", evidenzia14);
    document.getElementById("cicl14").addEventListener("mouseleave", disevidenzia14);
    document.getElementById("cicl15").addEventListener("mouseover", evidenzia15);
    document.getElementById("cicl15").addEventListener("mouseleave", disevidenzia15);
    document.getElementById("cicl16").addEventListener("mouseover", evidenzia16);
    document.getElementById("cicl16").addEventListener("mouseleave", disevidenzia16);
    document.getElementById("cicl17").addEventListener("mouseover", evidenzia17);
    document.getElementById("cicl17").addEventListener("mouseleave", disevidenzia17);
    document.getElementById("cicl18").addEventListener("mouseover", evidenzia18);
    document.getElementById("cicl18").addEventListener("mouseleave", disevidenzia18);
    document.getElementById("cicl19").addEventListener("mouseover", evidenzia19);
    document.getElementById("cicl19").addEventListener("mouseleave", disevidenzia19);
    document.getElementById("cicl20").addEventListener("mouseover", evidenzia20);
    document.getElementById("cicl20").addEventListener("mouseleave", disevidenzia20);
    document.getElementById("cicl21").addEventListener("mouseover", evidenzia21);
    document.getElementById("cicl21").addEventListener("mouseleave", disevidenzia21);
    document.getElementById("cicl22").addEventListener("mouseover", evidenzia22);
    document.getElementById("cicl22").addEventListener("mouseleave", disevidenzia22);
    document.getElementById("cicl23").addEventListener("mouseover", evidenzia23);
    document.getElementById("cicl23").addEventListener("mouseleave", disevidenzia23);
    document.getElementById("cicl24").addEventListener("mouseover", evidenzia24);
    document.getElementById("cicl24").addEventListener("mouseleave", disevidenzia24);
    document.getElementById("cicl25").addEventListener("mouseover", evidenzia25);
    document.getElementById("cicl25").addEventListener("mouseleave", disevidenzia25);
    document.getElementById("cicl26").addEventListener("mouseover", evidenzia26);
    document.getElementById("cicl26").addEventListener("mouseleave", disevidenzia26);
    document.getElementById("cicl27").addEventListener("mouseover", evidenzia27);
    document.getElementById("cicl27").addEventListener("mouseleave", disevidenzia27);
    document.getElementById("cicl28").addEventListener("mouseover", evidenzia28);
    document.getElementById("cicl28").addEventListener("mouseleave", disevidenzia28);



    //-----OTHER CONFIGRATIONS--------------------------
    // Change the cursor to a pointer when the mouse is over the places layer. Change it back to a pointer when it leaves.
    /* map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });
     */
    //toggleSidebar('left');

})