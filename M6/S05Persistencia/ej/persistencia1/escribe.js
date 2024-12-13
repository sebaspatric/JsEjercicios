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
const escribirDatos = async() => {
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

//escribirDatos();
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

const verificarOpcionEntrada = () => {
    switch (argumentosEntrada[0]) {
        case 'leer':
            leerArchivo();
            break;
        default:
            escribirDatos();

            console.error('Opción inválida. Use "escribir" o "leer".');
            return;
    }
}

// verificar parametros de entrada
const verificaParametrosEntrada = () => {
    if (argumentosEntrada.length == 0) {
        console.error('Debe proporcionar un color y un puntaje.');
        console.log ('tambien puedes pasar la opcion leer, para conocer el contenido del archivo datos.txt');
        return process.exit();
    }
    return true;
}

verificaParametrosEntrada();
verificarOpcionEntrada();
