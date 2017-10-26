function suma (sumando1, sumando2){
  setTimeout(function (){
  var resul = sumando1 + sumando2;
  return resul;
  }, 500);
}

var resultado = suma(1,2);
console.log(resultado);
