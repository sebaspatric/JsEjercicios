$(document).ready(function() {
    // Inicializamos Select2
    $('#motivo').select2({
        placeholder: "--Selecciona un motivo--",
        width: '100%',
        
        // Función para personalizar la visualización de las opciones
        templateResult: function(data) {
            var $result = $('<span></span>');
            $result.text(data.text);  // Texto de la opción

            // Solo agregar el ícono de check a la opción seleccionada
            if (data.selected) {
                var icon = '<i class="fas fa-check" style="margin-right: 5px;"></i>';
                $result.prepend(icon);  // Agregar el ícono solo a la opción seleccionada
            }

            return $result;
        },
        
        // Función para personalizar la visualización de la opción seleccionada
        templateSelection: function(data) {
            var $selected = $('<span></span>');
            $selected.text(data.text);  // Solo mostramos el texto de la opción seleccionada
            return $selected;
        }
    });

    // Actualizamos el ícono después de seleccionar una opción y recargamos la página
    $('#motivo').on('change', function() {
        // Eliminar el check de todas las opciones al cambiar la selección
        $('#motivo option').each(function() {
            var option = $(this);
            // Eliminar el ícono de check si la opción no está seleccionada
            option.text(option.text().replace('<i class="fas fa-check"></i>', ''));
        });

        // Agregar el check solo a la opción seleccionada
        var selectedOption = $(this).find('option:selected');
        var icon = '<i class="fas fa-check" style="margin-right: 5px;"></i>';
        selectedOption.text(icon + selectedOption.text()); // Prepend el ícono a la opción seleccionada

        // Recargar la página
        location.reload(); // Esto recargará la página cuando se haga una selección
    });
});
