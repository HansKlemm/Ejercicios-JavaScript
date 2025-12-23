var contenedor = "";

var edad1 = Number(prompt('Edad1'));
var nombre1 = prompt('Nombre1');

var edad2 = Number(prompt('Edad2'));
var nombre2 = prompt('Nombre2');

var edad3 = Number(prompt('Edad3'));
var nombre3 = prompt('Nombre3');

edad = Math.max(edad1, edad2, edad3);

if(edad == edad1){
  contenedor += `El nombre del mayor es ${nombre1}`
}else if (edad == edad2) {
  contenedor += `El nombre del mayor es ${nombre2}`
}else if(edad == edad3){
  contenedor += `El nombre del mayor es <b>${nombre3}</b>`
}else{
  contenedor += `Hubo un fallo inesperado.`
}

document.getElementById("texto").innerHTML = contenedor; 