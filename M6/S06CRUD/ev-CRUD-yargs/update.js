const { writeFile } = require('fs/promises');
const { leerTareas } = require('./utils');

const funcionUpdate = async ({ id, titulo, contenido }) => {
    try {
        const arrayTareas = await leerTareas();
        const tareaIndex = arrayTareas.findIndex(tarea => tarea.id === id);

        if (tareaIndex === -1) {
            console.log('Tarea no encontrada. Verifica el ID e inténtalo nuevamente.');
            return;
        }

        arrayTareas[tareaIndex].titulo = titulo || arrayTareas[tareaIndex].titulo;
        arrayTareas[tareaIndex].contenido = contenido || arrayTareas[tareaIndex].contenido;

        await writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
        console.log('Tarea actualizada con éxito!');
    } catch (error) {
        console.error('Error al actualizar la tarea:', error.message);
        console.log('No se pudo actualizar la tarea. Inténtalo nuevamente.');
    }
};

module.exports = { funcionUpdate };