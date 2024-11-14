// Credenciales
let usuario = "alex123"
let pin = 1234
// dinero disponible en la cuenta.
let monto = 1000
function ingresarCuenta(usuario, pin) {
 // Verificacion de credenciales.
 cuenta_usuario = (usuario === "alex123" && pin === 1234) ?
'Bienvenido.' : 'Datos incorectos, intenta nuevamente.';
 console.log(cuenta_usuario)
 // Preguntamos si desea transferir fondos.
 transferir = prompt("desea realizar una transferencia? [si/no]");
 // si no tiene fondos no puede retirar dinero.
 saldo = (monto > 0) ? transferir : "No tiene fondos para operar.";
 // Si quiere retirar fondos
 if (transferir === "si") {
 // Cuanto quiere retirar?
 cuanto = prompt("Ingrese el monto que desea ingresar, no puede ser más que $" + monto);
 // Si quiere retirar menos de lo que tiene sin que sea cero:
 if (cuanto <= monto && cuanto !== 0) {
 // mostrar datos de la transferencia.
 console.log("Monto solicitado: $" + cuanto);
 console.log("Saldo total: $" + (monto - cuanto));
 } else {
 // si pide mas de lo que tiene, error!
 console.log("No puede solicitar ese monto.");
 }
 } else {
 // NO quiere retirar fondos
 console.log("ok, cerrando cuenta.");
 }
}

// Llamamos a la funcion, iniciamos cajero.
ingresarCuenta(usuario, pin);
