document.addEventListener("DOMContentLoaded", () => {
    // Alerta para recordar documentos necesarios
    alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma");

    // Crear contenedor de bienvenida
    const welcomeBox = document.createElement("div");
    welcomeBox.className = "container";
    welcomeBox.id = "welcomeBox";

    const welcomeTitle = document.createElement("h1");
    welcomeTitle.innerHTML = "<b>Bienvenido a la plataforma <i>Eport</i></b>";
    welcomeBox.appendChild(welcomeTitle);

    const welcomeSubtitle = document.createElement("h3");
    welcomeSubtitle.textContent = "Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.";
    welcomeBox.appendChild(welcomeSubtitle);

    document.body.appendChild(welcomeBox);

    // Crear contenedor para la hora y fecha
    const timeDateContainer = document.createElement("div");
    timeDateContainer.className = "container-fluid";

    // Crear columna para la hora
    const timeColumn = document.createElement("div");
    timeColumn.className = "column";
    timeColumn.id = "time";

    const timeLabel = document.createElement("h3");
    timeLabel.textContent = "Hora:";
    timeColumn.appendChild(timeLabel);

    const timeDisplay = document.createElement("h1");
    timeDisplay.id = "insertTime";
    timeColumn.appendChild(timeDisplay);

    // Crear columna para la fecha
    const dateColumn = document.createElement("div");
    dateColumn.className = "column";
    dateColumn.id = "date";

    const dateLabel = document.createElement("h3");
    dateLabel.textContent = "Fecha:";
    dateColumn.appendChild(dateLabel);

    const dateDisplay = document.createElement("h1");
    dateDisplay.id = "insertDate";
    dateColumn.appendChild(dateDisplay);

    // Agregar columnas de hora y fecha al contenedor principal
    timeDateContainer.appendChild(timeColumn);
    timeDateContainer.appendChild(dateColumn);
    document.body.appendChild(timeDateContainer);


    // Crear contenedor para información del vuelo
    const flightBox = document.createElement("div");
    flightBox.className = "container";
    flightBox.id = "flightBox";

    const flightTitle = document.createElement("h1");
    flightTitle.innerHTML = "<b>El vuelo más próximo:</b>";
    flightBox.appendChild(flightTitle);

    // Elementos para el número de vuelo y terminal
    const flightNumberElement = document.createElement("h3");
    flightNumberElement.innerHTML = 'Número de vuelo: <em id="flightNumber"></em>';
    flightBox.appendChild(flightNumberElement);

    const terminalNumberElement = document.createElement("h3");
    terminalNumberElement.innerHTML = 'Terminal: <em id="terminalNumber"></em>';
    flightBox.appendChild(terminalNumberElement);

    document.body.appendChild(flightBox);


    // funciones ---------------------------------

    // Función para actualizar la hora y fecha en tiempo real
    function updateTimeAndDate() {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString();
        dateDisplay.textContent = now.toLocaleDateString();
    }

    // Actualizar cada segundo
    setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Inicialmente actualizar la hora y fecha
   
    
    // Función para generar y mostrar nueva información del vuelo
    function updateFlightInfo() {
        const flightNumber = Math.floor(Math.random() * 9000) + 1000; // Número entre 1000 y 9999
        const terminalNumber = Math.floor(Math.random() * 20) + 1; // Número entre 1 y 20

        document.getElementById("flightNumber").textContent = flightNumber;
        document.getElementById("terminalNumber").textContent = terminalNumber;
    }
    
    // Actualizar la información del vuelo cada 10 segundos
    setInterval(updateFlightInfo, 2000);

    // Inicializar la información del vuelo
    updateFlightInfo();
});
/*



    






*/ 