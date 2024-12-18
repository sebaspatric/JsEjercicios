const { leerTareas } = require('./utils');

const funcionRead = async () => {
    try {
        const arrayTareas = await leerTareas();

        if (arrayTareas.length === 0) {
            console.log('No hay tareas disponibles.');
            return;
        }

        arrayTareas.forEach((tarea, index) => {
            const { titulo, contenido, id } = tarea;
            console.log(`Tarea nro ${index + 1}`);
            console.log(`- Título: ${titulo}`);
            console.log(`- Contenido: ${contenido}`);
            console.log(`- ID: ${id}\n`);
        });
    } catch (error) {
        console.error('Error al leer las tareas:', error.message);
        console.log('No se pudieron leer las tareas. Verifica el archivo e inténtalo nuevamente.');
    }
};

module.exports = { funcionRead };