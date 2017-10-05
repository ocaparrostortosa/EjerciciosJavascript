//function square(x) {return x * x};
// console.log(square(2));
/**
var a = 1;
function foo(){
    var a = 2;
    console.log(a);
}

console.log("Llamando a la funcion: ");
foo();

console.log("Llamando a la variable global: ");
console.log(a);

(function foo(){
    var a = 3;
    console.log(a);
})();
*/
var a = 1;
let b = 2;
const c = 3;
{
    var a = 4;
    let b = 5;
    const c = 6;
}

console.log(a,b,c);