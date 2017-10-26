var circunferencia = require('./circunferencia');
var estadistica = require('./estadistica');

var objeto = circunferencia.circunferencia(12);

console.log("Area " + objeto.area());
console.log("Perimetro " + objeto.perimetro());
var coleccion = [1,2,3,4,5,6,7,8,9];
var objeto1 = estadistica(coleccion);
console.log('Nº de elementos ' + objeto1.numeroElementos());
console.log('Nº más alto ' + objeto1.numeroMasAlto());
