//Math.floor((Math.random() * max) + min)

var contenedor = "";
let max = 99;
let i = 1;
do{
        let rand = Math.floor((Math.random() * max) + 1);
        i++;
        contenedor += `${rand}<br>`;
}while (i<=3);



document.getElementById("texto").innerHTML = contenedor; 

console.log(Math.floor(0.9));//numero entero hacia abajo R) 0.
console.log(Math.round(1.9)); //redondea a el entero mas cercano R) 2. 
console.log(Math.random());// un numero aleatorio entre 0 y 1. 