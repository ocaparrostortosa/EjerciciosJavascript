/**
var name = 'oscar';
function clousure(){
    var name = 'pepe';
    function f(){return name};
    return f();
}
console.log('Valor de name: ' + name);
console.log('Valor de name encapsulada: ' + clousure());


var contadorClousure = (function(){
    var contador = 0;
    return function(){return contador++};
})();

console.log('contador: ' + contadorClousure());
console.log('contador: ' + contadorClousure());
*/
function counter(){
    var n = 0;
    return {
        count: function() { return n++;},
        reset: function() { n = 0; }
    };
}
var c = counter(), d = counter();
console.log(c.count() + " : " + d.count());
c.reset();
console.log(c.count() + " : " + d.count());
