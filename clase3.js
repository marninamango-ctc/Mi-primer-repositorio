//* recordar como crear variables del tipo string
var lenguaje = "phyton"
var ciudad =  "lima"
var mensaje = "¡bienvenido al sitio web!"

const single = 'comillas simple';
const double = " comillas dobles";
const backtick = `backticks`; // comillas invertidas

//** seleccionar una letra ccon string

var animal = "gato";

console.log(animal.charAt(2))
const saludo =  'Mundo';

console.assert( `Hola ${saludo}` ===  'Hola Mundo');


//** caracteres especiales 
var frase1 =  `Hola:
               amiga 1`;
alert(frase1);
// el  \n genera un salto de línea

var frase2 = `Hola:\namiga 2`;
alert(frase2);

//Utilizando string.length

var letras = "abcdlkj";
var conteo = letras.length;
alert(conteo);

 var ultimo = letras[letras.length - 1]
 console.log(ultimo);
 alert(ultimo);



 //convertir minusculas a mayusculas
 var minus = "peru"
 alert(minus.toUpperCase()); //Pasa a mayuscula

 //Ejemplos con comprobación usando assert

console.assert('Interface' . toUpperCase() === 'INTERFACE');
console.assert('INTERFACE' . toUpperCase() ===   'interface');
console.assert('interface')