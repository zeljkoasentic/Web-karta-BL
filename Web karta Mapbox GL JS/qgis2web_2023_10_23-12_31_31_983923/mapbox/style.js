
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Brojistrukturastanovnitva_0": {
            "type": "geojson",
            "data": json_Brojistrukturastanovnitva_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Brojistrukturastanovnitva_0_0",
            "type": "fill",
            "source": "Brojistrukturastanovnitva_0",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'uk_st'], 0.0], ['<=', ['get', 'uk_st'], 0.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 0.0], ['<=', ['get', 'uk_st'], 500.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 500.0], ['<=', ['get', 'uk_st'], 1000.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 1000.0], ['<=', ['get', 'uk_st'], 2000.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 2000.0], ['<=', ['get', 'uk_st'], 5000.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 5000.0], ['<=', ['get', 'uk_st'], 10000.0]], 1.0, ['all', ['>', ['get', 'uk_st'], 10000.0], ['<=', ['get', 'uk_st'], 140000.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'uk_st'], 0.0], ['<=', ['get', 'uk_st'], 0.0]], '#d5d2c8', ['all', ['>', ['get', 'uk_st'], 0.0], ['<=', ['get', 'uk_st'], 500.0]], '#2c7bb6', ['all', ['>', ['get', 'uk_st'], 500.0], ['<=', ['get', 'uk_st'], 1000.0]], '#92c6df', ['all', ['>', ['get', 'uk_st'], 1000.0], ['<=', ['get', 'uk_st'], 2000.0]], '#ddf0d0', ['all', ['>', ['get', 'uk_st'], 2000.0], ['<=', ['get', 'uk_st'], 5000.0]], '#fedf99', ['all', ['>', ['get', 'uk_st'], 5000.0], ['<=', ['get', 'uk_st'], 10000.0]], '#f59053', ['all', ['>', ['get', 'uk_st'], 10000.0], ['<=', ['get', 'uk_st'], 140000.0]], '#d7191c', '#ffffff']}
        }
],
}