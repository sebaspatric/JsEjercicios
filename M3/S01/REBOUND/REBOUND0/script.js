document.addEventListener("DOMContentLoaded", () => {
    // Alerta para recordar documentos necesarios
    alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma");

    // Acceso a los elementos ya existentes en el HTML
    const timeDisplay = document.getElementById("insertTime");
    const dateDisplay = document.getElementById("insertDate");
    const flightNumberElement = document.getElementById("flightNumber");
    const terminalNumberElement = document.getElementById("terminalNumber");

    // Función para actualizar la hora y fecha en tiempo real
    function updateTimeAndDate() {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString();
        dateDisplay.textContent = now.toLocaleDateString();
    }

    // Actualizar cada segundo
    setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Inicializar la hora y fecha al cargar la página
   
    // Función para generar y mostrar nueva información del vuelo
    function updateFlightInfo() {
        const flightNumber = Math.floor(Math.random() * 9000) + 1000; // Número entre 1000 y 9999
        const terminalNumber = Math.floor(Math.random() * 20) + 1;   // Número entre 1 y 20

        flightNumberElement.textContent = flightNumber;
        terminalNumberElement.textContent = terminalNumber;
    }

    // Actualizar la información del vuelo cada 10 segundos
    setInterval(updateFlightInfo, 2000);
    updateFlightInfo(); // Inicializar la información del vuelo al cargar la página
});
