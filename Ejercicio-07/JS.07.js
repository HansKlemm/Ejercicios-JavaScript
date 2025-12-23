
var contenedor = "";
document.getElementById("NoEjer").innerHTML = "7";

var contador = parseInt(prompt("Por favor coloque un numero entre 1 y 30"));

for (var i = contador; i >= 1; i--) {
  for (var rep = 0; rep < i; rep++) {
   contenedor += `${i}`;
  }
  contenedor += '<br>';
}
console.log(typeof contador);

document.getElementById("texto").innerHTML = contenedor;

/* 
var contenedor = "";
document.getElementById("NoEjer").innerHTML = "7";

var contador = parseInt(prompt("Por favor coloque un numero entre 1 y 30"));

if (isNaN(contador) || contador < 1 || contador > 30) {
  alert("Número inválido");
} else {
  for (var i = contador; i >= 1; i--) {
    for (var rep = 0; rep < i; rep++) {
      contenedor += i;
    }
    contenedor += "<br>";
  }

  document.getElementById("texto").innerHTML = contenedor;
}
 */



