//espera a que carge el documento

document.addEventListener("DOMContentLoaded", function () {
 // llama a la función que genera el cuadrado
 var filas = window.prompt("Ingresa cantidad de filas");
var columnas = window.prompt("Ingresa cantidad de columnas");
for (i = 0; i < filas; i++) {
 for (let j = 0; j < columnas; j++) {
 document.getElementById("miCuadrado").innerHTML += "#"
 }
 document.getElementById("miCuadrado").innerHTML += "<br>"
}
});

