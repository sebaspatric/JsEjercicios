$(document).ready(function () {
    const updatePrice = (product) => {
        const quantity = parseInt(product.find('.quantity').text());
        const pricePerUnit = parseFloat(product.data('price'));
        const totalPrice = quantity * pricePerUnit; // Calcular el precio total
        product.find('.price').text(`$${totalPrice.toLocaleString()}`); // Mostrar el precio formateado
    };

    const updateSummary = () => {
        let totalItems = 0;
        let totalPrice = 0;

        // Recorrer todos los productos y sumar
        $('.producto').each(function () {
            const product = $(this);
            const quantity = parseInt(product.find('.quantity').text());
            const pricePerUnit = parseFloat(product.data('price'));

            totalItems += quantity;
            totalPrice += quantity * pricePerUnit;
        });

        // Obtener el costo del envío seleccionado
        const envioCost = parseFloat($('#envio').val()) || 0;

        // Calcular el precio final
        const finalPrice = totalPrice + envioCost;

        // Actualizar los valores en el resumen
        $('#total-articulos').text(`${totalItems} artículos`);
        $('#total-precio').text(`$${totalPrice.toLocaleString()}`);
        $('#precio-final').text(`$${finalPrice.toLocaleString()}`);

        // Actualizar el badge en el título del carrito
        $('.badge').text(`${totalItems} artículos`);
    };

    // Manejo de la cantidad de productos
    $('.producto').each(function () {
        const product = $(this); // El contenedor del producto

        // Incrementar cantidad
        product.find('.plus').on('click', function () {
            let quantity = parseInt(product.find('.quantity').text()); // Leer cantidad como número
            quantity++;
            product.find('.quantity').text(quantity); // Actualizar cantidad en pantalla
            updatePrice(product); // Actualizar el precio de este producto
            updateSummary(); // Actualizar resumen
        });

        // Disminuir cantidad
        product.find('.minus').on('click', function () {
            let quantity = parseInt(product.find('.quantity').text()); // Leer cantidad como número
            if (quantity > 1) {
                quantity--;
                product.find('.quantity').text(quantity); // Actualizar cantidad en pantalla
                updatePrice(product); // Actualizar el precio de este producto
                updateSummary(); // Actualizar resumen
            }
        });

        // Inicializar el precio del producto
        updatePrice(product);
    });

    // Evento para seleccionar el método de envío
    $('#envio').on('change', function () {
        updateSummary(); // Actualizar el resumen con el nuevo costo de envío
    });

    // Inicializar el resumen al cargar la página
    updateSummary();
});
