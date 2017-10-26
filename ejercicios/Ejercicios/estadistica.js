module.exports = function estadistica(coleccion){
  var _coleccion = coleccion;
  return {
    numeroElementos   : function() { return _coleccion.length; },
    numeroMasAlto     : function() {
      var numeroAlto = _coleccion[0];
      if(_coleccion.length > 1){
        for(var i = 1; i<_coleccion.length; i++){
          if(_coleccion[i] > numeroAlto){
            numeroAlto = _coleccion[i];
          }
        }
      }
      return numeroAlto;
    }
    //numeroMasBajo     : function() {return 0;}
  }

}
