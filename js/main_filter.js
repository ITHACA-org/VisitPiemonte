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

    map.addSource('ciclabili_VENTO', {
        'type': 'geojson',
        'data': './geojson/piste_ciclabili_wgs84_VENTO.geojson'
    });
    map.addSource('ciclabili', {
        'type': 'geojson',
        'data': './geojson/piste_ciclabili_wgs84.geojson'
    });

    map.addLayer({
        'id': 'ciclabili_VENTO',
        'source': 'ciclabili_VENTO',
        'type': 'line',
        'paint': {
            'line-width': [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    10,
                    6
            ],
            'line-color': "#e31a1c",
        }
    });

    map.addLayer({
        'id': 'ciclabili',
        'source': 'ciclabili',
        'type': 'line',
        'paint': {
            'line-width': [
                "case",
                ["==", ["get", "RPR"], "RETI PRIORITARIE REGIONALI"], 1,
                ["==", ["get", "L1"], "LINEA 1 - TORINO RIVOLI AVIGLIANA"], 1,
                ["==", ["get", "L2"], "LINEA 2 - TORINO BEINASCO ORBASSANO"], 1,
                ["==", ["get", "L3"], "LINEA 3 - TORINO CHIVASSO"], 1,
                ["==", ["get", "L4"], "LINEA 4 - TORINO CASELLE LANZO"], 1,
                ["==", ["get", "L5"], "LINEA 5 - TORINO CHIERI"], 1,
                ["==", ["get", "CM"], "CIRCOLARE METROPOLITANA"], 1,
                /* other */ 
                ['boolean', ['feature-state', 'hover'], false], 6, 3
            ],
            'line-color': [
                "case",
                //CICLOVIE
                //["==", ["get", "Ciclovia_2"], "VEN.TO"], "#e31a1c",
                ["==", ["get", "Ciclovia_3"], "CANALE CAVOUR"], "#4695ca",
                ["==", ["get", "Ciclovia_5"], "VIA FRANCIGENA VALLE D'AOSTA"], "#e31a1c",
                ["==", ["get", "Ciclovia_6"], "VIA FRANCIGENA VALLE DI SUSA"], "#07d6e3",
                ["==", ["get", "Ciclovia_7"], "VIA DEL TICINO E DEL LAGO MAGGIORE"], "#b2df8a",
                ["==", ["get", "Ciclovia_8"], "VIA PROVENZALE"], "#b60f75",
                ["==", ["get", "Ciclovia_9"], "VIA DEL MONVISO LUNGO IL PO"], "#2c8725",
                ["==", ["get", "Ciclovia_11"], "VIA GRANDA - RACCONIGI SALUZZO"], "#a6cee3",
                ["==", ["get", "Ciclovia_12"], "VIA GRANDA - SALUZZO FOSSANO"], "#aed9ee",
                ["==", ["get", "Ciclovia_13"], "VIA DELLA VAL VARAITA"], "#3bb833",
                ["==", ["get", "Ciclovia_15"], "CORONA DI DELIZIE"], "#3bed33",
                ["==", ["get", "Ciclovia_17"], "2 RUOTE 2 REGGE"], "#b60f75",
                ["==", ["get", "Ciclovia_18"], "ALESSANDRIA - ACQUI - ALBA"], "#c7a24c",
                ["==", ["get", "Ciclovia_16"], "BAR 2 BAR"], "#950f11",
                ["==", ["get", "Ciclovia_10"], "VIA PEDEMONTANA"], "#2217ee",
                ["==", ["get", "Ciclovia_4"], "VIA DEL MARE"], "#33a02c",
                ["==", ["get", "Ciclovia_14"], "VIA LAN.PO"], "#ad9311",
                ["==", ["get", "Ciclovia_19"], "TERRE DI COPPI"], "#000000",
                ["==", ["get", "Ciclovia_20"], "TRACCE DEI GHIACCIAI"], "#b19043",
                ["==", ["get", "Ciclovia_21"], "LIMONE - MONESI"], "#000000",
                ["==", ["get", "Ciclovia_22"], "AIDA"], "#6d6d6d",
                ["==", ["get", "Ciclovia_23"], "VE.LA."], "#487bb6",
                ["==", ["get", "Ciclovia_24"], "DELL'ORCO"], "#487bb6",
                ["==", ["get", "Ciclovia_25"], "DORA BALTEA"], "#487bb6",
                ["==", ["get", "Ciclovia_26"], "DELLA SESIA"], "#487bb6",
                ["==", ["get", "Ciclovia_27"], "CARMAGNOLA - BRA"], "#487bb6",
                ["==", ["get", "Ciclovia_28"], "ALBA - ALESSANDRIA"], "#487bb6",
                ["==", ["get", "Ciclovia_1"], "EUROVELO 8"], "#d7191c",

                //PENDOLARE
                ["==", ["get", "RPR"], "RETI PRIORITARIE REGIONALI"], "#d7191c",
                ["==", ["get", "L1"], "LINEA 1 - TORINO RIVOLI AVIGLIANA"], "#e31a1c",
                ["==", ["get", "L2"], "LINEA 2 - TORINO BEINASCO ORBASSANO"], "#e31a1c",
                ["==", ["get", "L3"], "LINEA 3 - TORINO CHIVASSO"], "#e31a1c",
                ["==", ["get", "L4"], "LINEA 4 - TORINO CASELLE LANZO"], "#e31a1c",
                ["==", ["get", "L5"], "LINEA 5 - TORINO CHIERI"], "#e31a1c",
                ["==", ["get", "CM"], "CIRCOLARE METROPOLITANA"], "#e31a1c",

                /* other */ '#ccc'
            ],
        }
    });

//---------CREATE SELECTION--------------------------------------------
    //selection su layer con tutte
    map.on('mousemove', 'ciclabili', (e) => {
        if (e.features.length > 0) {
            if (hoveredStateId) {
                map.setFeatureState(
                    {source: 'ciclabili', id: hoveredStateId},
                    {hover: false}
                );
            }
            console.log(e.features[0].properties.fid);
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                {source: 'ciclabili', id: hoveredStateId},
                {hover: true}
            );
        }
    });
    map.on('mouseleave', 'ciclabili', () => {
        if (hoveredStateId) {
            map.setFeatureState(
                {source: 'ciclabili', id: hoveredStateId},
                {hover: false}
            );
        }
        hoveredStateId = null;
    });
    hoveredStateId = null;
    //selection su layer con solo VENTO
    map.on('mousemove', 'ciclabili_VENTO', (e) => {
        if (e.features.length > 0) {
            if (hoveredStateId) {
                map.setFeatureState(
                    {source: 'ciclabili_VENTO', id: hoveredStateId},
                    {hover: false}
                );
            }
            console.log(e.features[0].properties.fid);
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                {source: 'ciclabili_VENTO', id: hoveredStateId},
                {hover: true}
            );
        }
    });
    map.on('mouseleave', 'ciclabili_VENTO', () => {
        if (hoveredStateId) {
            map.setFeatureState(
                {source: 'ciclabili_VENTO', id: hoveredStateId},
                {hover: false}
            );
        }
        hoveredStateId = null;
    });

})