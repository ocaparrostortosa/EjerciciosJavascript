function ejercicio2(){
  var dni = "77644840";
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//
  if(process.argv.length < 3){
	console.log('Falta documento a analizar');
	process.exit(1);
  }
//	
  function esDniCorrecto(){
	  var numero
	  var letr
	  var letra
	  var expresion_regular_dni
 
	  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
	  if(expresion_regular_dni.test (dni) == true){
	     numero = dni.substr(0,dni.length-1);
	     letr = dni.substr(dni.length-1,1);
	     numero = numero % 23;
	     letra='TRWAGMYFPDXBNJZSQVHLCKET';
	     letra=letra.substring(numero,numero+1);
	    if (letra!=letr.toUpperCase()) {
	       console.log('Dni erroneo, la letra del NIF no se corresponde');
	     }else{
	       console.log('Dni correcto');
	     }
	  }else{
	     console.log('Dni erroneo, formato no válido');
	   }	  
  }	
//
  function esDniNif(){
	if(dni.length==9){
	  console.log("Lo introducido es un DNI");
	  console.log("Letra del dni: " + dni.substring(dni.length-1,dni.length));
	}
	else{
	  console.log("Lo introducido en un NIF");
	  console.log("La letra de su NIF es: " + letras[dni % 23]);
	}
  }
//
  esDniCorrecto();
  esDniNif();
}

ejercicio2();
