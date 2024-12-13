const fs = require('fs/promises');

const leerArchivo = async () => {
    try {
        const data = await fs.readFile('datos.txt', 'utf-8');
        console.log('Contenido del archivo:', data);
    } catch (error) {
        console.error('Error leyendo el archivo:', error.message);
    }
};

leerArchivo();