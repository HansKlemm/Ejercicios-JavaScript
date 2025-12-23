const contenedor = document.getElementById("texto");
var cadena = "";
do {
  var texto = prompt('Escriba algo.');
  if(cadena == ""){
    cadena = texto;
  }else{
    cadena = cadena + "-" +  texto;
  }
} while (confirm('Desea continuar?'));
contenedor.innerHTML = "Textos Recuperados: " + cadena.bold();
