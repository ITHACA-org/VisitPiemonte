
//------ MAP1 -------------------------------------------------------------------------------------
var map1 = new maplibregl.Map({
    container: 'map1', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.15, 44.7], // starting position [lng, lat]
    zoom:8, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map1.on('load', async () => {
    const poi_icon = await map1.loadImage('../icons/point-of-interest4.png');
    map1.addImage('poi_icon', poi_icon.data);
    map1.addSource("Ciclovia_1", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_1.geojson"});
    map1.addSource("Poi_cicl_1", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Eurovelo_VentTO.geojson"});
    map1.addLayer({"id": "Ciclovia_1_halo","source": "Ciclovia_1","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map1.addLayer({"id": "Ciclovia_1","source": "Ciclovia_1","type": "line","paint": {"line-width":3,"line-color": "#003A52"}});
    map1.addLayer({"id": "Poi_cicl_1","source": "Poi_cicl_1","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
    map1.on('click', 'Poi_cicl_1', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map1);})
});

//------ MAP4 -------------------------------------------------------------------------------------
var map4 = new maplibregl.Map({
    container: 'map4', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.1, 45.15], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map4.on('load', async () => {
    const poi_icon = await map4.loadImage('../icons/point-of-interest4.png');
    map4.addImage('poi_icon', poi_icon.data);
    map4.addSource("Ciclovia_4", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map4.addSource("Poi_cicl_4", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Via_del_Mare.geojson"});
    map4.addLayer({"id": "Ciclovia_4_halo","source": "Ciclovia_4","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map4.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width":3,"line-color": "#00778F"}});
    map4.addLayer({"id": "Poi_cicl_4","source": "Poi_cicl_4","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom',}});
    map4.on('click', 'Poi_cicl_4', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map4);})
});

//------ MAP5 -------------------------------------------------------------------------------------
var map5 = new maplibregl.Map({
    container: 'map5', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.15, 45.45], // starting position [lng, lat]
    zoom:9, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map5.on('load', async () => {
    const poi_icon = await map5.loadImage('../icons/point-of-interest4.png');
    map5.addImage('poi_icon', poi_icon.data);
    map5.addSource("Ciclovia_5", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_5.geojson"});
    map5.addSource("Poi_cicl_5", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Via_Franchigena_Canavese.geojson"});
    map5.addLayer({"id": "Ciclovia_5_halo","source": "Ciclovia_5","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map5.addLayer({"id": "Ciclovia_5","source": "Ciclovia_5","type": "line","paint": {"line-width":3,"line-color": "#006F1C"}});
    map5.addLayer({"id": "Poi_cicl_5","source": "Poi_cicl_5","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map5.on('click', 'Poi_cicl_5', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map5);})
});

//------ MAP6 -------------------------------------------------------------------------------------
var map6 = new maplibregl.Map({
    container: 'map6', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.9, 44.9], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map6.on('load', async () => {
    const poi_icon = await map6.loadImage('../icons/point-of-interest4.png');
    map6.addImage('poi_icon', poi_icon.data);
    map6.addSource("Ciclovia_6", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_6.geojson"});
    map6.addSource("Poi_cicl_6", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Ciclovia_Franchigena_della_Valle_di_Susa.geojson"});
    map6.addLayer({"id": "Ciclovia_6_halo","source": "Ciclovia_6","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map6.addLayer({"id": "Ciclovia_6","source": "Ciclovia_6","type": "line","paint": {"line-width":3,"line-color": "#666666"}});
    map6.addLayer({"id": "Poi_cicl_6","source": "Poi_cicl_6","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map6.on('click', 'Poi_cicl_6', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map6);})
});

//------ MAP7 -------------------------------------------------------------------------------------
var map7 = new maplibregl.Map({
    container: 'map7', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.6, 45.8], // starting position [lng, lat]
    zoom:8, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map7.on('load', async () => {
    const poi_icon = await map7.loadImage('../icons/point-of-interest4.png');
    map7.addImage('poi_icon', poi_icon.data);
    map7.addSource("Ciclovia_7", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_7.geojson"});
    map7.addSource("Poi_cicl_7", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Via_del_Ticino_e_del_Lago_Maggiore.geojson"});
    map7.addLayer({"id": "Ciclovia_7_halo","source": "Ciclovia_7","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map7.addLayer({"id": "Ciclovia_7","source": "Ciclovia_7","type": "line","paint": {"line-width":3,"line-color": "#541877"}});
    map7.addLayer({"id": "Poi_cicl_7","source": "Poi_cicl_7","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.05, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map7.on('click', 'Poi_cicl_7', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map7);})
});

//------ MAP8 -------------------------------------------------------------------------------------
var map8 = new maplibregl.Map({
    container: 'map8', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.4, 44.45], // starting position [lng, lat]
    zoom:8, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map8.on('load', async () => {
    const poi_icon = await map8.loadImage('../icons/point-of-interest4.png');
    map8.addImage('poi_icon', poi_icon.data);
    map8.addSource("Ciclovia_8", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_8.geojson"});
    map8.addSource("Poi_cicl_8", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Via_Provenzale.geojson"});
    map8.addLayer({"id": "Ciclovia_8_halo","source": "Ciclovia_8","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map8.addLayer({"id": "Ciclovia_8","source": "Ciclovia_8","type": "line","paint": {"line-width":3,"line-color": "#F39991"}});
    map8.addLayer({"id": "Poi_cicl_8","source": "Poi_cicl_8","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map8.on('click', 'Poi_cicl_8', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map8);})
});

//------ MAP10 -------------------------------------------------------------------------------------
var map10 = new maplibregl.Map({
    container: 'map10', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.7, 44.95], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map10.on('load', async () => {
    const poi_icon = await map10.loadImage('../icons/point-of-interest4.png');
    map10.addImage('poi_icon', poi_icon.data);
    map10.addSource("Ciclovia_10", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_10.geojson"});
    map10.addSource("Poi_cicl_10", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Via_Pedemontana.geojson"});
    map10.addLayer({"id": "Ciclovia_10_halo","source": "Ciclovia_10","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map10.addLayer({"id": "Ciclovia_10","source": "Ciclovia_10","type": "line","paint": {"line-width":3,"line-color": "#F14F04"}});
    map10.addLayer({"id": "Poi_cicl_10","source": "Poi_cicl_10","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map10.on('click', 'Poi_cicl_10', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map10);})
});

//------ MAP15 -------------------------------------------------------------------------------------
var map15 = new maplibregl.Map({
    container: 'map15', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.62, 45.08], // starting position [lng, lat]
    zoom:10, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map15.on('load', async () => {
    const poi_icon = await map15.loadImage('../icons/point-of-interest4.png');
    map15.addImage('poi_icon', poi_icon.data);
    map15.addSource("Ciclovia_15", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_15.geojson"});
    map15.addSource("Poi_cicl_15", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Corona_di_Delizie.geojson"});
    map15.addLayer({"id": "Ciclovia_15_halo","source": "Ciclovia_15","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map15.addLayer({"id": "Ciclovia_15","source": "Ciclovia_15","type": "line","paint": {"line-width":3,"line-color": "#CB1901"}});
    map15.addLayer({"id": "Poi_cicl_15","source": "Poi_cicl_15","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map15.on('click', 'Poi_cicl_15', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map15);})
});

//------ MAP16 -------------------------------------------------------------------------------------
var map16 = new maplibregl.Map({
    container: 'map16', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.05, 44.6], // starting position [lng, lat]
    zoom:10, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map16.on('load', async () => {
    const poi_icon = await map16.loadImage('../icons/point-of-interest4.png');
    map16.addImage('poi_icon', poi_icon.data);
    map16.addSource("Ciclovia_16", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_16.geojson"});
    map16.addSource("Poi_cicl_16", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_BartoBar.geojson"});
    map16.addLayer({"id": "Ciclovia_16_halo","source": "Ciclovia_16","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map16.addLayer({"id": "Ciclovia_16","source": "Ciclovia_16","type": "line","paint": {"line-width":3,"line-color": "#9B2226"}});
    map16.addLayer({"id": "Poi_cicl_16","source": "Poi_cicl_16","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map16.on('click', 'Poi_cicl_16', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map16);})
});

//------ MAP19 -------------------------------------------------------------------------------------
var map19 = new maplibregl.Map({
    container: 'map19', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [8.85, 44.83], // starting position [lng, lat]
    zoom:11, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map19.on('load', async () => {
    const poi_icon = await map19.loadImage('../icons/point-of-interest4.png');
    map19.addImage('poi_icon', poi_icon.data);
    map19.addSource("Ciclovia_19", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_19.geojson"});
    map19.addSource("Poi_cicl_19", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Terre_dei_Coppi.geojson"});
    map19.addLayer({"id": "Ciclovia_19_halo","source": "Ciclovia_19","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map19.addLayer({"id": "Ciclovia_19","source": "Ciclovia_19","type": "line","paint": {"line-width":3,"line-color": "#99600B"}});
    map19.addLayer({"id": "Poi_cicl_19","source": "Poi_cicl_19","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map19.on('click', 'Poi_cicl_19', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map19);})
});

//------ MAP20 -------------------------------------------------------------------------------------
var map20 = new maplibregl.Map({
    container: 'map20', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.96067, 45.7], // starting position [lng, lat]
    zoom:8, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map20.on('load', async () => {
    const poi_icon = await map20.loadImage('../icons/point-of-interest4.png');
    map20.addImage('poi_icon', poi_icon.data);
    map20.addSource("Ciclovia_20", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_20.geojson"});
    map20.addSource("Poi_cicl_20", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_Tracce_dei_Ghiacciai.geojson"});
    map20.addLayer({"id": "Ciclovia_20_halo","source": "Ciclovia_20","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map20.addLayer({"id": "Ciclovia_20","source": "Ciclovia_20","type": "line","paint": {"line-width":3,"line-color": "#84E675"}});
    map20.addLayer({"id": "Poi_cicl_20","source": "Poi_cicl_20","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map20.on('click', 'Poi_cicl_20', (e) => {
        var description_html = e.features[0].properties.POI;
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map20);})
});

//------ MAP22 -------------------------------------------------------------------------------------
var map22 = new maplibregl.Map({
    container: 'map22', // container id
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=VCYuuzDNyJUjbrkQtpSQ', // style URL
    center: [7.92, 45.2], // starting position [lng, lat]
    zoom:7, // starting zoom
    minZoom: 5,
    attributionControl: false,
});
map22.on('load', async () => {
    const poi_icon = await map22.loadImage('../icons/point-of-interest4.png');
    map22.addImage('poi_icon', poi_icon.data);
    map22.addSource("Ciclovia_22", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_22.geojson"});
    map22.addSource("Poi_cicl_22", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/POI_AIDA.geojson"});
    map22.addLayer({"id": "Ciclovia_22_halo","source": "Ciclovia_22","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map22.addLayer({"id": "Ciclovia_22","source": "Ciclovia_22","type": "line","paint": {"line-width":3,"line-color": "#FFB01F"}});
    map22.addLayer({"id": "Poi_cicl_22","source": "Poi_cicl_22","type": "symbol","layout": {"icon-image": "poi_icon", "icon-size": 0.06, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map22.on('click', 'Poi_cicl_22', (e) => {
        var poi_name = e.features[0].properties.POI;
        var img_path = "../images/punti_di_interesse/AIDA/Palazzina di Caccia di Stupinigi_Credits Visit Piemonte, ph Giorgio Gulmini.jpg";
        var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img src="../images/punti_di_interesse/AIDA/Palazzina di Caccia di Stupinigi_Credits Visit Piemonte, ph Giorgio Gulmini.jpg" style="width:200px;"></img><figcaption class="figure-caption">Credits: Visit Piemonte, ph Giorgio Gulmini</figcaption></figure>';
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map22);
    })
    function open_popup22() {
        var poi_name = this.innerText;
        var l = map22.querySourceFeatures('Poi_cicl_22', {sourceLayer: 'Poi_cicl_22', filter: ["==", "POI", poi_name]});
        for (let i=0; i<1; i++) {
            var coord = l[i].geometry.coordinates
            var img_path = "../images/punti_di_interesse/AIDA/Palazzina di Caccia di Stupinigi_Credits Visit Piemonte, ph Giorgio Gulmini.jpg";
            var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img src="../images/punti_di_interesse/AIDA/Palazzina di Caccia di Stupinigi_Credits Visit Piemonte, ph Giorgio Gulmini.jpg" style="width:200px;"></img><figcaption class="figure-caption">Credits: Visit Piemonte, ph Giorgio Gulmini</figcaption></figure>';
            new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map22);
        }
    }
    document.getElementById("poi_22_1").addEventListener("click", open_popup22);
    document.getElementById("poi_22_2").addEventListener("click", open_popup22);
    document.getElementById("poi_22_3").addEventListener("click", open_popup22);
    document.getElementById("poi_22_4").addEventListener("click", open_popup22);
    document.getElementById("poi_22_5").addEventListener("click", open_popup22);
    document.getElementById("poi_22_6").addEventListener("click", open_popup22);
    document.getElementById("poi_22_7").addEventListener("click", open_popup22);
    document.getElementById("poi_22_8").addEventListener("click", open_popup22);
    document.getElementById("poi_22_9").addEventListener("click", open_popup22);
    document.getElementById("poi_22_10").addEventListener("click", open_popup22);
    document.getElementById("poi_22_11").addEventListener("click", open_popup22);
    document.getElementById("poi_22_12").addEventListener("click", open_popup22);

});