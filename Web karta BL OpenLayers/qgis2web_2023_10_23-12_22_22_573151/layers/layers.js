var wms_layers = [];

var format_Brojistrukturastanovnitva_0 = new ol.format.GeoJSON();
var features_Brojistrukturastanovnitva_0 = format_Brojistrukturastanovnitva_0.readFeatures(json_Brojistrukturastanovnitva_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojistrukturastanovnitva_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojistrukturastanovnitva_0.addFeatures(features_Brojistrukturastanovnitva_0);
var lyr_Brojistrukturastanovnitva_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brojistrukturastanovnitva_0, 
                style: style_Brojistrukturastanovnitva_0,
                interactive: true,
    title: 'Broj i struktura stanovništva<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_0.png" /> Sela bez stanovnika<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_1.png" /> 0 - 500<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_3.png" /> 1000 - 2000<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_4.png" /> 2000 - 5000<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_5.png" /> 5000 - 10000<br />\
    <img src="styles/legend/Brojistrukturastanovnitva_0_6.png" /> 10000 - 140000<br />'
        });

lyr_Brojistrukturastanovnitva_0.setVisible(true);
var layersList = [lyr_Brojistrukturastanovnitva_0];
lyr_Brojistrukturastanovnitva_0.set('fieldAliases', {'NM_RS': 'Naseljeno mjesto', 'ID': 'ID', 'st_Naziv': 'st_Naziv', 'st_vrsta': 'st_vrsta', 'st_0-4': 'Stanovništvo 0-4', 'st_5-9': 'Stanovništvo 5-9', 'st_10-14': 'Stanovništvo 10-14', 'st_15-19': 'Stanovništvo 15-19', 'st_20-24': 'Stanovništvo 20-24', 'st_25-29': 'Stanovništvo 25-29', 'st_30-34': 'Stanovništvo 30-34', 'st_35-39': 'Stanovništvo 35-39', 'st_40-44': 'Stanovništvo 40-44', 'st_45-49': 'Stanovništvo 45-49', 'st_50-54': 'Stanovništvo 50-54', 'st_55-59': 'Stanovništvo 55-59', 'st_60-64': 'Stanovništvo 60-64', 'st_65-69': 'Stanovništvo 65-69', 'st_70-74': 'Stanovništvo 70-74', 'st_75-79': 'Stanovništvo 75-79', 'st_80-84': 'Stanovništvo 80-84', 'st_85+': 'Stanovništvo 85+', 'uk_st': 'Ukupno stanovnika', });
lyr_Brojistrukturastanovnitva_0.set('fieldImages', {'NM_RS': 'TextEdit', 'ID': 'Hidden', 'st_Naziv': 'Hidden', 'st_vrsta': 'Hidden', 'st_0-4': 'TextEdit', 'st_5-9': 'TextEdit', 'st_10-14': 'TextEdit', 'st_15-19': 'TextEdit', 'st_20-24': 'TextEdit', 'st_25-29': 'TextEdit', 'st_30-34': 'TextEdit', 'st_35-39': 'TextEdit', 'st_40-44': 'TextEdit', 'st_45-49': 'TextEdit', 'st_50-54': 'TextEdit', 'st_55-59': 'TextEdit', 'st_60-64': 'TextEdit', 'st_65-69': 'TextEdit', 'st_70-74': 'TextEdit', 'st_75-79': 'TextEdit', 'st_80-84': 'TextEdit', 'st_85+': 'TextEdit', 'uk_st': 'TextEdit', });
lyr_Brojistrukturastanovnitva_0.set('fieldLabels', {'NM_RS': 'inline label', 'st_0-4': 'inline label', 'st_5-9': 'inline label', 'st_10-14': 'inline label', 'st_15-19': 'inline label', 'st_20-24': 'inline label', 'st_25-29': 'inline label', 'st_30-34': 'inline label', 'st_35-39': 'inline label', 'st_40-44': 'inline label', 'st_45-49': 'inline label', 'st_50-54': 'inline label', 'st_55-59': 'inline label', 'st_60-64': 'inline label', 'st_65-69': 'inline label', 'st_70-74': 'inline label', 'st_75-79': 'inline label', 'st_80-84': 'inline label', 'st_85+': 'inline label', 'uk_st': 'inline label', });
lyr_Brojistrukturastanovnitva_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});