'use strict'
let request = require('request');

let dir_base="http://api.weatherunlocked.com/"
let recurso = "api/forecast/"
let localizacion = "40.283,-3.822"
//let localizacion = "es.28942"
let uri = dir_base + recurso + localizacion

let app_id = "da6a5e78"
let app_key= "db1bf7ab9e2d2938f9aa774b93c295ca"
let param1 = "app_id=" + app_id + "&" + "app_key=" + app_key

let param2 = "lang=es"

uri =  uri + "?" + param1 + "&" + param2

console.log(uri + "\n")

request.get(uri, function(error, response, body){
    console.log("error:");
    console.log(error);
    console.log("Body:");
    imprime(body);

});

function imprime(x){
    let y=JSON.parse(x);
		for (let d of y['Days']){
			pprint(d);
		}
}


function pprint(day){
	let d = '----Dia: ' + day['date'] + '----\n';
	let tmax = 'Temperatura Máxima: ' + day['temp_max_c']+ '\n';
	let tmin = 'Temperatura Mínima: ' + day['temp_min_c']+ '\n';
	let risesun = 'Salida del Sol: ' + day['sunrise_time']+ '\n';
	let setsun = 'Caida del Sol: ' + day['sunset_time']+ '\n';
	let risemoon = 'Salida de la Luna: ' + day['moonrise_time']+ '\n';
	let setmoon = 'Caida de la Luna: ' + day['moonset_time']+ '\n';
	let prectot = 'Precipitación total: ' + day['precip_total_mm']+ '\n';
	let raintot = 'Lluvia total: ' + day['rain_total_mm']+ '\n';
	let snowtot = 'Nevada total: ' + day['snow_total_mm']+ '\n';
	let probprec = 'Probabilidad de precipitación(porcentaje): ' + day['prob_precip_pct']+ '\n';
	let hummax = 'Máxima Humedad(porcentaje): ' + day['humid_max_pct']+ '\n';
	let hummin = 'Mínima Humedad(porcentaje): ' + day['humid_min_pct']+ '\n';
	let velwind = 'Velocidad del viento: ' + day['windspd_max_kmh']+ '\n';
	let gustwindmax = 'Máxima ráfaga de viento: ' + day['windgst_max_kmh']+ '\n';
	let slpmax = 'Máxima presión: ' + day['slp_max_mb']+ '\n';
	let slpmin = 'Mínima presión: ' + day['slp_min_mb']+ '\n';
 	let r = d+tmax+tmin+risesun+setsun+risemoon+setmoon+prectot+raintot+snowtot+probprec+hummax+hummin+velwind+gustwindmax+slpmax+slpmin;
	console.log(r)
}
