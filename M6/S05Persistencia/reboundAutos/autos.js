const fs = require('fs/promises');
const filePath = 'autos.json';

// Limpiar argumentos de entrada
const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const auto = argumentosEntrada[1];
const propiedad = argumentosEntrada[2];
const valor = argumentosEntrada[3];

let objetoDatos = {};

// Función para leer el archivo JSON
const leerArchivo = async () => {
  try {
    const contenido = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('El archivo no existe. Creando uno nuevo...');
      await escribirArchivo({});
      return {};
    }
    throw error;
  }
};

// Función para escribir en el archivo JSON
const escribirArchivo = async (contenido) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(contenido, null, 2), 'utf-8');
    console.log('Archivo actualizado correctamente.');
  } catch (error) {
    console.error('Error al escribir en el archivo:', error.message);
  }
};

// Opción para leer el archivo completo
const leerArchivoCompleto = async () => {
  const datos = await leerArchivo();
  console.log(datos);
};

// Opción para leer las características de un auto en particular
const leerAuto = async () => {
  const datos = await leerArchivo();
  if (datos[auto]) {
    console.log(datos[auto]);
  } else {
    console.log(`El auto '${auto}' no existe en los datos.`);
  }
};

// Opción para añadir o modificar propiedades de un auto
const modificarAuto = async () => {
  const datos = await leerArchivo();
  if (!datos[auto]) {
    datos[auto] = {};
  }
  datos[auto][propiedad] = isNaN(valor) ? valor : Number(valor);
  await escribirArchivo(datos);
  console.log(`Propiedad '${propiedad}' del auto '${auto}' actualizada a:`, datos[auto][propiedad]);
};

// Verificar y ejecutar la opción seleccionada
const validarOpcionesEntrada = async () => {
  try {
    switch (opcion) {
      case 'leer':
        if (!auto) {
          await leerArchivoCompleto();
        } else {
          await leerAuto();
        }
        break;
      case 'modificar':
        if (!auto || !propiedad || !valor) {
          console.log('Uso: node autos.js modificar <auto> <propiedad> <valor>');
          return;
        }
        await modificarAuto();
        break;
      default:
        console.log('Opciones válidas:');
        console.log('1. Leer el archivo completo: node autos.js leer');
        console.log('2. Leer un auto específico: node autos.js leer <auto>');
        console.log('3. Modificar/añadir propiedades: node autos.js modificar <auto> <propiedad> <valor>');
    }
  } catch (error) {
    console.error('Error durante la ejecución:', error.message);
  }
};

validarOpcionesEntrada();
