// Archivo: delete.js
const { writeFile } = require('fs/promises');
const _ = require('lodash');
const { leerTareas } = require('./utils');

const funcionDelete = async ({ id }) => {
    try {
        const arrayTareas = await leerTareas();

        _.remove(arrayTareas, (tarea) => tarea.id === id);

        if (arrayTareas.length === 0) {
            console.log('Tarea no encontrada. Verifica el ID e inténtalo nuevamente.');
            return;
        }

        await writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
        console.log('Tarea eliminada con éxito!');
    } catch (error) {
        console.error('Error al eliminar la tarea:', error.message);
        console.log('No se pudo eliminar la tarea. Verifica el ID e inténtalo nuevamente.');
    }
};

module.exports = { funcionDelete };