if(process.argv.length < 3)
	process.exit(1);

function inicia(){
  var texto = process.argv[2];
//
  function esNumero(){
	console.log("¿Es la cadena un numero?: " + !isNaN(texto));
  }
//
  function invertirCadena(){
	var x = texto.length;
	var cadena = "";
	while(x>=0){	  
	  cadena = cadena + texto.charAt(x);
	  x--;
	}
	console.log("Cadena invertida: " + cadena);
	
	return cadena;
  }
//
  function numeroCaracteres(){
	console.log("Numero de caracteres: " + texto.length);
  }
//
  function cadenaEnMayus(){
	console.log("Cadena en mayusculas: " + texto.toUpperCase());
  }
//
  function esPalindromo(){
	var cadena = invertirCadena();
	console.log("La cadena es Palídroma?: " + (cadena === texto));
  }
//
  esNumero();
  invertirCadena();
  numeroCaracteres();
  cadenaEnMayus();
  esPalindromo();
}

inicia();
