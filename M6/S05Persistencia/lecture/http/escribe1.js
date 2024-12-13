const fs = require('fs/promises');

const escribirArchivo = async () => {
    try {
        await fs.writeFile('datos.txt', 'Cambiando Informacion de archivo', 'utf-8');
        console.log('Archivo escrito correctamente');
    } catch (error) {
        console.error('Hubo un error al escribir el archivo:', error.message);
    }
}
escribirArchivo();
