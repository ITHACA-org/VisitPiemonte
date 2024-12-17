
//------ SET BASE MAP FEATURES -------------------------------------------------------------------------------------
var map = new maplibregl.Map({
    container: 'map', // container id
    //style: 'https://api.maptiler.com/maps/hybrid/style.json?key=IufzbVf2iFVM9b8V7su4', // style URL
    style: 'https://api.maptiler.com/maps/aquarelle/style.json?key=IufzbVf2iFVM9b8V7su4',
    center: [7.96067, 45.11823], // starting position [lng, lat]
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
let hoveredStateId = null;

//-------ADD LAYERS------------------------------------------------------------------------------------------------
map.on('load', () => {

    //ADD SOURCES
    map.addSource("Ciclovia_1", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_1.geojson"});
    map.addSource("Ciclovia_2", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_2.geojson"});
    map.addSource("Ciclovia_4", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map.addSource("Ciclovia_5", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_5.geojson"});
    map.addSource("Ciclovia_6", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_6.geojson"});
    map.addSource("Ciclovia_7", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_7.geojson"});
    map.addSource("Ciclovia_8", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_8.geojson"});
    map.addSource("Ciclovia_10", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_10.geojson"});
    map.addSource("Ciclovia_15", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_15.geojson"});
    map.addSource("Ciclovia_16", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_16.geojson"});
    map.addSource("Ciclovia_19", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_19.geojson"});
    map.addSource("Ciclovia_20", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_20.geojson"});
    map.addSource("Ciclovia_22", {"type": "geojson", "data": "./data/geojson/piste_ciclabili_singole/merged/Ciclovia_22.geojson"});

    //ADD LAYER HALO
    map.addLayer({"id": "Ciclovia_1_bordi","source": "Ciclovia_1","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_2_bordi","source": "Ciclovia_2","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_4_bordi","source": "Ciclovia_4","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_5_bordi","source": "Ciclovia_5","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_6_bordi","source": "Ciclovia_6","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_7_bordi","source": "Ciclovia_7","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_8_bordi","source": "Ciclovia_8","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_10_bordi","source": "Ciclovia_10","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_15_bordi","source": "Ciclovia_15","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_16_bordi","source": "Ciclovia_16","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_19_bordi","source": "Ciclovia_19","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_20_bordi","source": "Ciclovia_20","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});
    map.addLayer({"id": "Ciclovia_22_bordi","source": "Ciclovia_22","type": "line","paint": {"line-width":2,"line-color": "#000000","line-gap-width": 2, "line-opacity": 0.6}});

    //ADD LAYERS
    map.addLayer({"id": "Ciclovia_1","source": "Ciclovia_1","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#FF0002"}});
    map.addLayer({"id": "Ciclovia_2","source": "Ciclovia_2","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 7, 4],"line-color": "#81FF00"}});
    map.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#00FFFD"}});
    map.addLayer({"id": "Ciclovia_5","source": "Ciclovia_5","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#7E00FF"}});
    map.addLayer({"id": "Ciclovia_6","source": "Ciclovia_6","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#FF0062"}});
    map.addLayer({"id": "Ciclovia_7","source": "Ciclovia_7","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#E1FF00"}});
    map.addLayer({"id": "Ciclovia_8","source": "Ciclovia_8","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#00FF9D"}});
    map.addLayer({"id": "Ciclovia_10","source": "Ciclovia_10","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#1E00FF"}});
    map.addLayer({"id": "Ciclovia_15","source": "Ciclovia_15","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#FF00B6"}});
    map.addLayer({"id": "Ciclovia_16","source": "Ciclovia_16","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#FFC800"}});
    map.addLayer({"id": "Ciclovia_19","source": "Ciclovia_19","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#00FF49"}});
    map.addLayer({"id": "Ciclovia_20","source": "Ciclovia_20","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#0037FF"}});
    map.addLayer({"id": "Ciclovia_22","source": "Ciclovia_22","type": "line","paint": {"line-width": ["case",["boolean", ["feature-state", "hover"], false], 6, 3],"line-color": "#E6FF00"}});

//---------FUNZIONI PER EVIDENZIARE E DISEVIDENZIARE----------------------------
    function evidenzia1(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: false});}; hoveredStateId = 1; map.setFeatureState({source: "Ciclovia_1", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia1(){{map.setFeatureState({source: "Ciclovia_1", id: 1},{hover: false});} hoveredStateId = null;};
    function evidenzia2(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: false});}; hoveredStateId = 2; map.setFeatureState({source: "Ciclovia_2", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia2(){{map.setFeatureState({source: "Ciclovia_2", id: 2},{hover: false});} hoveredStateId = null;};
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
    function evidenzia10(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: false});}; hoveredStateId = 10; map.setFeatureState({source: "Ciclovia_10", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia10(){{map.setFeatureState({source: "Ciclovia_10", id: 10},{hover: false});} hoveredStateId = null;};
    function evidenzia15(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: false});}; hoveredStateId = 15; map.setFeatureState({source: "Ciclovia_15", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia15(){{map.setFeatureState({source: "Ciclovia_15", id: 15},{hover: false});} hoveredStateId = null;};
    function evidenzia16(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: false});}; hoveredStateId = 16; map.setFeatureState({source: "Ciclovia_16", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia16(){{map.setFeatureState({source: "Ciclovia_16", id: 16},{hover: false});} hoveredStateId = null;};
    function evidenzia19(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: false});}; hoveredStateId = 19; map.setFeatureState({source: "Ciclovia_19", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia19(){{map.setFeatureState({source: "Ciclovia_19", id: 19},{hover: false});} hoveredStateId = null;};
    function evidenzia20(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: false});}; hoveredStateId = 20; map.setFeatureState({source: "Ciclovia_20", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia20(){{map.setFeatureState({source: "Ciclovia_20", id: 20},{hover: false});} hoveredStateId = null;};
    function evidenzia22(){if (hoveredStateId) {map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: false});}; hoveredStateId = 22; map.setFeatureState({source: "Ciclovia_22", id: hoveredStateId},{hover: true}); hoveredStateId = null;};
    function disevidenzia22(){{map.setFeatureState({source: "Ciclovia_22", id: 22},{hover: false});} hoveredStateId = null;};


//---------CREATE SELECTION--------------------------------------------
    map.on("mousemove", "Ciclovia_1", () => {evidenzia1()});
    map.on("mouseleave", "Ciclovia_1", () => {disevidenzia1()});
    map.on("mousemove", "Ciclovia_2", () => {evidenzia2()});
    map.on("mouseleave", "Ciclovia_2", () => {disevidenzia2()});
    map.on("mousemove", "Ciclovia_4", () => {evidenzia4()});
    map.on("mouseleave", "Ciclovia_4", () => {disevidenzia4()});
    map.on("mousemove", "Ciclovia_5", () => {evidenzia5()});
    map.on("mouseleave", "Ciclovia_5", () => {disevidenzia5()});
    map.on("mousemove", "Ciclovia_6", () => {evidenzia6()});
    map.on("mouseleave", "Ciclovia_6", () => {disevidenzia6()});
    map.on("mousemove", "Ciclovia_7", () => {evidenzia7()});
    map.on("mouseleave", "Ciclovia_7", () => {disevidenzia7()});
    map.on("mousemove", "Ciclovia_8", () => {evidenzia8()});
    map.on("mouseleave", "Ciclovia_8", () => {disevidenzia8()});
    map.on("mousemove", "Ciclovia_10", () => {evidenzia10()});
    map.on("mouseleave", "Ciclovia_10", () => {disevidenzia10()});
    map.on("mousemove", "Ciclovia_15", () => {evidenzia15()});
    map.on("mouseleave", "Ciclovia_15", () => {disevidenzia15()});
    map.on("mousemove", "Ciclovia_16", () => {evidenzia16()});
    map.on("mouseleave", "Ciclovia_16", () => {disevidenzia16()});
    map.on("mousemove", "Ciclovia_19", () => {evidenzia19()});
    map.on("mouseleave", "Ciclovia_19", () => {disevidenzia19()});
    map.on("mousemove", "Ciclovia_20", () => {evidenzia20()});
    map.on("mouseleave", "Ciclovia_20", () => {disevidenzia20()});
    map.on("mousemove", "Ciclovia_22", () => {evidenzia22()});
    map.on("mouseleave", "Ciclovia_22", () => {disevidenzia22()});


    //----INFO-POPUP---------------------------------------
    var my_popup = new maplibregl.Popup()
    map.on("mousemove", "Ciclovia_1", (e) => {var description_html = '<div>1 - EUROVELO 8</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_1", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_2", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>2 - VENTO</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_2", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_4", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>4 - VIA DEL MARE</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_4", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_5", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>5 - VIA FRANCIGENA VALLE D AOSTA</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_5", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_6", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>6 - VIA FRANCIGENA VALLE SUSA</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_6", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_7", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>7 - VIA DEL TICINO E DEL LAGO MAGGIORE</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_7", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_8", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>8 - VIA PROVENZALE</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_8", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_10", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>10 - VIA PEDEMONTANA</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_10", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_15", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>15 - CORONA DI DELIZIE</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_15", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_16", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>16 - BAR2BAR</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_16", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_19", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>19 - TERRE DI COPPI</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_19", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_20", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>20 - TRACCE DEI GHIACCIAI</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_20", () => {my_popup.remove()});
    map.on("mousemove", "Ciclovia_22", (e) => {var coordinates = e.features[0].geometry.coordinates[0][0]; var description_html = '<div>22 - AIDA</div>'; my_popup.setLngLat(e.lngLat).setHTML(description_html).addTo(map);});
    map.on("mouseleave", "Ciclovia_22", () => {my_popup.remove()});
    
    //----ONCLIK GO TO PAGES-------------------
    map.on("click", "Ciclovia_1", () => {window.location.href = "../pages/ciclabili.html#c1"});
    map.on("click", "Ciclovia_2", () => {window.location.href = "../pages/ciclabili.html#c2"});
    map.on("click", "Ciclovia_4", () => {window.location.href = "../pages/ciclabili.html#c4"});
    map.on("click", "Ciclovia_5", () => {window.location.href = "../pages/ciclabili.html#c5"});
    map.on("click", "Ciclovia_6", () => {window.location.href = "../pages/ciclabili.html#c6"});
    map.on("click", "Ciclovia_7", () => {window.location.href = "../pages/ciclabili.html#c7"});
    map.on("click", "Ciclovia_8", () => {window.location.href = "../pages/ciclabili.html#c8"});
    map.on("click", "Ciclovia_10", () => {window.location.href = "../pages/ciclabili.html#c10"});
    map.on("click", "Ciclovia_15", () => {window.location.href = "../pages/ciclabili.html#c15"});
    map.on("click", "Ciclovia_16", () => {window.location.href = "../pages/ciclabili.html#c16"});
    map.on("click", "Ciclovia_19", () => {window.location.href = "../pages/ciclabili.html#c19"});
    map.on("click", "Ciclovia_20", () => {window.location.href = "../pages/ciclabili.html#c20"});
    map.on("click", "Ciclovia_22", () => {window.location.href = "../pages/ciclabili.html#c22"});


//--------ON HOVER LEGENDA-------------------------------------------------
    document.getElementById("cicl1").addEventListener("mouseover", evidenzia1);
    document.getElementById("cicl1").addEventListener("mouseleave", disevidenzia1);
    document.getElementById("cicl2").addEventListener("mouseover", evidenzia2);
    document.getElementById("cicl2").addEventListener("mouseleave", disevidenzia2);
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
    document.getElementById("cicl10").addEventListener("mouseover", evidenzia10);
    document.getElementById("cicl10").addEventListener("mouseleave", disevidenzia10);
    document.getElementById("cicl15").addEventListener("mouseover", evidenzia15);
    document.getElementById("cicl15").addEventListener("mouseleave", disevidenzia15);
    document.getElementById("cicl16").addEventListener("mouseover", evidenzia16);
    document.getElementById("cicl16").addEventListener("mouseleave", disevidenzia16);
    document.getElementById("cicl19").addEventListener("mouseover", evidenzia19);
    document.getElementById("cicl19").addEventListener("mouseleave", disevidenzia19);
    document.getElementById("cicl20").addEventListener("mouseover", evidenzia20);
    document.getElementById("cicl20").addEventListener("mouseleave", disevidenzia20);
    document.getElementById("cicl22").addEventListener("mouseover", evidenzia22);
    document.getElementById("cicl22").addEventListener("mouseleave", disevidenzia22);


    //-----OTHER CONFIGRATIONS--------------------------
    // Change the cursor to a pointer when the mouse is over the places layer. Change it back to a pointer when it leaves.
    map.on("mouseenter", "Ciclovia_1", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_1", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_2", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_2", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_4", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_4", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_5", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_5", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_6", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_6", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_7", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_7", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_8", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_8", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_10", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_10", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_15", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_15", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_16", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_16", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_19", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_19", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_20", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_20", () => {map.getCanvas().style.cursor = "";});
    map.on("mouseenter", "Ciclovia_22", () => {map.getCanvas().style.cursor = "context-menu";});
    map.on("mouseleave", "Ciclovia_22", () => {map.getCanvas().style.cursor = "";});

    //toggleSidebar('left');

})