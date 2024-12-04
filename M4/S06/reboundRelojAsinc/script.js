// Configuración de zonas horarias y diferencias horarias
const cities = [
    { id: "santiago", offset: 0 },
    { id: "paris", offset: 4 },
    { id: "londres", offset: 3 },
    { id: "nueva-york", offset: -1 },
    { id: "san-petersburgo", offset: 6 },
    { id: "beijing", offset: 12 },
    { id: "seul", offset: 13 },
];

// Función para actualizar la hora local
function updateTime(cityId, offset) {
    const now = new Date();
    const localTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const timeString = localTime.toLocaleTimeString("es-CL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    document.getElementById(`time-${cityId}`).textContent = timeString;
}

// Mostrar tarjetas progresivamente
cities.forEach((city, index) => {
    setTimeout(() => {
        const card = document.getElementById(city.id);
        card.style.display = "flex"; // Hace visible la tarjeta
        setInterval(() => updateTime(city.id, city.offset), 1000); // Actualiza la hora cada segundo
    }, index * 4000); // Muestra cada tarjeta con un retraso de 4 segundos
});
