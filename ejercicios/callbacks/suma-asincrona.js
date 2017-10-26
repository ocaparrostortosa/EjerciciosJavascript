function suma (sumando1, sumando2, callback){
  setTimeout(function (){
  var resul = sumando1 + sumando2;
  callback(resul);
  }, 500);
}

var resultado = suma(2, 3, function(datos){
  console.log(datos);
});

console.log("fin de programa");
