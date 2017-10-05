var objeto = {}
objeto.nombre = 'Oscar'
objeto.edad = 18
console.log(typeof(objeto))
console.log(objeto)
delete objeto.edad
console.log("Sin edad : " + objeto)
console.log("Raiz cuadrada de 4: " + Math.sqrt(4))
//Para comparar el contenido de dos string u objetos se usa el doble igual ('=='), para comparar
//el tipo de dos objetos usariamos typeoff y para comparar tanto contenido como el tipo usaremos el triple igual
//('===')

function add(num1, num2){
  return num1 + num2;
}

var add = function (num1, num2){
  return num1 + num2;
}

console.log("Function add: " + add(1,2))
console.log("Var add: " + add(0,2))

var add1 = (num1, num2) => num1 + num2
console.log("Programacion funcional: " + add1 + "\n" + add1(2,3))

var persona = {
  name: "Oscar",
  sayName: function(){
	console.log(persona.name);
  }
};
persona.sayName();

