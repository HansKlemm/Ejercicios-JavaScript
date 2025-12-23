const contenedor = document.getElementById("texto");
let cant = 500
for (i = 1; i <= cant; i++) {
  contenedor.innerHTML += `${i}`;
  if(i % 4 == 0){
    contenedor.innerHTML += ` (Multiplo de 4)`;
  }
  if(i % 9 == 0){
    contenedor.innerHTML += ` (Multiplo de 9)`;
  }
  if(i % 5 == 0){
    contenedor.innerHTML += '<br>';
    contenedor.innerHTML += `-☆-☆-☆-☆-☆-☆-☆-☆-`;
  }  
  contenedor.innerHTML += '<br>';
}