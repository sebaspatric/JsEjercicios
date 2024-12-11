// Variables globales
let countdown;
let remainingTime;

// Obtener los elementos del DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const cancelButton = document.getElementById('cancel-btn');
const secondsInput = document.getElementById('seconds-input');

// Función para actualizar el temporizador en pantalla
function updateTimer() {
    // Añadir ceros si el número es menor a 10
    let time = remainingTime < 10 ? `0${remainingTime}` : remainingTime;
    timerDisplay.textContent = time; // Actualizar el texto del temporizador
}

// Función que comienza la cuenta regresiva
function startCountdown(seconds) {
    remainingTime = seconds; // Asignar los segundos al temporizador

    // Actualizamos el temporizador al inicio
    updateTimer();

    // Iniciar el temporizador usando setInterval
    countdown = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--; // Decrementamos el tiempo
            updateTimer(); // Actualizamos la visualización
        } else {
            clearInterval(countdown); // Detenemos el temporizador cuando llegue a 0
            alert('¡Tiempo terminado!');
            startButton.disabled = false; // Habilitar el botón "Empezar"
            cancelButton.disabled = true; // Deshabilitar el botón "Cancelar"
            secondsInput.value = 0; // Restablecer el valor del input a 0
        }
    }, 1000); // Actualizar cada segundo
}

// Función para manejar el inicio
function start() {
    const seconds = parseInt(secondsInput.value);

    // Validar que el valor sea un número y mayor que 0
    if (isNaN(seconds) || seconds <= 0) {
        alert('Por favor, ingresa un número válido mayor que 0');
        return;
    }

    startButton.disabled = true; // Deshabilitar el botón de "Empezar" para evitar múltiples clics
    cancelButton.disabled = false; // Habilitar el botón de "Cancelar"
    
    startCountdown(seconds); // Iniciar la cuenta regresiva
    
}

// Función para manejar la cancelación
function cancel() {
    clearInterval(countdown); // Detener el temporizador
    remainingTime = 0; // Restablecer el tiempo a 0
    updateTimer(); // Actualizar la visualización del temporizador
    startButton.disabled = false; // Habilitar el botón de "Empezar" nuevamente
    cancelButton.disabled = true; // Deshabilitar el botón de "Cancelar"
    secondsInput.value = 0; // Restablecer el valor del input a 0
}

// Eventos de los botones
startButton.addEventListener('click', start);
cancelButton.addEventListener('click', cancel);

// Inicializar el estado del botón de cancelación
cancelButton.disabled = true;
