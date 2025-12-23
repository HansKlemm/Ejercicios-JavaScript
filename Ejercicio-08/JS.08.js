const contenedor = document.getElementById("texto");

var i, rep;
let numUser = prompt('Ingresa un numero entre 1 y 50')
for (i = 1; i <= numUser; i++) {
  for (rep = 1; rep < i; rep++) {
    contenedor.innerHTML += `${rep}`;
  }
  contenedor.innerHTML += '<br>';
}