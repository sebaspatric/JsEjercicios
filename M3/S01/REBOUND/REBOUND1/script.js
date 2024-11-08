document.addEventListener("DOMContentLoaded", () => {
    alert("Loaded");
    // Crear contenedor principal
    const container = document.createElement("div");
    container.className = "container";
    container.id = "welcomeBox";
    
    // Crear y agregar título principal
    const title = document.createElement("h1");
    title.innerHTML = "<b>Bienvenido a la plataforma <i>Eport</i></b>";
    container.appendChild(title);
    
    // Crear y agregar subtítulo
    const subtitle = document.createElement("h3");
    subtitle.textContent = "Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.";
    container.appendChild(subtitle);

    // Agregar contenedor a la página
    document.body.appendChild(container);

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
    timeDisplay.textContent = new Date().toLocaleTimeString(); // Mostrar la hora actual
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
    dateDisplay.textContent = new Date().toLocaleDateString(); // Mostrar la fecha actual
    dateColumn.appendChild(dateDisplay);
    
    // Agregar columnas al contenedor de hora y fecha
    timeDateContainer.appendChild(timeColumn);
    timeDateContainer.appendChild(dateColumn);
    
    // Agregar contenedor de hora y fecha a la página
    document.body.appendChild(timeDateContainer);

    // Crear contenedor para el próximo vuelo
    const flightBox = document.createElement("div");
    flightBox.className = "container";
    flightBox.id = "flightBox";
    
    const flightTitle = document.createElement("h1");
    flightTitle.innerHTML = "<b>El vuelo más próximo:</b>";
    flightBox.appendChild(flightTitle);
    
    const flightNumber = document.createElement("h3");
    flightNumber.innerHTML = 'Número de vuelo: <em id="flightNumber">1234</em>';
    flightBox.appendChild(flightNumber);
    
    const terminalNumber = document.createElement("h3");
    terminalNumber.innerHTML = 'Terminal: <em id="terminalNumber">14</em>';
    flightBox.appendChild(terminalNumber);
    
    // Agregar contenedor de vuelo a la página
    document.body.appendChild(flightBox);
});
