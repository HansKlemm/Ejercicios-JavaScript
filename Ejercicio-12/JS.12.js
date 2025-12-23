//Math.floor(Math.random() * (max - min + 1)) + min
var contenedor = "";
let max = 99;

let rand = Math.floor(Math.random() * max);

contenedor += rand;

document.getElementById("texto").innerHTML = contenedor; 

console.log(Math.floor(0.9));//numero entero hacia abajo R) 0.
console.log(Math.round(1.9)); //redondea a el entero mas cercano R) 2. 
console.log(Math.random());// un numero aleatorio entre 0 y 1. 