'use strict'
// de metros por segundo a kilometros por hora
function tokmh(x){
	return (x/1000)*3600;
};

//de metros por segundo a millas por hora
function tomh(y){
	return (y/1609.344)*3600;
};

console.log('6 metros por segundo son:');
console.log(tokmh(6) + ' Kilometros por hora');
console.log(tomh(1) + ' Millas por hora');
