'use strict'
function buscad(cad,cadbus,n){
	let r,min;
	min = 0;
	for(let c of cad){
		for(let cb of cadbus){
			if(c === cb){
				++min;
			};
		};
	};
	if(min >= n){
		r = true;
	}else{
		r = false;
	};
	return r;
};

function password(passw, longt, nmin, nmay, nnum, nesp, caresp){
	let r,minus,mayus,numer,esp;
	minus = 'abcdefghijklmnropqrstuvwxyzáéíóúñ';
	mayus = 'ABCDEFGHIJKLMNROPQRSTUVWXYZÁÉÍÓÚÑ';
	numer = '0123456789';
	if(passw === undefined || longt === undefined || nmin === undefined
		|| nmay === undefined || nnum === undefined || nesp === undefined
		|| caresp === undefined){
		r = 'Error: variables mal introducidas'
	}else{
		switch (true) {
			case (passw.length < longt):
				r = false;
				break;
			case(!buscad(passw,minus,nmin)):
				r = false;
				break;
			case(!buscad(passw,mayus,nmay)):
				r = false;
				break;
			case(!buscad(passw,numer,nnum)):
				r = false;
				break;
			case(!buscad(passw,caresp,nesp)):
				r = false;
				break;
			default:
				r = true;
		};
	};
	return r;
};

let pswd,plong,nmi,nmy,nnm,nes,cesp;
cesp = ",.-{}[]!·$\"%&/()=?¿¡'";

// test
pswd = '.QuijótE%765%';
plong = 12;
nmi = 5;
nmy = 2;
nnm = 3;
nes = 2;
console.log(pswd + ': ' + password(pswd,plong,nmi,nmy,nnm,nes,cesp));

pswd = 'password';
plong = 10;
nmi = 6;
nmy = 2;
nnm = 3;
nes = 0;
console.log(pswd + ': ' + password(pswd,plong,nmi,nmy,nnm,nes,cesp));

pswd = 'malacontraseña1234';
plong = 10;
nmi = 1;
nmy = 1;
nnm = 2;
nes = 1;
console.log(pswd + ': ' + password(pswd,plong,nmi,nmy,nnm,cesp));

pswd = '%foro%Coches';
plong = 6;
nmi = 1;
nmy = 1;
nnm = 2;
nes = 1;
console.log(pswd + ': ' + password(pswd,plong,nmi,nmy,nnm,nes,cesp));

pswd = '.EULDLM$75$ñer';
plong = 12;
nmi = 3;
nmy = 3;
nnm = 2;
nes = 1;
console.log(pswd + ': ' + password(pswd,plong,nmi,nmy,nnm,nes,cesp));
