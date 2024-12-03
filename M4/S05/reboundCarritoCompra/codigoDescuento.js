$(document).ready(function () {
    const validDiscountCodes = {
        "DESCUENTO10": 10, // 10% de descuento
        "DESCUENTO20": 20, // 20% de descuento
    };

    // Función para validar el código de descuento
    function validateDiscount() {
        const code = $('#descuento').val().trim().toUpperCase(); // Obtener el valor del input
        const discount = validDiscountCodes[code] || 0; // Verificar si el código es válido
        const totalPriceElement = $('#precio-final'); // Elemento donde se muestra el precio total
        const originalPrice = calculateTotalWithoutDiscount(); // Precio sin descuento

        updateTotalPrice(originalPrice, discount, totalPriceElement);
        updateDiscountFeedback(discount);
    }

    // Función para calcular el total sin descuento
    function calculateTotalWithoutDiscount() {
        let totalItems = 0;
        let totalPrice = 0;

        // Sumar la cantidad y el precio de los artículos
        $('.producto').each(function () {
            const product = $(this);
            const quantity = parseInt(product.find('.quantity').text());
            const pricePerUnit = parseFloat(product.data('price'));

            totalItems += quantity;
            totalPrice += quantity * pricePerUnit;
        });

        // Agregar el costo de envío
        const envioCost = parseFloat($('#envio').val()) || 0;

        return totalPrice + envioCost;
    }

    // Función para actualizar el precio total
    function updateTotalPrice(originalPrice, discount, totalPriceElement) {
        const discountedPrice = originalPrice - (originalPrice * discount / 100);
        totalPriceElement.text(`$${discountedPrice.toLocaleString()}`); // Actualizar el precio total
    }

    // Función para actualizar el mensaje de retroalimentación del descuento
    function updateDiscountFeedback(discount) {
        const feedbackMessage = discount > 0 
            ? `¡Código aplicado! Descuento del ${discount}%`
            : 'Código inválido o vacío';

        const feedbackColor = discount > 0 ? 'green' : 'red';
        $('#descuento-feedback').text(feedbackMessage).css('color', feedbackColor);
    }

    // Función para actualizar el estilo del input de descuento
    function updateDiscountInputStyle(valid) {
        const style = valid ? 
            { 'background-color': '#d4edda', 'color': '#155724', 'border': '1px solid #155724' } : 
            { 'background-color': '', 'color': '', 'border': '' };

        $('#descuento').css(style);
    }

    // Manejo del evento de cambio en el input del descuento
    $('#descuento').on('input', function () {
        const inputValue = $(this).val();
        
        // Si el campo no está vacío, cambiar el fondo a celeste
        if (inputValue) {
            $(this).css({
                'background-color': '#cce5ff',
                'color': '#004085',
                'border': '1px solid #004085'
            });
        } else {
            // Si el campo está vacío, restaurar el estilo predeterminado
            $(this).css({
                'background-color': '',
                'color': '',
                'border': ''
            });
        }

        validateDiscount(); // Recalcular descuento
    });

    // Manejo del evento cuando el usuario termine de escribir (blur)
    $('#descuento').on('blur', function () {
        const code = $(this).val().toUpperCase();
        const discount = validDiscountCodes[code] || 0; // Verificar si el código es válido

        updateDiscountInputStyle(discount > 0); // Actualizar el estilo del input según la validez del código
    });

    // Escuchar cambios en los productos y en el costo de envío para actualizar el resumen
    $('.producto .plus, .producto .minus, #envio').on('click change', function () {
        validateDiscount(); // Recalcular el descuento con cambios en la cantidad o envío
    });

    // Inicializar el resumen al cargar la página
    validateDiscount();
});
