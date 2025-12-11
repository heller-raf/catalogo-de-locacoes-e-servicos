ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([389104.404266, 6450062.186687, 407335.677041, 6458763.074855]);
var wms_layers = [];

var format_MunicpiosVizinhos_0 = new ol.format.GeoJSON();
var features_MunicpiosVizinhos_0 = format_MunicpiosVizinhos_0.readFeatures(json_MunicpiosVizinhos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MunicpiosVizinhos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosVizinhos_0.addFeatures(features_MunicpiosVizinhos_0);
var lyr_MunicpiosVizinhos_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosVizinhos_0, 
                style: style_MunicpiosVizinhos_0,
                popuplayertitle: 'Municípios Vizinhos',
                interactive: false,
                title: '<img src="styles/legend/MunicpiosVizinhos_0.png" /> Municípios Vizinhos'
            });
var format_LocalidadesdoRioGrande_1 = new ol.format.GeoJSON();
var features_LocalidadesdoRioGrande_1 = format_LocalidadesdoRioGrande_1.readFeatures(json_LocalidadesdoRioGrande_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LocalidadesdoRioGrande_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesdoRioGrande_1.addFeatures(features_LocalidadesdoRioGrande_1);
var lyr_LocalidadesdoRioGrande_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesdoRioGrande_1, 
                style: style_LocalidadesdoRioGrande_1,
                popuplayertitle: 'Localidades do Rio Grande',
                interactive: false,
                title: '<img src="styles/legend/LocalidadesdoRioGrande_1.png" /> Localidades do Rio Grande'
            });
var format_Servios_2 = new ol.format.GeoJSON();
var features_Servios_2 = format_Servios_2.readFeatures(json_Servios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Servios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servios_2.addFeatures(features_Servios_2);
var lyr_Servios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servios_2, 
                style: style_Servios_2,
                popuplayertitle: 'Serviços',
                interactive: true,
    title: 'Serviços<br />\
    <img src="styles/legend/Servios_2_0.png" /> Antiquário<br />\
    <img src="styles/legend/Servios_2_1.png" /> Brechó<br />\
    <img src="styles/legend/Servios_2_2.png" /> Costura<br />\
    <img src="styles/legend/Servios_2_3.png" /> Eletricista<br />\
    <img src="styles/legend/Servios_2_4.png" /> Ferragem<br />\
    <img src="styles/legend/Servios_2_5.png" /> Hospedagem<br />\
    <img src="styles/legend/Servios_2_6.png" /> Imobiliária<br />\
    <img src="styles/legend/Servios_2_7.png" /> Locação de Equipamentos<br />\
    <img src="styles/legend/Servios_2_8.png" /> Loja de Tecidos<br />\
    <img src="styles/legend/Servios_2_9.png" /> Marcenaria<br />\
    <img src="styles/legend/Servios_2_10.png" /> Sebo<br />\
    <img src="styles/legend/Servios_2_11.png" /> Transporte<br />' });
var format_Locaes_3 = new ol.format.GeoJSON();
var features_Locaes_3 = format_Locaes_3.readFeatures(json_Locaes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Locaes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locaes_3.addFeatures(features_Locaes_3);
var lyr_Locaes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locaes_3, 
                style: style_Locaes_3,
                popuplayertitle: 'Locações',
                interactive: true,
    title: 'Locações<br />\
    <img src="styles/legend/Locaes_3_0.png" /> Arena ou Ginásio<br />\
    <img src="styles/legend/Locaes_3_1.png" /> Biblioteca<br />\
    <img src="styles/legend/Locaes_3_2.png" /> Centro Empresarial<br />\
    <img src="styles/legend/Locaes_3_3.png" /> Centro Religioso<br />\
    <img src="styles/legend/Locaes_3_4.png" /> Cinema ou Teatro<br />\
    <img src="styles/legend/Locaes_3_5.png" /> Clube Náutico<br />\
    <img src="styles/legend/Locaes_3_6.png" /> Construção Histórica<br />\
    <img src="styles/legend/Locaes_3_7.png" /> Ilha<br />\
    <img src="styles/legend/Locaes_3_8.png" /> Instituição de Ensino<br />\
    <img src="styles/legend/Locaes_3_9.png" /> Museu<br />\
    <img src="styles/legend/Locaes_3_10.png" /> Orla<br />\
    <img src="styles/legend/Locaes_3_11.png" /> Parque ou Área Verde<br />\
    <img src="styles/legend/Locaes_3_12.png" /> Porto ou Estaleiro Naval<br />\
    <img src="styles/legend/Locaes_3_13.png" /> Praia ou Molhe<br />\
    <img src="styles/legend/Locaes_3_14.png" /> Rua ou Avenida<br />\
    <img src="styles/legend/Locaes_3_15.png" /> Ruína<br />\
    <img src="styles/legend/Locaes_3_16.png" /> Sebo ou Banca de Revista<br />\
    <img src="styles/legend/Locaes_3_17.png" /> Unidade de Conservação<br />' });

