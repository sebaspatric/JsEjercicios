function toggleLabel(input) {
    const label = input.previousElementSibling; // El label asociado
    label.style.opacity = input.value ? '1' : '0'; // Muestra o oculta el label
}

// Función que devuelve una promesa para la conversión de Fahrenheit a Celsius
function convertirPromesa(fahrenheit) {
    return new Promise((resolve, reject) => {
        //convertir texto a numero
        fahrenheit = parseFloat(fahrenheit);

        // Valida que el input sea un número
        if (isNaN(fahrenheit)) {
            reject("Por favor ingresa un número válido");
        } else {
            const celsius = (5 / 9) * (fahrenheit - 32);
            resolve(celsius);
        }
    });
}

// Función async para manejar la conversión de temperatura
async function convertirTemperatura() {
    const inputTemp = document.getElementById("temp-input").value;
    const resultElement = document.getElementById("celcius-result");
    
    try {
        const celsius = await convertirPromesa(parseFloat(inputTemp));
        resultElement.innerHTML = `${celsius.toFixed(2)} °C`; // Muestra el resultado con 2 decimales
    } catch (error) {
        resultElement.innerHTML = error; // En caso de error, muestra el mensaje
    }
}
