const fs = require('fs/promises');
const argumentosEntrada = process.argv.slice(2);
const color = argumentosEntrada[0];
const puntaje = argumentosEntrada[1];

let objetoDatos = {};

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
        //const objetoDatos = JSON.parse(data);
        if (data.length !== 0) {
            objetoDatos = JSON.parse(data);
        }

        const nuevoObjeto = {...objetoDatos, [color]: puntaje};
        const contenidoArchivo = JSON.stringify(nuevoObjeto, null, 2);
        escribirArchivo(contenidoArchivo);
        //await fs.writeFile('datos.txt', JSON.stringify(nuevoObjeto, null));
        console.log('Archivo actualizado correctamente');
    } catch (error) {
        console.error('Hubo un error al leer el archivo:', error.message);
    }
};


obtieneDatos();