lyr_MunicpiosVizinhos_0.setVisible(true);lyr_LocalidadesdoRioGrande_1.setVisible(true);lyr_Servios_2.setVisible(true);lyr_Locaes_3.setVisible(true);
var layersList = [lyr_MunicpiosVizinhos_0,lyr_LocalidadesdoRioGrande_1,lyr_Servios_2,lyr_Locaes_3];
lyr_MunicpiosVizinhos_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_LocalidadesdoRioGrande_1.set('fieldAliases', {'_uid_': '_uid_', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'area_km': 'area_km', 'pop2010': 'pop2010', 'desc_2022': 'desc_2022', 'abando2022': 'abando2022', 'homici2022': 'homici2022', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Servios_2.set('fieldAliases', {'id_servico': 'id_servico', 'Nome': 'Nome', 'Endereco': 'Endereço', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Contato': 'Contato', 'Categoria_servico': 'Categoria', });
lyr_Locaes_3.set('fieldAliases', {'id_locacao': 'id_locacao', 'lugar': 'Nome', 'endereco': 'Endereço', 'horario_funcionamento': 'Horário de Funcionamento', 'descricao': 'Descrição', 'categoria_locacao': 'Categoria', 'latitude': 'latitude', 'longitude': 'longitude', 'foto1': 'Foto 1', 'foto2': 'Foto 2', 'foto3': 'Foto 3', 'foto4': 'Foto 4', });
lyr_MunicpiosVizinhos_0.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_LocalidadesdoRioGrande_1.set('fieldImages', {'_uid_': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'area_km': 'TextEdit', 'pop2010': 'TextEdit', 'desc_2022': 'TextEdit', 'abando2022': 'TextEdit', 'homici2022': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Servios_2.set('fieldImages', {'id_servico': 'Range', 'Nome': 'TextEdit', 'Endereco': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Contato': 'TextEdit', 'Categoria_servico': 'TextEdit', });
lyr_Locaes_3.set('fieldImages', {'id_locacao': 'Range', 'lugar': 'TextEdit', 'endereco': 'TextEdit', 'horario_funcionamento': 'TextEdit', 'descricao': 'TextEdit', 'categoria_locacao': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', 'foto4': 'ExternalResource', });
lyr_MunicpiosVizinhos_0.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_LocalidadesdoRioGrande_1.set('fieldLabels', {'_uid_': 'no label', 'id': 'no label', 'objectid': 'no label', 'tipo': 'no label', 'nome_zona': 'no label', 'zona': 'no label', 'localidade': 'no label', 'area_km': 'no label', 'pop2010': 'no label', 'desc_2022': 'no label', 'abando2022': 'no label', 'homici2022': 'no label', 'NUMPOINTS': 'no label', });
lyr_Servios_2.set('fieldLabels', {'id_servico': 'hidden field', 'Nome': 'header label - always visible', 'Endereco': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Contato': 'inline label - always visible', 'Categoria_servico': 'inline label - always visible', });
lyr_Locaes_3.set('fieldLabels', {'id_locacao': 'hidden field', 'lugar': 'inline label - always visible', 'endereco': 'inline label - always visible', 'horario_funcionamento': 'inline label - always visible', 'descricao': 'inline label - always visible', 'categoria_locacao': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'foto1': 'header label - visible with data', 'foto2': 'header label - visible with data', 'foto3': 'header label - visible with data', 'foto4': 'header label - visible with data', });
lyr_Locaes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});