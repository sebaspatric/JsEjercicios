// Archivo: create.js
const { v4: uuidv4 } = require('uuid');
const { writeFile } = require('fs/promises');
const { leerTareas } = require('./utils');

const funcionCreate = async ({ titulo, contenido }) => {
    try {
        const id = uuidv4().slice(0, 8);
        const nuevaTarea = { id, titulo, contenido };

        const arrayTareas = await leerTareas();
        arrayTareas.push(nuevaTarea);

        await writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
        console.log('Tarea creada con éxito!');
    } catch (error) {
        console.error('Error al crear la tarea:', error.message);
        console.log('No se pudo crear la tarea. Inténtalo nuevamente.');
    }
};

module.exports = { funcionCreate };