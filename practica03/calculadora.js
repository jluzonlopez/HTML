'use strict'
function checkValues(val){
	let r=0;
	let nvalid = '0123456789.';
	let opvalid = 'c+-*/=';

	for(let v of nvalid){
		if(val === v){
			r = 1;
			break;
		};
	};

	for(let v of opvalid){
		if (val === v){
			r = 2;
			break;
		};
	};

	return r;
};

function docal(calc){
	let r;
	if(calc.oper === '+'){
		r = Number(calc.op1) + Number(calc.op2);
	}else if(calc.oper === '-'){
		r = Number(calc.op1) - Number(calc.op2);
	}else if(calc.oper === '*'){
		r = Number(calc.op1) * Number(calc.op2);
	}else if(calc.oper === '/'){
		r = Number(calc.op1) / Number(calc.op2);
	};
	return r;
};

function getKey(tecla, calc){
	let r;
	if(tecla === undefined || calc === undefined){
		r = 'Error: argumentos mal introducidos';
	}else{
		switch(checkValues(tecla)){
			case 0:
				r = 'Valor no valido';
				break;
			case 1: // número introducido
				if(calc.est === 0){
					calc.est = 1;
					calc.op1 = tecla;
					r = calc.op1;
				}else if(calc.est === 1){
					calc.est = 1;
					calc.op1 += tecla;
					r = calc.op1;
				}else if(calc.est === 2){
					calc.est = 3;
					calc.op2 = tecla;
					r = calc.op2;
				}else if(calc.est === 3){
					calc.op2 += tecla;
					r = calc.op2;
				}
				break;
			case 2: // operador introducido
				if(tecla === 'c'){
					calc.op1 = 0;
					calc.op2 = 0;
					calc.oper = 0;
					calc.est = 0;
					r = 0;
				}else{
					if(calc.est === 0){
						r = 0;
						calc.op1 = 0;
						calc.oper =  tecla;
						calc.est = 2;
					}else if(calc.est === 1){
						calc.est = 2;
						calc.oper = tecla;
						r = calc.op1;
					}else if(calc.est === 2){
						calc.oper = tecla;
						r = calc.op1;
					}else if(calc.est === 3){
						if(tecla === '+' || tecla === '-' || tecla === '='){
							r = docal(calc);
							calc.op1 = r;
							calc.op2 = 0;
							calc.oper = tecla;
							calc.est = 2;
						}else{
							r = calc.op2;
							calc.op1 = r;
							calc.op2 = 0;
							calc.oper = tecla;
							calc.est = 2;
						}
					}
				}
				break;
			default:
				r = 'Unexpected error';
		};
	};
	return r;
}

function testCalc(){
	let calc = {
		op1 : 0,
		op2 : 0,
		oper : 0,
		est: 0,
	};

	console.log(getKey('*',calc));
	console.log(getKey('8',calc));
	console.log(getKey('+',calc));
	console.log(getKey('-',calc));
	console.log(getKey('6',calc));
	console.log(getKey('0',calc));
	console.log(getKey('*',calc));
	console.log(getKey('4',calc));
	console.log(getKey('.',calc));
	console.log(getKey('2',calc));
	console.log(getKey('+',calc));
	console.log(getKey('4',calc));
	console.log(getKey('-',calc));
	console.log(getKey('c',calc));
}


testCalc();
