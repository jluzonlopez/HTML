'use strict'

function getLocation(x){
	let valor,input,r;
	input=prompt("¿Cómo te llamas?");
	let nombreUsuario = localStorage.getItem(input);
	if (!nombreUsuario) {
		r = "Hola " + input + " es tu primera visita.";
		r += "Posicion\n";
		r += "Latitud: "+ x.latitude.toFixed(3) + "\n";
		r += "Longitud: " + x.longitude.toFixed(3) + "\n";
	}else{
		valor = localStorage.getItem(input);
		r = "Hola: "+input+", tu última visita: "+valor;
	};
	let mensaje = "Posicion\n";
	mensaje += "Latitud: "+ x.latitude.toFixed(3) + "\n";
	mensaje += "Longitud: " + x.longitude.toFixed(3) + "\n";
	mensaje += "Precision: " + x.accuracy + "\n";
	mensaje += "Hora: " + new Date().toString();
	localStorage.setItem(input,mensaje);
	return r;
};

function deleteLocation(){
	for (let clave in localStorage) {
		localStorage.removeItem(clave);
	};
	return 'Locations deleted';
};
