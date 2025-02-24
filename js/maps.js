
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
    let chiesa_icon = await map1.loadImage('../icons/chiesa_rosso.png');
    map1.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map1.loadImage('../icons/città_rosso.png');
    map1.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map1.loadImage('../icons/monumento_rosso.png');
    map1.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map1.loadImage('../icons/museo_rosso.png');
    map1.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map1.loadImage('../icons/parco_rosso.png');
    map1.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map1.loadImage('../icons/residenze_sabaude_rosso.png');
    map1.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map1.loadImage('../icons/siti_UNESCO_rosso.png');
    map1.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map1.addSource("Ciclovia_1", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_1.geojson"});
    map1.addSource("Poi_cicl_1", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R1-R2 Eurovelo-Vento_POI.geojson"});
    map1.addLayer({"id": "Ciclovia_1_halo","source": "Ciclovia_1","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map1.addLayer({"id": "Ciclovia_1","source": "Ciclovia_1","type": "line","paint": {"line-width":3,"line-color": "#003A52"}});
    map1.addLayer({"id": "Poi_cicl_1","source": "Poi_cicl_1","type": "symbol","layout": {"icon-image":[
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'], 
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map1.on('click', 'Poi_cicl_1', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_EUROVELO-VENTO/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map1);
    })
    function open_popup1() {
        map1.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map1.querySourceFeatures('Poi_cicl_1', {sourceLayer: 'Poi_cicl_1', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_EUROVELO-VENTO/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map1);
    }
    document.getElementById("poi_1_1").addEventListener("click", open_popup1);
    document.getElementById("poi_1_2").addEventListener("click", open_popup1);
    document.getElementById("poi_1_3").addEventListener("click", open_popup1);
    document.getElementById("poi_1_4").addEventListener("click", open_popup1);
    document.getElementById("poi_1_5").addEventListener("click", open_popup1);
    document.getElementById("poi_1_6").addEventListener("click", open_popup1);
    document.getElementById("poi_1_7").addEventListener("click", open_popup1);
    document.getElementById("poi_1_8").addEventListener("click", open_popup1);
    document.getElementById("poi_1_9").addEventListener("click", open_popup1);
    document.getElementById("poi_1_10").addEventListener("click", open_popup1);
    document.getElementById("poi_1_11").addEventListener("click", open_popup1);
    document.getElementById("poi_1_12").addEventListener("click", open_popup1);

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
    let chiesa_icon = await map4.loadImage('../icons/chiesa_rosso.png');
    map4.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map4.loadImage('../icons/città_rosso.png');
    map4.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map4.loadImage('../icons/monumento_rosso.png');
    map4.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map4.loadImage('../icons/museo_rosso.png');
    map4.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map4.loadImage('../icons/parco_rosso.png');
    map4.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map4.loadImage('../icons/residenze_sabaude_rosso.png');
    map4.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map4.loadImage('../icons/siti_UNESCO_rosso.png');
    map4.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map4.addSource("Ciclovia_4", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_4.geojson"});
    map4.addSource("Poi_cicl_4", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R4 Via del mare_POI.geojson"});
    map4.addLayer({"id": "Ciclovia_4_halo","source": "Ciclovia_4","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map4.addLayer({"id": "Ciclovia_4","source": "Ciclovia_4","type": "line","paint": {"line-width":3,"line-color": "#00778F"}});
    map4.addLayer({"id": "Poi_cicl_4","source": "Poi_cicl_4","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map4.on('click', 'Poi_cicl_4', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_VIA DEL MARE/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map4);
    })
    function open_popup4() {
        map4.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map4.querySourceFeatures('Poi_cicl_4', {sourceLayer: 'Poi_cicl_4', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_VIA DEL MARE/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map4);
    }
    document.getElementById("poi_4_1").addEventListener("click", open_popup4);
    document.getElementById("poi_4_2").addEventListener("click", open_popup4);
    document.getElementById("poi_4_3").addEventListener("click", open_popup4);
    document.getElementById("poi_4_4").addEventListener("click", open_popup4);
    document.getElementById("poi_4_5").addEventListener("click", open_popup4);
    document.getElementById("poi_4_6").addEventListener("click", open_popup4);
    document.getElementById("poi_4_7").addEventListener("click", open_popup4);
    document.getElementById("poi_4_8").addEventListener("click", open_popup4);
    document.getElementById("poi_4_9").addEventListener("click", open_popup4);
    document.getElementById("poi_4_10").addEventListener("click", open_popup4);
    document.getElementById("poi_4_11").addEventListener("click", open_popup4);
    document.getElementById("poi_4_12").addEventListener("click", open_popup4);
    document.getElementById("poi_4_13").addEventListener("click", open_popup4);
    document.getElementById("poi_4_14").addEventListener("click", open_popup4);
    document.getElementById("poi_4_15").addEventListener("click", open_popup4);
    document.getElementById("poi_4_16").addEventListener("click", open_popup4);
    document.getElementById("poi_4_17").addEventListener("click", open_popup4);

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
    let chiesa_icon = await map5.loadImage('../icons/chiesa_rosso.png');
    map5.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map5.loadImage('../icons/città_rosso.png');
    map5.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map5.loadImage('../icons/monumento_rosso.png');
    map5.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map5.loadImage('../icons/museo_rosso.png');
    map5.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map5.loadImage('../icons/parco_rosso.png');
    map5.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map5.loadImage('../icons/residenze_sabaude_rosso.png');
    map5.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map5.loadImage('../icons/siti_UNESCO_rosso.png');
    map5.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map5.addSource("Ciclovia_5", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_5.geojson"});
    map5.addSource("Poi_cicl_5", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R5 Via Francigena della Valle d'Aosta_POI.geojson"});
    map5.addLayer({"id": "Ciclovia_5_halo","source": "Ciclovia_5","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map5.addLayer({"id": "Ciclovia_5","source": "Ciclovia_5","type": "line","paint": {"line-width":3,"line-color": "#006F1C"}});
    map5.addLayer({"id": "Poi_cicl_5","source": "Poi_cicl_5","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map5.on('click', 'Poi_cicl_5', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_VIA FRANCIGENA VALLE DAOSTA/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map5);
    })
    function open_popup5() {
        map5.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map5.querySourceFeatures('Poi_cicl_5', {sourceLayer: 'Poi_cicl_5', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_VIA FRANCIGENA VALLE DAOSTA/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map5);
    }
    document.getElementById("poi_5_1").addEventListener("click", open_popup5);
    document.getElementById("poi_5_2").addEventListener("click", open_popup5);
    document.getElementById("poi_5_3").addEventListener("click", open_popup5);
    document.getElementById("poi_5_4").addEventListener("click", open_popup5);
    document.getElementById("poi_5_5").addEventListener("click", open_popup5);
    document.getElementById("poi_5_6").addEventListener("click", open_popup5);
    document.getElementById("poi_5_7").addEventListener("click", open_popup5);
    document.getElementById("poi_5_8").addEventListener("click", open_popup5);

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
    let chiesa_icon = await map6.loadImage('../icons/chiesa_rosso.png');
    map6.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map6.loadImage('../icons/città_rosso.png');
    map6.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map6.loadImage('../icons/monumento_rosso.png');
    map6.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map6.loadImage('../icons/museo_rosso.png');
    map6.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map6.loadImage('../icons/parco_rosso.png');
    map6.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map6.loadImage('../icons/residenze_sabaude_rosso.png');
    map6.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map6.loadImage('../icons/siti_UNESCO_rosso.png');
    map6.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map6.addSource("Ciclovia_6", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_6.geojson"});
    map6.addSource("Poi_cicl_6", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R6 Via Francigena della Valle di Susa_POI.geojson"});
    map6.addLayer({"id": "Ciclovia_6_halo","source": "Ciclovia_6","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map6.addLayer({"id": "Ciclovia_6","source": "Ciclovia_6","type": "line","paint": {"line-width":3,"line-color": "#666666"}});
    map6.addLayer({"id": "Poi_cicl_6","source": "Poi_cicl_6","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map6.on('click', 'Poi_cicl_6', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_VIA FRANCIGENA VALLE DI SUSA/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map6);
    })
    function open_popup6() {
        map6.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map6.querySourceFeatures('Poi_cicl_6', {sourceLayer: 'Poi_cicl_6', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_VIA FRANCIGENA VALLE DI SUSA/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map6);
    }
    document.getElementById("poi_6_1").addEventListener("click", open_popup6);
    document.getElementById("poi_6_2").addEventListener("click", open_popup6);
    document.getElementById("poi_6_3").addEventListener("click", open_popup6);
    document.getElementById("poi_6_4").addEventListener("click", open_popup6);
    document.getElementById("poi_6_5").addEventListener("click", open_popup6);
    document.getElementById("poi_6_6").addEventListener("click", open_popup6);
    document.getElementById("poi_6_7").addEventListener("click", open_popup6);
    document.getElementById("poi_6_8").addEventListener("click", open_popup6);
    document.getElementById("poi_6_9").addEventListener("click", open_popup6);
    document.getElementById("poi_6_10").addEventListener("click", open_popup6);
    document.getElementById("poi_6_11").addEventListener("click", open_popup6);
    document.getElementById("poi_6_12").addEventListener("click", open_popup6);
    document.getElementById("poi_6_13").addEventListener("click", open_popup6);
    document.getElementById("poi_6_14").addEventListener("click", open_popup6);
    document.getElementById("poi_6_15").addEventListener("click", open_popup6);
    document.getElementById("poi_6_16").addEventListener("click", open_popup6);
    document.getElementById("poi_6_17").addEventListener("click", open_popup6);
    document.getElementById("poi_6_18").addEventListener("click", open_popup6);
    document.getElementById("poi_6_19").addEventListener("click", open_popup6);

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
    let chiesa_icon = await map7.loadImage('../icons/chiesa_rosso.png');
    map7.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map7.loadImage('../icons/città_rosso.png');
    map7.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map7.loadImage('../icons/monumento_rosso.png');
    map7.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map7.loadImage('../icons/museo_rosso.png');
    map7.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map7.loadImage('../icons/parco_rosso.png');
    map7.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map7.loadImage('../icons/residenze_sabaude_rosso.png');
    map7.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map7.loadImage('../icons/siti_UNESCO_rosso.png');
    map7.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map7.addSource("Ciclovia_7", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_7.geojson"});
    map7.addSource("Poi_cicl_7", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R7 Via del Ticino e del Lago Maggiore_POI.geojson"});
    map7.addLayer({"id": "Ciclovia_7_halo","source": "Ciclovia_7","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map7.addLayer({"id": "Ciclovia_7","source": "Ciclovia_7","type": "line","paint": {"line-width":3,"line-color": "#541877"}});
    map7.addLayer({"id": "Poi_cicl_7","source": "Poi_cicl_7","type": "symbol","layout": {"icon-image":
        [
            'case',
            ['==', ['get', 'Category'], "Citta"],'citta_icon',
            ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
            ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
            ['==', ['get', 'Category'], 'Musei'],'museo_icon',
            ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
            ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
            ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
            'citta_icon'],
            "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map7.on('click', 'Poi_cicl_7', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_VIA DEL TICINO e LAGO MAGGIORE/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map7);
    })
    function open_popup7() {
        map7.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map7.querySourceFeatures('Poi_cicl_7', {sourceLayer: 'Poi_cicl_7', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_VIA DEL TICINO e LAGO MAGGIORE/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map7);
    }
    document.getElementById("poi_7_1").addEventListener("click", open_popup7);
    document.getElementById("poi_7_2").addEventListener("click", open_popup7);
    document.getElementById("poi_7_3").addEventListener("click", open_popup7);
    document.getElementById("poi_7_4").addEventListener("click", open_popup7);
    document.getElementById("poi_7_5").addEventListener("click", open_popup7);
    document.getElementById("poi_7_6").addEventListener("click", open_popup7);
    document.getElementById("poi_7_7").addEventListener("click", open_popup7);
    document.getElementById("poi_7_8").addEventListener("click", open_popup7);
    document.getElementById("poi_7_9").addEventListener("click", open_popup7);

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
    let chiesa_icon = await map8.loadImage('../icons/chiesa_rosso.png');
    map8.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map8.loadImage('../icons/città_rosso.png');
    map8.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map8.loadImage('../icons/monumento_rosso.png');
    map8.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map8.loadImage('../icons/museo_rosso.png');
    map8.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map8.loadImage('../icons/parco_rosso.png');
    map8.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map8.loadImage('../icons/residenze_sabaude_rosso.png');
    map8.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map8.loadImage('../icons/siti_UNESCO_rosso.png');
    map8.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map8.addSource("Ciclovia_8", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_8.geojson"});
    map8.addSource("Poi_cicl_8", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R8 Via Provenzale_POI.geojson"});
    map8.addLayer({"id": "Ciclovia_8_halo","source": "Ciclovia_8","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map8.addLayer({"id": "Ciclovia_8","source": "Ciclovia_8","type": "line","paint": {"line-width":3,"line-color": "#F39991"}});
    map8.addLayer({"id": "Poi_cicl_8","source": "Poi_cicl_8","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map8.on('click', 'Poi_cicl_8', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_VIA PROVENZALE/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map8);
    })
    function open_popup8() {
        map8.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map8.querySourceFeatures('Poi_cicl_8', {sourceLayer: 'Poi_cicl_8', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_VIA PROVENZALE/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map8);
    }
    document.getElementById("poi_8_1").addEventListener("click", open_popup8);
    document.getElementById("poi_8_2").addEventListener("click", open_popup8);
    document.getElementById("poi_8_3").addEventListener("click", open_popup8);
    document.getElementById("poi_8_4").addEventListener("click", open_popup8);
    document.getElementById("poi_8_5").addEventListener("click", open_popup8);
    document.getElementById("poi_8_6").addEventListener("click", open_popup8);
    document.getElementById("poi_8_7").addEventListener("click", open_popup8);
    document.getElementById("poi_8_8").addEventListener("click", open_popup8);

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
    let chiesa_icon = await map10.loadImage('../icons/chiesa_rosso.png');
    map10.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map10.loadImage('../icons/città_rosso.png');
    map10.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map10.loadImage('../icons/monumento_rosso.png');
    map10.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map10.loadImage('../icons/museo_rosso.png');
    map10.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map10.loadImage('../icons/parco_rosso.png');
    map10.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map10.loadImage('../icons/residenze_sabaude_rosso.png');
    map10.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map10.loadImage('../icons/siti_UNESCO_rosso.png');
    map10.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map10.addSource("Ciclovia_10", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_10.geojson"});
    map10.addSource("Poi_cicl_10", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R10 Pedemontana_POI.geojson"});
    map10.addLayer({"id": "Ciclovia_10_halo","source": "Ciclovia_10","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map10.addLayer({"id": "Ciclovia_10","source": "Ciclovia_10","type": "line","paint": {"line-width":3,"line-color": "#F14F04"}});
    map10.addLayer({"id": "Poi_cicl_10","source": "Poi_cicl_10","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map10.on('click', 'Poi_cicl_10', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_PEDEMONTANA/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map10);
    })
    function open_popup10() {
        map10.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map10.querySourceFeatures('Poi_cicl_10', {sourceLayer: 'Poi_cicl_10', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_PEDEMONTANA/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map10);
    }
    document.getElementById("poi_10_1").addEventListener("click", open_popup10);
    document.getElementById("poi_10_2").addEventListener("click", open_popup10);
    document.getElementById("poi_10_3").addEventListener("click", open_popup10);
    document.getElementById("poi_10_4").addEventListener("click", open_popup10);
    document.getElementById("poi_10_5").addEventListener("click", open_popup10);
    document.getElementById("poi_10_6").addEventListener("click", open_popup10);
    document.getElementById("poi_10_7").addEventListener("click", open_popup10);
    document.getElementById("poi_10_8").addEventListener("click", open_popup10);
    document.getElementById("poi_10_9").addEventListener("click", open_popup10);
    document.getElementById("poi_10_10").addEventListener("click", open_popup10);
    document.getElementById("poi_10_11").addEventListener("click", open_popup10);
    document.getElementById("poi_10_12").addEventListener("click", open_popup10);
    document.getElementById("poi_10_13").addEventListener("click", open_popup10);

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
    let chiesa_icon = await map15.loadImage('../icons/chiesa_rosso.png');
    map15.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map15.loadImage('../icons/città_rosso.png');
    map15.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map15.loadImage('../icons/monumento_rosso.png');
    map15.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map15.loadImage('../icons/museo_rosso.png');
    map15.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map15.loadImage('../icons/parco_rosso.png');
    map15.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map15.loadImage('../icons/residenze_sabaude_rosso.png');
    map15.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map15.loadImage('../icons/siti_UNESCO_rosso.png');
    map15.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map15.addSource("Ciclovia_15", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_15.geojson"});
    map15.addSource("Poi_cicl_15", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R15 Corona di Delizie_POI.geojson"});
    map15.addLayer({"id": "Ciclovia_15_halo","source": "Ciclovia_15","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map15.addLayer({"id": "Ciclovia_15","source": "Ciclovia_15","type": "line","paint": {"line-width":3,"line-color": "#CB1901"}});
    map15.addLayer({"id": "Poi_cicl_15","source": "Poi_cicl_15","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map15.on('click', 'Poi_cicl_15', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_CORONA DI DELIZIE/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map15);
    })
    function open_popup15() {
        map15.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map15.querySourceFeatures('Poi_cicl_15', {sourceLayer: 'Poi_cicl_15', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_CORONA DI DELIZIE/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map15);
    }
    document.getElementById("poi_15_1").addEventListener("click", open_popup15);
    document.getElementById("poi_15_2").addEventListener("click", open_popup15);
    document.getElementById("poi_15_3").addEventListener("click", open_popup15);
    document.getElementById("poi_15_4").addEventListener("click", open_popup15);
    document.getElementById("poi_15_5").addEventListener("click", open_popup15);
    document.getElementById("poi_15_6").addEventListener("click", open_popup15);
    document.getElementById("poi_15_7").addEventListener("click", open_popup15);
    document.getElementById("poi_15_8").addEventListener("click", open_popup15);
    document.getElementById("poi_15_9").addEventListener("click", open_popup15);
    document.getElementById("poi_15_10").addEventListener("click", open_popup15);
    document.getElementById("poi_15_11").addEventListener("click", open_popup15);
    document.getElementById("poi_15_12").addEventListener("click", open_popup15);
    document.getElementById("poi_15_13").addEventListener("click", open_popup15);
    document.getElementById("poi_15_14").addEventListener("click", open_popup15);

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
    let chiesa_icon = await map16.loadImage('../icons/chiesa_rosso.png');
    map16.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map16.loadImage('../icons/città_rosso.png');
    map16.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map16.loadImage('../icons/monumento_rosso.png');
    map16.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map16.loadImage('../icons/museo_rosso.png');
    map16.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map16.loadImage('../icons/parco_rosso.png');
    map16.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map16.loadImage('../icons/residenze_sabaude_rosso.png');
    map16.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map16.loadImage('../icons/siti_UNESCO_rosso.png');
    map16.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map16.addSource("Ciclovia_16", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_16.geojson"});
    map16.addSource("Poi_cicl_16", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R16 BartoBar_POI.geojson"});
    map16.addLayer({"id": "Ciclovia_16_halo","source": "Ciclovia_16","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map16.addLayer({"id": "Ciclovia_16","source": "Ciclovia_16","type": "line","paint": {"line-width":3,"line-color": "#9B2226"}});
    map16.addLayer({"id": "Poi_cicl_16","source": "Poi_cicl_16","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map16.on('click', 'Poi_cicl_16', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_BAR2BAR/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map16);
    })
    function open_popup16() {
        map16.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map16.querySourceFeatures('Poi_cicl_16', {sourceLayer: 'Poi_cicl_16', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_BAR2BAR/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map16);
    }
    document.getElementById("poi_16_1").addEventListener("click", open_popup16);
    document.getElementById("poi_16_2").addEventListener("click", open_popup16);
    document.getElementById("poi_16_3").addEventListener("click", open_popup16);
    document.getElementById("poi_16_4").addEventListener("click", open_popup16);
    document.getElementById("poi_16_5").addEventListener("click", open_popup16);
    document.getElementById("poi_16_6").addEventListener("click", open_popup16);

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
    let chiesa_icon = await map19.loadImage('../icons/chiesa_rosso.png');
    map19.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map19.loadImage('../icons/città_rosso.png');
    map19.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map19.loadImage('../icons/monumento_rosso.png');
    map19.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map19.loadImage('../icons/museo_rosso.png');
    map19.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map19.loadImage('../icons/parco_rosso.png');
    map19.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map19.loadImage('../icons/residenze_sabaude_rosso.png');
    map19.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map19.loadImage('../icons/siti_UNESCO_rosso.png');
    map19.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map19.addSource("Ciclovia_19", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_19.geojson"});
    map19.addSource("Poi_cicl_19", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R19 Terre di Coppi_POI.geojson"});
    map19.addLayer({"id": "Ciclovia_19_halo","source": "Ciclovia_19","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map19.addLayer({"id": "Ciclovia_19","source": "Ciclovia_19","type": "line","paint": {"line-width":3,"line-color": "#99600B"}});
    map19.addLayer({"id": "Poi_cicl_19","source": "Poi_cicl_19","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map19.on('click', 'Poi_cicl_19', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_TERRE DI COPPI/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map19);
    })
    function open_popup19() {
        map19.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map19.querySourceFeatures('Poi_cicl_19', {sourceLayer: 'Poi_cicl_19', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_TERRE DI COPPI/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map19);
    }
    document.getElementById("poi_19_1").addEventListener("click", open_popup19);
    document.getElementById("poi_19_2").addEventListener("click", open_popup19);
    document.getElementById("poi_19_3").addEventListener("click", open_popup19);

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
    let chiesa_icon = await map20.loadImage('../icons/chiesa_rosso.png');
    map20.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map20.loadImage('../icons/città_rosso.png');
    map20.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map20.loadImage('../icons/monumento_rosso.png');
    map20.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map20.loadImage('../icons/museo_rosso.png');
    map20.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map20.loadImage('../icons/parco_rosso.png');
    map20.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map20.loadImage('../icons/residenze_sabaude_rosso.png');
    map20.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map20.loadImage('../icons/siti_UNESCO_rosso.png');
    map20.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map20.addSource("Ciclovia_20", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_20.geojson"});
    map20.addSource("Poi_cicl_20", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R20 Tracce dei ghiacciai_POI.geojson"});
    map20.addLayer({"id": "Ciclovia_20_halo","source": "Ciclovia_20","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map20.addLayer({"id": "Ciclovia_20","source": "Ciclovia_20","type": "line","paint": {"line-width":3,"line-color": "#84E675"}});
    map20.addLayer({"id": "Poi_cicl_20","source": "Poi_cicl_20","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map20.on('click', 'Poi_cicl_20', (e) => {
        let poi_name = e.features[0].properties.POI;
        let img_path = '../images/punti_di_interesse/POI_TRACCE DEI GHIACCIAI/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map20);
    })
    function open_popup20() {
        map20.fire("click", {lngLat: [10, 80]});
        let poi_name = this.innerText;
        let l = map20.querySourceFeatures('Poi_cicl_20', {sourceLayer: 'Poi_cicl_20', filter: ["==", "POI", poi_name]});
        let coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_TRACCE DEI GHIACCIAI/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map20);
    }
    document.getElementById("poi_20_1").addEventListener("click", open_popup20);
    document.getElementById("poi_20_2").addEventListener("click", open_popup20);
    document.getElementById("poi_20_3").addEventListener("click", open_popup20);
    document.getElementById("poi_20_4").addEventListener("click", open_popup20);
    document.getElementById("poi_20_5").addEventListener("click", open_popup20);
    document.getElementById("poi_20_6").addEventListener("click", open_popup20);
    document.getElementById("poi_20_7").addEventListener("click", open_popup20);

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
    let chiesa_icon = await map22.loadImage('../icons/chiesa_rosso.png');
    map22.addImage('chiesa_icon', chiesa_icon.data);
    let citta_icon = await map22.loadImage('../icons/città_rosso.png');
    map22.addImage('citta_icon', citta_icon.data);
    let monumento_icon = await map22.loadImage('../icons/monumento_rosso.png');
    map22.addImage('monumento_icon', monumento_icon.data);
    let museo_icon = await map22.loadImage('../icons/museo_rosso.png');
    map22.addImage('museo_icon', museo_icon.data);
    let parco_icon = await map22.loadImage('../icons/parco_rosso.png');
    map22.addImage('parco_icon', parco_icon.data);
    let residenze_sabaude_icon = await map22.loadImage('../icons/residenze_sabaude_rosso.png');
    map22.addImage('residenze_sabaude_icon', residenze_sabaude_icon.data);
    let siti_UNESCO_icon = await map22.loadImage('../icons/siti_UNESCO_rosso.png');
    map22.addImage('siti_UNESCO_icon', siti_UNESCO_icon.data);
    map22.addSource("Ciclovia_22", {"type": "geojson", "data": "../data/geojson/piste_ciclabili_singole/merged/Ciclovia_22.geojson"});
    map22.addSource("Poi_cicl_22", {"type": "geojson", "data": "../data/geojson/punti_dinteresse/R22 AIDA_POI.geojson"});
    map22.addLayer({"id": "Ciclovia_22_halo","source": "Ciclovia_22","type": "line","paint": {"line-width":2,"line-color": "#FFFFFF","line-gap-width": 0.5}});
    map22.addLayer({"id": "Ciclovia_22","source": "Ciclovia_22","type": "line","paint": {"line-width":3,"line-color": "#FFB01F"}});
    map22.addLayer({"id": "Poi_cicl_22","source": "Poi_cicl_22","type": "symbol","layout": {"icon-image": [
        'case',
        ['==', ['get', 'Category'], "Citta"],'citta_icon',
        ['==', ['get', 'Category'], 'Chiesa'],'chiesa_icon',
        ['==', ['get', 'Category'], 'Monumenti'],'monumento_icon',
        ['==', ['get', 'Category'], 'Musei'],'museo_icon',
        ['==', ['get', 'Category'], 'Parchi'],'parco_icon',
        ['==', ['get', 'Category'], 'Residenze Sabaude'],'residenze_sabaude_icon',
        ['==', ['get', 'Category'], 'Unesco'],'siti_UNESCO_icon',
        'citta_icon'],
        "icon-size": 0.04, 'icon-anchor': 'bottom', 'icon-overlap': 'always',}});
    map22.on('click', 'Poi_cicl_22', (e) => {
        var poi_name = e.features[0].properties.POI;
        var img_path = '../images/punti_di_interesse/POI_AIDA/'+ e.features[0].properties.POI + '.jpg';
        let credits = e.features[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(e.lngLat).setHTML(description_html).addTo(map22);
    })
    function open_popup22() {
        map22.fire("click", {lngLat: [10, 80]});
        var poi_name = this.innerText;
        var l = map22.querySourceFeatures('Poi_cicl_22', {sourceLayer: 'Poi_cicl_22', filter: ["==", "POI", poi_name]});
        var coord = l[0].geometry.coordinates
        let img_path = '../images/punti_di_interesse/POI_AIDA/'+ l[0].properties.POI + '.jpg';
        let credits = l[0].properties.Credits
        if (credits == 'null'){var description_html = '<p class="fw-bold">'+poi_name+'</p>';}
        if (credits != 'null'){var description_html = '<figure class="figure"><p class="fw-bold">'+poi_name+'</p><img class=img-fluid src="'+img_path+'" style="width:200px;"></img><figcaption class="figure-caption">'+credits+'</figcaption></figure>';}
        new maplibregl.Popup().setLngLat(coord).setHTML(description_html).addTo(map22);
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