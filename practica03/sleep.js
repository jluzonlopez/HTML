'use strict'

function sleep(x) {
  let fin_time = new Date().getTime() + (x*1000);
  while(true) {
    if(new Date() > fin_time){
      break;
    }
  } 
};

sleep(5);