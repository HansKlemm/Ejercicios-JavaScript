const contenedor = document.getElementById("texto");
var cadena = "";
/*do {
  var texto = prompt('Escriba algo.');
  if(cadena == ""){
    cadena = texto + cadena;
  }else{
    cadena = texto + "-" + cadena;
  }
} while (confirm('Desea continuar?'));*/
contenedor.textContent = "Textos Recuperados: " + cadena;
