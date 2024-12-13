const fs = require('fs/promises');
//.- Requerir módulo fs.
//2.- Limpiar argumentos de entrada.
//3.- Definir variables iniciales con argumentos de entrada.
const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const propiedad = argumentosEntrada[1];
const valor = argumentosEntrada[2];

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

        const nuevoObjeto = {...objetoDatos, [propiedad]: valor};
        const contenidoArchivo = JSON.stringify(nuevoObjeto, null, 2);
        escribirArchivo(contenidoArchivo);
        //await fs.writeFile('datos.txt', JSON.stringify(nuevoObjeto, null));
        console.log('Archivo actualizado correctamente');
    } catch (error) {
        console.error('Hubo un error al leer el archivo:', error.message);
    }
};

const eliminarPropiedad = async () => {
    try {
        const data = await fs.readFile('datos.txt', 'utf-8');
        if (data.length !== 0) {
            objetoDatos = JSON.parse(data);
        }
        if (objetoDatos.hasOwnProperty(propiedad)) {
            delete objetoDatos[propiedad];
            //const contenidoArchivo = JSON.stringify(objetoDatos, null, 2);
            //escribirArchivo(contenidoArchivo);
            //console.log(`Propiedad "${propiedad}" eliminada correctamente.`);
        } else {
            console.log(objetoDatos);
            console.log(propiedad);
            return console.log(`La propiedad "${propiedad}" no existe.`);
        }
        await fs.writeFile('datos.txt', JSON.stringify(objetoDatos, null, 2));
        console.log('Archivo actualizado correctamente');
    } catch (error) {
        console.error('Hubo un error al leer el archivo:', error.message);
    }
}


//4.- Verificar argumentos de entrada, buscando coincidencia con alguna de las opciones.
const validarOpcionesEntrada = () =>   { 
    switch (opcion) {
        case 'leer':
            leerArchivo();
             break;
        case 'agregar':
            // codgo para agregar o modificar propiedad
            escribirDatos();
            break;
        case 'eliminar':
            // código para eliminar propiedad
            eliminarPropiedad();
            break;
        default:
            verificaParametrosEntrada();
            console.error('Opción inválida. Debe ser leer, agregar, o eliminar.');
    }
}

//5.- Definir acciones del programa, dependiendo de opción inicial.

const leerArchivo = async () => {
    try {
        const contenidoArchivo = await fs.readFile('datos.txt', 'utf-8');
        if (contenidoArchivo.lenght == 0){
            console.log('El archivo está vacío.');
            return;
        }
        const datos = JSON.parse(contenidoArchivo);
        console.log('Datos en el archivo:');
        console.log(datos);
        //console.log(`Propiedad: ${propiedad}, Valor: ${datos[propiedad]}`);
    } catch (error) {
        console.error('Error al leer archivo:', error.message);
    }
}

// verificar parametros de entrada
const verificaParametrosEntrada = () => {
    if (argumentosEntrada.length == 0) {
        console.error('Debe especificar alguna opción: \n1.leer, \n2.agregar, o \n3.eliminar.');
        console.log('Ejemplos: \nnode programaInteractivo.js leer');
        console.log('node programaInteractivo.js agregar nombre John');
        console.log('node programaInteractivo.js eliminar nombre');
        return process.exit();
    }
    //return true;
}

validarOpcionesEntrada();