do {
  var nota = prompt('¿Cual es tu nota?');
  if(Number(nota) == nota){
    if(nota < 3){
      alert("Muy deficiente");
    }else if(nota < 5){
      alert("Insuficiente");
    }else if(nota < 6){
      alert("Suficiente");
    }else if(nota < 9){
      alert("Notable");
    }else if(nota <= 10){
      alert("Sobresaliente");
    }else{
      alert(`El numero ${nota} no es una calificacion valida, por favor coloca una nota entre 0 y 10`)
    }
  }else{
    if(nota != undefined){
      alert(`el dato ingresado "${nota}" no es un numero.`)
    }
  }
  
} while (nota != undefined); 