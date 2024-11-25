// Función para calcular el valor del interés
const calcularInteres = (monto, interes) => monto * (interes / 100);

// Función para calcular el valor de las cuotas
const calcularCuotas = (monto, interes, cuotas) => {
    const montoTotal = monto + calcularInteres(monto, interes);  // Se suma el interés
    return montoTotal / cuotas;  // Calculamos el valor de cada cuota
};

// Función para formatear el valor de las cuotas y separar con puntos
const formatearMonto = (monto) => monto.toLocaleString('de-DE'); // Usa el formato alemán (que usa puntos como separador de miles)

// Agregar el evento al botón para hacer los cálculos
document.getElementById("calculate-btn").addEventListener("click", () => {
    // Obtener los valores de los inputs
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const installments = parseInt(document.getElementById("installments").value);

    // Verificar si los valores son válidos
    if (isNaN(amount) || isNaN(interest) || isNaN(installments) || amount <= 0 || interest <= 0 || installments <= 0) {
        alert("Por favor ingresa valores válidos en todos los campos.");
        return; // Detener la ejecución si algún valor no es válido
    }

    // Calcular el valor de la cuota
    const cuotaValue = calcularCuotas(amount, interest, installments); // Llamada a la función calcularCuotas

    // Formatear el monto de la cuota
    const cuotaValueFormatted = formatearMonto(cuotaValue); // Llamada a la función formatearMonto

    // Mostrar el resultado en el HTML
    const resultMessage = `La cantidad de cuotas es: ${installments}. El valor de cada cuota es: ${cuotaValueFormatted}.`;
    document.getElementById("result").innerText = resultMessage;
});
