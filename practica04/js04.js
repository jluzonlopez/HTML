'use strict'
// de metros por segundo a kilometros por hora
function tokmh(x) {
  return (x / 1000) * 3600;
};

//de metros por segundo a millas por hora
function tomh(y) {
  return (y / 1609.344) * 3600;
};

function getn(s) {
  let n;
  n = s.split(" ");
  return n[0];
};

function changeunids(v, u) {
  if (v === undefined || v === undefined || u === undefined || u === undefined) {
    throw ReferenceError;
  } else if (u === 'm/s') {
    return 'm/s: ' + v;
  } else if (u === 'km/h') {
    return 'k/m: ' + tokmh(v).toFixed(2);
  } else if (u === 'mph') {
    return 'mph: ' + tomh(v).toFixed(2);
  } else {
    throw SyntaxError;
  };
};

console.log('6 metros por segundo son:');
try {
  console.log(changeunids('6', 'm/s'));
  console.log(changeunids(6, 'km/h'));
  console.log(changeunids(6, 'Mph'));
  console.log(changeunids(6));
  console.log(changeunids('mph'));
} catch (e) {
  switch (e.name) {
    case 'ReferenceError':
      console.log('Undefinded values');
      break;
    case 'SyntaxError':
      console.log('Syntax Error');
      break;
    default:
      console.log('Unknow Error');
  };
};
