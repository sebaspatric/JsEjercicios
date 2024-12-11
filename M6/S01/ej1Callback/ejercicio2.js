// definicion de variables
var contadorDeTiempo = 0;

//Definicion de function 
function mostrarContador() {
    // Incrementamos el contador
    contadorDeTiempo++;
    // Mostramos el contador en la pantalla
    console.log("Este es el segundo: " + contadorDeTiempo);
}
//Declaracion del intervalo de tiempo
setInterval(mostrarContador, 1000); // cada segundo se ejecuta la función mostrarContador
