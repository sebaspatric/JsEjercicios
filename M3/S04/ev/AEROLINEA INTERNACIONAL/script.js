// crea un programaa que pregunte al usuario l temperatura actul y l cantidad de tiempo libre disponible con alert


const t = prompt('Ingrese la temperatura actual (en C):');

const temperature = parseFloat(t);

// preguntar si hay lluvia con alert


const hasRain = prompt('¿Hay lluvia ahora? Ingrese "s" si o "n" si no:').toLowerCase() ==='s';



const freeTime = parseFloat(prompt('Ingrese la cantidad de tiempo libre disponible (en horas):'));



// evaluar las condiciones con poperadores ternarios

const recommendation = hasRain? 'No recomendar ir al parque' : temperature < 12 || temperature > 30 ? 'No recomendar ir al parque' : freeTime < 90? ' No recomendar ir al parque' : 'Es buen momento para hcer un picnic';

//mensaje de recomendacion

alert(`Recomendación: ${recommendation}`);
