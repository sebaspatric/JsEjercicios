function calcularPrecio(tipoAsiento, cantidad) {
    // Precios de los asientos
    const precios = {
        normal: 5000,
        preferencial: 9000,
        VIP: 13000
    };

    // Verificar si la cantidad de asientos es mayor o igual a 5 para aplicar el descuento
    let descuento = 0;
    if (cantidad >= 5) {
        descuento = 0.1; // 10% de descuento
    }

    // Calcular el precio total sin descuento
    let precioTotal = precios[tipoAsiento] * cantidad;

    // Aplicar descuento si corresponde
    precioTotal -= precioTotal * descuento;

    return precioTotal;
}

function reservarAsientos() {
    let tipoAsiento;

    // Solicitar el tipo de asiento
    while (true) {
        let tipo = prompt("Seleccione el tipo de asiento:\n1. Normal\n2. Preferencial\n3. VIP\nIngrese el número correspondiente al tipo de asiento:");

        switch (tipo) {
            case "1":
                tipoAsiento = "normal";
                break;
            case "2":
                tipoAsiento = "preferencial";
                break;
            case "3":
                tipoAsiento = "VIP";
                break;
            default:
                alert("Opción no válida. Por favor, elija entre 1, 2 o 3.");
                continue;
        }
        break;
    }

    let cantidad;

    // Solicitar la cantidad de asientos
    while (true) {
        cantidad = parseInt(prompt(`¿Cuántos asientos ${tipoAsiento} desea reservar?`), 10);

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad de asientos positiva.");
        } else {
            break;
        }
    }

    // Calcular el precio total
    let precioTotal = calcularPrecio(tipoAsiento, cantidad);

    // Mostrar el resultado
    alert(`Precio total por ${cantidad} asiento(s) ${tipoAsiento}(s): $${precioTotal.toFixed(2)}`);
}

// Ejecutar la función para reservar asientos
reservarAsientos();
