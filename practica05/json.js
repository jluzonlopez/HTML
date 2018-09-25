'use strict'
let obj = {
	peso : 100,
	medida_peso : 'kilos',
	altura : 1.80,
	medida_altura : 'metros',
	notas : [6,3,4],
	param : [[3,4],['rojo'],[56]],
	login : {'login': 'juan','clave': 'password'}
};

let cadena = JSON.stringify(obj);
console.log(typeof(cadena),cadena);

let objeto=JSON.parse(cadena);
console.log(typeof(objeto),objeto);
