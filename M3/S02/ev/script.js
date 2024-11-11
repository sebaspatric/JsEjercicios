        // Función para obtener la categoría del producto
        function obtenerCategoria() {
            let categoria = prompt("Ingrese la categoría del producto (ropa/electronica):").toLowerCase();
            while (categoria !== "ropa" && categoria !== "electronica") {
                categoria = prompt("Categoría inválida. Ingrese 'ropa' o 'electronica':").toLowerCase();
            }
            return categoria;
        }

        // Función para calcular el descuento basado en la categoría
        function calcularDescuento(categoria, cantidad, precioUnidad) {
            let descuento = 0;

            if (categoria === "ropa") {
                // 5% de descuento en ropa
                descuento = precioUnidad * 0.05 * cantidad;
            } else if (categoria === "electronica") {
                // 10% de descuento en electrónica por cada producto
                descuento = precioUnidad * 0.10 * cantidad;
            }

            return descuento;
        }

        // Función para calcular el precio total con descuento
        function calcularPrecioTotal() {
            // Obtener los datos del usuario
            let categoria = obtenerCategoria();
            let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
            while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(prompt("Cantidad inválida. Ingrese un número mayor a 0:"));
            }
            let precioUnidad = parseFloat(prompt("Ingrese el precio unitario del producto:"));
            while (isNaN(precioUnidad) || precioUnidad <= 0) {
                precioUnidad = parseFloat(prompt("Precio inválido. Ingrese un precio mayor a 0:"));
            }

            // Calcular el descuento y el precio total
            let descuento = calcularDescuento(categoria, cantidad, precioUnidad);
            let precioFinal = (precioUnidad * cantidad) - descuento;

            // Mostrar los resultados al usuario
            alert("Categoría: " + categoria + "\n" +
                  "Cantidad: " + cantidad + "\n" +
                  "Precio unitario: $" + precioUnidad + "\n" +
                  "Descuento: $" + descuento + "\n" +
                  "Precio total con descuento: $" + precioFinal);
        }