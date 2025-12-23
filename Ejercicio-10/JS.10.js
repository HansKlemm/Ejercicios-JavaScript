var contenedor = "";
var casillas;
var cantFil = parseInt(prompt('¿Cuantas filas?'));
var cantCol = parseInt(prompt('¿Cuantas columnas?'));

casillas = cantFil * cantCol;
contenedor += "<table>";
for (var fil = 1; fil <= cantFil; fil++) {
  contenedor += "<tr>"
  for (let col = 1; col <= cantCol; col++) {
    contenedor += "<td>";
    contenedor += casillas;
    casillas--;
    contenedor += "</td>";
  }
  contenedor += "</tr>";
}
contenedor += "</table>";

document.getElementById("texto").innerHTML = contenedor;