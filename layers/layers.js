ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([393537.025856, 6454169.407414, 398094.844050, 6456344.629456]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LocalidadesdoRioGrande_2 = new ol.format.GeoJSON();
var features_LocalidadesdoRioGrande_2 = format_LocalidadesdoRioGrande_2.readFeatures(json_LocalidadesdoRioGrande_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LocalidadesdoRioGrande_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesdoRioGrande_2.addFeatures(features_LocalidadesdoRioGrande_2);
var lyr_LocalidadesdoRioGrande_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesdoRioGrande_2, 
                style: style_LocalidadesdoRioGrande_2,
                popuplayertitle: 'Localidades do Rio Grande',
                interactive: false,
                title: '<img src="styles/legend/LocalidadesdoRioGrande_2.png" /> Localidades do Rio Grande'
            });
var format_Servios_3 = new ol.format.GeoJSON();
var features_Servios_3 = format_Servios_3.readFeatures(json_Servios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Servios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servios_3.addFeatures(features_Servios_3);
var lyr_Servios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servios_3, 
                style: style_Servios_3,
                popuplayertitle: 'Serviços',
                interactive: true,
    title: 'Serviços<br />\
    <img src="styles/legend/Servios_3_0.png" /> Antiquário<br />\
    <img src="styles/legend/Servios_3_1.png" /> Brechó<br />\
    <img src="styles/legend/Servios_3_2.png" /> Costura<br />\
    <img src="styles/legend/Servios_3_3.png" /> Eletricista<br />\
    <img src="styles/legend/Servios_3_4.png" /> Ferragem<br />\
    <img src="styles/legend/Servios_3_5.png" /> Hospedagem<br />\
    <img src="styles/legend/Servios_3_6.png" /> Imobiliária<br />\
    <img src="styles/legend/Servios_3_7.png" /> Locação de Equipamentos<br />\
    <img src="styles/legend/Servios_3_8.png" /> Loja de Tecidos<br />\
    <img src="styles/legend/Servios_3_9.png" /> Marcenaria<br />\
    <img src="styles/legend/Servios_3_10.png" /> Sebo<br />\
    <img src="styles/legend/Servios_3_11.png" /> Transporte<br />' });
var format_Locaes_4 = new ol.format.GeoJSON();
var features_Locaes_4 = format_Locaes_4.readFeatures(json_Locaes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Locaes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locaes_4.addFeatures(features_Locaes_4);
var lyr_Locaes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locaes_4, 
                style: style_Locaes_4,
                popuplayertitle: 'Locações',
                interactive: true,
    title: 'Locações<br />\
    <img src="styles/legend/Locaes_4_0.png" /> Arena ou Ginásio<br />\
    <img src="styles/legend/Locaes_4_1.png" /> Biblioteca<br />\
    <img src="styles/legend/Locaes_4_2.png" /> Centro Empresarial<br />\
    <img src="styles/legend/Locaes_4_3.png" /> Centro Religioso<br />\
    <img src="styles/legend/Locaes_4_4.png" /> Cinema ou Teatro<br />\
    <img src="styles/legend/Locaes_4_5.png" /> Clube Náutico<br />\
    <img src="styles/legend/Locaes_4_6.png" /> Construção Histórica<br />\
    <img src="styles/legend/Locaes_4_7.png" /> Ilha<br />\
    <img src="styles/legend/Locaes_4_8.png" /> Instituição de Ensino<br />\
    <img src="styles/legend/Locaes_4_9.png" /> Museu<br />\
    <img src="styles/legend/Locaes_4_10.png" /> Orla<br />\
    <img src="styles/legend/Locaes_4_11.png" /> Parque ou Área Verde<br />\
    <img src="styles/legend/Locaes_4_12.png" /> Porto ou Estaleiro Naval<br />\
    <img src="styles/legend/Locaes_4_13.png" /> Praia ou Molhe<br />\
    <img src="styles/legend/Locaes_4_14.png" /> Rua ou Avenida<br />\
    <img src="styles/legend/Locaes_4_15.png" /> Ruína<br />\
    <img src="styles/legend/Locaes_4_16.png" /> Sebo ou Banca de Revista<br />\
    <img src="styles/legend/Locaes_4_17.png" /> Unidade de Conservação<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_LocalidadesdoRioGrande_2.setVisible(true);lyr_Servios_3.setVisible(true);lyr_Locaes_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_LocalidadesdoRioGrande_2,lyr_Servios_3,lyr_Locaes_4];
lyr_LocalidadesdoRioGrande_2.set('fieldAliases', {'_uid_': '_uid_', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'area_km': 'area_km', 'pop2010': 'pop2010', 'desc_2022': 'desc_2022', 'abando2022': 'abando2022', 'homici2022': 'homici2022', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Servios_3.set('fieldAliases', {'id_servico': 'id_servico', 'Nome': 'Nome', 'Endereco': 'Endereço', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Contato': 'Contato', 'Categoria_servico': 'Categoria', });
lyr_Locaes_4.set('fieldAliases', {'id_locacao': 'id_locacao', 'lugar': 'Nome', 'endereco': 'Endereço', 'horario_funcionamento': 'Horário de Funcionamento', 'descricao': 'Descrição', 'categoria_locacao': 'Categoria', 'latitude': 'latitude', 'longitude': 'longitude', 'foto1': 'Foto 1', 'foto2': 'Foto 2', 'foto3': 'Foto 3', 'foto4': 'Foto 4', });
lyr_LocalidadesdoRioGrande_2.set('fieldImages', {'_uid_': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'area_km': 'TextEdit', 'pop2010': 'TextEdit', 'desc_2022': 'TextEdit', 'abando2022': 'TextEdit', 'homici2022': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Servios_3.set('fieldImages', {'id_servico': 'Range', 'Nome': 'TextEdit', 'Endereco': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Contato': 'TextEdit', 'Categoria_servico': 'TextEdit', });
lyr_Locaes_4.set('fieldImages', {'id_locacao': 'Range', 'lugar': 'TextEdit', 'endereco': 'TextEdit', 'horario_funcionamento': 'TextEdit', 'descricao': 'TextEdit', 'categoria_locacao': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', 'foto4': 'ExternalResource', });
lyr_LocalidadesdoRioGrande_2.set('fieldLabels', {'_uid_': 'no label', 'id': 'no label', 'objectid': 'no label', 'tipo': 'no label', 'nome_zona': 'no label', 'zona': 'no label', 'localidade': 'no label', 'area_km': 'no label', 'pop2010': 'no label', 'desc_2022': 'no label', 'abando2022': 'no label', 'homici2022': 'no label', 'NUMPOINTS': 'no label', });
lyr_Servios_3.set('fieldLabels', {'id_servico': 'hidden field', 'Nome': 'header label - always visible', 'Endereco': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Contato': 'inline label - always visible', 'Categoria_servico': 'inline label - always visible', });
lyr_Locaes_4.set('fieldLabels', {'id_locacao': 'hidden field', 'lugar': 'inline label - always visible', 'endereco': 'inline label - always visible', 'horario_funcionamento': 'inline label - always visible', 'descricao': 'inline label - always visible', 'categoria_locacao': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'foto1': 'header label - visible with data', 'foto2': 'header label - visible with data', 'foto3': 'header label - visible with data', 'foto4': 'header label - visible with data', });
lyr_Locaes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});