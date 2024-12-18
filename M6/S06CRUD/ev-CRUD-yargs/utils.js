// Archivo: utils.js
const { readFile } = require('fs/promises');

const leerTareas = async () => {
    try {
        const tareas = await readFile('tareas.txt');
        return JSON.parse(tareas);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
};

module.exports = { leerTareas };