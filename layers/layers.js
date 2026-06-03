ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([628340.180406, 5605957.509917, 632473.330745, 5622301.126109]);
var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var format_parcelles_2 = new ol.format.GeoJSON();
var features_parcelles_2 = format_parcelles_2.readFeatures(json_parcelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelles_2.addFeatures(features_parcelles_2);
var lyr_parcelles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelles_2, 
                style: style_parcelles_2,
                popuplayertitle: 'parcelles',
                interactive: true,
    title: 'parcelles<br />\
    <img src="styles/legend/parcelles_2_0.png" /> Lot 1 Ridas<br />\
    <img src="styles/legend/parcelles_2_1.png" /> Lot 2 Bettons<br />\
    <img src="styles/legend/parcelles_2_2.png" /> Lot 3 Bois_Treffort<br />\
    <img src="styles/legend/parcelles_2_3.png" /> Lot 4 Parcelles Avignonet<br />\
    <img src="styles/legend/parcelles_2_4.png" /> Lot 5 Parcelle Sinard C110<br />\
    <img src="styles/legend/parcelles_2_5.png" /> Lot 6 Parcelle Sinard D18<br />\
    <img src="styles/legend/parcelles_2_6.png" /> Lot 7 Parcelles SMDLC<br />\
    <img src="styles/legend/parcelles_2_7.png" /> <br />' });

lyr_OSMOpenTopoMap_0.setVisible(false);lyr_Ortho20cm_1.setVisible(true);lyr_parcelles_2.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_Ortho20cm_1,lyr_parcelles_2];
lyr_parcelles_2.set('fieldAliases', {'geo_parcel': 'geo_parcel', 'idu': 'idu', 'nomcommune': 'nomcommune', 'contenance': 'contenance', 'subdfisc': 'subdfisc', 'Numero': 'Numero', 'lot': 'lot', });
lyr_parcelles_2.set('fieldImages', {'geo_parcel': 'TextEdit', 'idu': 'TextEdit', 'nomcommune': 'TextEdit', 'contenance': 'TextEdit', 'subdfisc': 'TextEdit', 'Numero': 'TextEdit', 'lot': 'TextEdit', });
lyr_parcelles_2.set('fieldLabels', {'geo_parcel': 'hidden field', 'idu': 'hidden field', 'nomcommune': 'header label - visible with data', 'contenance': 'header label - visible with data', 'subdfisc': 'header label - visible with data', 'Numero': 'header label - visible with data', 'lot': 'header label - visible with data', });
lyr_parcelles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});