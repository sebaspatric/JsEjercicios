/**
Utiliza un ciclo for o un ciclo while, para que en cada iteración se elimine el ultimo ítem de un
Array, y luego imprima los ítems restantes; cuando el Array llegue a cero, romper ciclo y enviar
mensaje por consola advirtiendo que ya no quedan ítems en éste 
 */
// Array de ejemplo
let mascotasJson = [
    { "nombre": "fluffy", "mascota": "true", "animal": "gato", "edadHumana": "7" },
    { "nombre": "Balto", "mascota": "true", "animal": "perro", "edadHumana": "11" },
    { "nombre": "Mandibulas", "mascota": "false", "animal": "tiburon", "edadHumana": "50" }
];

// Usamos un ciclo while para eliminar el último ítem del array
while (mascotasJson.length > 0) {
    // Imprimir los elementos restantes
    console.log("Elementos restantes: ", mascotasJson);
    console.log("-------------------------");
    
    // Eliminar el último ítem del array
    mascotasJson.pop();
}

// Cuando el array esté vacío, mostrar un mensaje
console.log("El array está vacío.");
