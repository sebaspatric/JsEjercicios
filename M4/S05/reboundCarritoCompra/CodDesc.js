$(document).ready(function() {
    // Cuando el usuario escriba algo en el input
    $('#descuento').on('input', function() {
        var inputValue = $(this).val(); // Obtener el valor del input
        
        if(inputValue) {
            // Si el campo no está vacío, cambiar el fondo y color del texto a celeste y azul
            $(this).css({
                'background-color': '#cce5ff', // Fondo celeste
                'color': '#004085', // Texto azul oscuro
                'border': '1px solid #004085' // Borde azul
            });
        } else {
            // Si el campo está vacío, revertir al estilo original
            $(this).css({
                'background-color': '', // Fondo predeterminado
                'color': '', // Texto predeterminado
                'border': '' // Borde predeterminado
            });
        }
    });

    // Cuando el usuario termine de escribir en el campo de descuento
    $('#descuento').on('blur', function() {
        var inputValue = $(this).val(); // Obtener el valor del input
        
        if(inputValue) {
            // Si el campo tiene un valor, cambiar el fondo a verde claro y el texto a verde oscuro
            $(this).css({
                'background-color': '#d4edda', // Fondo verde claro
                'color': '#155724', // Texto verde oscuro
                'border': '1px solid #155724' // Borde verde
            });
        }
    });

  
});
