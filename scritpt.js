function datos(){
var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var email = document.getElementById("email").value;
var fechadenacimiento = document.getElementById("fecha-nacimiento").value;
var f = document.getElementById("f").checked;
var m = document.getElementById ("m").checked;
var estatura = document.getElementById("estatura").value;
var peso = document.getElementById("peso").value;
var deporte = document.getElementById("deporte").checked;


var mensaje= "nombres:" + nombres
+ "\nApellidos: " + apellidos
+ "\nCorreo electronico: " + email
+ "\nFecha de nacimiento:" + fechadenacimiento
+ "\nEs mujer: " + f
+ "\nEs hombre: " + m
+ "\nEstatura: " + estatura + "m" 
+ "\nPeso: " + peso + "kg"
+ "\nDeporte:" + deporte;



console.log(mensaje);


 var Imc = peso / (estatura**2);
 var obesidad = imc >= 30;
 alert("IMC: " + imc + "\nEs Obeso: " + obesidad);


}

