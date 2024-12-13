const fs = require('fs/promises');

const leerArchivo = async () => {
    try {
        const data = await fs.readFile('datos.txt', 'utf-8');
        //console.log('Contenido del archivo:', data);
        if (data.length == 0) {
            console.log('El archivo está vacío.');
            return;
        }
        console.log(JSON.parse(data));
    } catch (error) {
        console.error('Error leyendo el archivo:', error.message);
    }
};

leerArchivo();