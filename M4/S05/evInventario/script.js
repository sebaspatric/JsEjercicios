$(document).ready(function () {
    // Escuchar el evento de entrada de texto en el campo de búsqueda
    $('.form-control').on('input', function () {
        // Verificar si hay texto en el campo de búsqueda
        var textoIngresado = $(this).val().trim(); // Eliminar espacios adicionales
        var botonLupa = $(this).closest('.input-group').find('.lupa-buscar'); // Seleccionar el botón lupa asociado
        
        if (textoIngresado !== "") {
            // Si hay texto, habilitar el botón de la lupa
            botonLupa.prop('disabled', false);
        } else {
            // Si no hay texto, deshabilitar el botón de la lupa
            botonLupa.prop('disabled', true);
        }
    });

    // Escuchar el clic en cualquier botón con clase 'lupa-buscar'
    $('.lupa-buscar').click(function () {
        // Verificar si el botón está habilitado
        if (!$(this).prop('disabled')) {
            // Encontrar el contenedor más cercano con la clase 'cuadro-busqueda'
            var cuadro = $(this).closest('.cuadro-busqueda');

            // Cambiar estilos dinámicamente según el cuadro
            if (cuadro.attr('id') === 'cuadro-esta-tienda') {
                cuadro.css({
                    'background-color': 'lightgreen', // Fondo verde claro
                    'color': 'black'
                });
                // Cambiar colores de elementos internos
                cuadro.find('.texto-gris').css('color', 'darkgreen'); // Texto gris -> Verde oscuro
                cuadro.find('.texto-rojo').css('color', 'darkgreen'); // Texto rojo -> Verde oscuro
                cuadro.find('.lupa-roja').css('color', 'darkgreen');  // Lupa -> Verde oscuro
            } else if (cuadro.attr('id') === 'cuadro-otras-tiendas') {
                cuadro.css({
                    'background-color': '#FFFF99', // Fondo amarillo claro
                    'color': 'red'
                });
                // Cambiar colores de elementos internos
                cuadro.find('.texto-gris').css('color', 'red');    // Texto gris -> Rojo
                cuadro.find('.texto-rojo').css('color', 'red');    // Texto rojo -> Rojo
                cuadro.find('.lupa-roja').css('color', 'red');     // Lupa -> Rojo
            } else if (cuadro.attr('id') === 'cuadro-online') {
                cuadro.css({
                    'background-color': 'lightblue', // Fondo celeste
                    'color': 'blue'
                });
                // Cambiar colores de elementos internos
                cuadro.find('.texto-gris').css('color', 'blue');      // Texto gris -> Azul
                cuadro.find('.texto-rojo').css('color', 'blue');      // Texto rojo -> Azul
                cuadro.find('.lupa-roja').css('color', 'blue');       // Lupa -> Azul
            }
        }
    });
});
