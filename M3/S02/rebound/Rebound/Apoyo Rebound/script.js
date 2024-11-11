
// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;
}

// Ingresa el valor del botón cero.
function getZero() {
    var key = "0";
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;

}
//Agrega un decimal.
function addDecimal() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + "."
    console.log(screen)
}
//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("screen").value = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value;
    console.log("solve " + screen)
    console.log("solve " + eval(screen))
    var screen = document.getElementById("screen").value = eval(screen);

}



/*

// Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value; // Obtiene el valor de la pantalla
    console.log("solve " + screen);  // Muestra la expresión en consola

    // Reemplaza los caracteres ÷ y × por sus equivalentes en JavaScript
    screen = screen.replace(/÷/g, "/").replace(/×/g, "*");

    try {
        // Evalúa la expresión y actualiza la pantalla con el resultado
        var result = eval(screen);
        document.getElementById("screen").value = result;
    } catch (e) {
        // Si hay un error en la evaluación, muestra un mensaje de error
        console.error("Error al resolver: " + e);
        document.getElementById("screen").value = "Error";
    }
}
*/