const fs = require('fs/promises');

const escribirArchivo = async (contenido) => {
    try {
        await fs.writeFile('datos.txt', contenido, 'utf-8');
        console.log('Archivo escrito correctamente');
    } catch (error) {
        console.error('Hubo un error al escribir el archivo:', error.message);
    }
}
//escribirArchivo();
const obtieneDatos = async() => {
    try {
        const data = await fs.readFile('datos.txt', 'utf-8');
        const objetoDatos = JSON.parse(data);

        const nuevoObjeto = {...objetoDatos, nombre: 'python', asincrono: true};
        const contenidoArchivo = JSON.stringify(nuevoObjeto, null, 2);
        //console.log('Datos leidos correctamente:', data);
        escribirArchivo(contenidoArchivo);
    } catch (error) {
        console.error('Hubo un error al leer el archivo:', error.message);
    }
};


obtieneDatos();
