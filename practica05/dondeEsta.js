'use strict'

function save(lat,long){
  localStorage.setItem("Coche",[lat,long]);
};

function delete_car(){
  localStorage.removeItem("Coche");
};