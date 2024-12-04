//function saludo(nombre) {
//  alert(`Hola ${nombre}`);
//}
//function procesaEntrada(callback) {
//  var nombre = prompt("Ingresa tu nombre por favorM.");
//  callback(nombre);
//}
//procesaEntrada(saludo);
//
////Una llamada a la función
////function procesaEntrada(callback())  { //incorrecto.
////    var nombre = prompt('Ingresa tu nombre por favor.');
////    callback(nombre);
////    }
//
////Un callback
//function procesaEntrada(callback) {
//  //correcto.
//  var nombre = prompt("Ingresa tu nombre por favor.");
//  callback(nombre);
//}
//
//   // Pasando el callback completo como parámetrofunction procesaEntrada(callback) {

//function procesaEntrada(callback) {
//    var nombre = prompt('Ingresa tu nombre por favor.');
//    callback(nombre)
//   }
//   // Pasando el callback completo como parámetro
//   procesaEntrada(function (nombre) {
//    alert(`Hola ${nombre}`);
//   });
//

  
   function procesaEntrada(callback) {
    var nombre = prompt('Ingresa tu nombre por favor.');
    callback(nombre)
   }
   // Usando arrow functions.
   procesaEntrada((nombre) => {
    alert(`Hola ${nombre}`);
   });
   