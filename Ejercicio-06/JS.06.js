const contenedor = document.getElementById("texto");

var i, rep;

for (i = 1; i <= 14; i++) {
  for (rep = 0; rep < i; rep++) {
   contenedor.innerHTML += `${i}`;
  }
  contenedor.innerHTML += '<br>';
}