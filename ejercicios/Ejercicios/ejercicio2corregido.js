//comprobamos que introducimos un dni/nif
if(process.argv.length < 3){
  console.log('Debes introducir un documento');
  process.exit(1);
}
console.log('Documento introducido: ' + process.argv[2]);
const cadena = process.argv[2];

var documento = function (nif_dni) {
  var _documento = nif_dni;
  return { 
	comprobarFormato : function(){ return /^[\d]{8}[a-zA-Z]?$/.test(_documento); },
	tipoDocumento    : function(){ 
				       if( this.comprobarFormato() ){
					  if( _documento.length === 8 ){
					    return 'dni';
					  } else {
					    return 'nif';
					  }
					} else {
					  return 'documento NO valido';
					}
  				     }
  }
var documento1 = documento(cadena);
console.log(cadena + ' ¿Formato correcto? ' + documento1.comprobarFormato() );
console.log(cadena + ' ¿Tipo de documento? ' + documento1.tipoDocumento() );
