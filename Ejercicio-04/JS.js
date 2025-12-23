const contenedor = document.getElementById("texto");
var sumaTotal = 0;
do {
  var numero = prompt('Escriba un numero.');
  var num = Number(numero);
  if(isNaN(num)){
    alert('Esté no es un numero o has colocado alguna letra');
  }else{
    if(num.length === 0){
      sumaTotal = num;
    }else{
      sumaTotal += num;
    }
  }
} while (confirm('Desea continuar?'));
contenedor.innerHTML = "Suma total: ".bold() + sumaTotal;
