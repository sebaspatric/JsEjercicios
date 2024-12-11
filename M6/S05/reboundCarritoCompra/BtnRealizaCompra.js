// script.js
$(document).ready(function() {
    let doubleClickCompleted = false; // Variable de control

    // Cuando el botón "Realizar Compra" sea clickeado
    $('#realizar-compra').on('click', function() {
        if (!doubleClickCompleted) {
            $(this).text("¿Estás seguro?");  // Cambiar el texto a "¿Estás seguro?"
            $(this).css("color", "white");  // Cambiar el color de letra a verde
            $(this).css("background-color", "orange");  // Cambiar el fondo a naranja
        }
    });

    // Cuando se haga doble clic en el botón
    $('#realizar-compra').on('dblclick', function() {
        $(this).text("OK");  // Cambiar el texto a "OK"
        $(this).css("color", "white");  // Cambiar el color de letra a verde

        $(this).css("background-color", "blue");  // Cambiar el fondo a azul
        doubleClickCompleted = true; // Establecer la variable a true
    });

    // Cuando el mouse sale del botón después de hacer doble clic
    $('#realizar-compra').on('mouseout', function() {
        if (doubleClickCompleted) {
            $(this).text("COMPRADO");  // Cambiar el texto a "COMPRADO"
            $(this).css("color", "green");  // Cambiar el color de letra a verde
            $(this).css("background-color", "transparent");  // Cambiar el fondo a transparente
            doubleClickCompleted = false; // Restablecer la variable
        }
    });
});
