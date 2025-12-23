//Math.floor(Math.random() * (max - min + 1)) + min
var contenedor = "";
let max = 99;

let rand1 = Math.floor((Math.random() * max) + 1);
let rand2 = Math.floor((Math.random() * max) + 1);
let rand3 = Math.floor((Math.random() * max)+1);

contenedor += `${rand1} ${rand2} ${rand3}`;

document.getElementById("texto").innerHTML = contenedor; 

console.log(Math.floor(0.9));//numero entero hacia abajo R) 0.
console.log(Math.round(1.9)); //redondea a el entero mas cercano R) 2. 
console.log(Math.random());// un numero aleatorio entre 0 y 1. 