// fetchJsonPlaceholder.js

import fetch from 'node-fetch';  // Instalar con 'npm install node-fetch'
import fs from 'fs';
import path from 'path';
import readline from 'readline'; // Usamos readline para la entrada interactiva

// Crear la interfaz de lectura de la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Obtener la ruta correcta para el directorio de trabajo
const __dirname = path.resolve();

// Función para hacer la solicitud con un tiempo de espera
async function fetchWithTimeout(url, options, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout); // Abortamos después del tiempo de espera
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } catch (error) {
    throw new Error('Solicitud agotada por tiempo de espera');
  } finally {
    clearTimeout(id);
  }
}

// Función para obtener y guardar los datos de la API en un archivo JSON
async function fetchAndSaveData(endpoint) {
  const url = `https://jsonplaceholder.typicode.com/${endpoint}`;
  
  try {
    const response = await fetchWithTimeout(url, {}, 10000); // 10 segundos de timeout
    
    if (response.ok) {
      const data = await response.json();
      const fileName = path.join(__dirname, `${endpoint}.json`);
      
      // Guardar los datos en un archivo JSON
      fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
      console.log(`Datos de ${endpoint} guardados en ${fileName}`);
    } else {
      console.log(`Error al obtener los datos de ${endpoint}. Código de estado: ${response.status}`);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

// Función para leer los datos de un archivo JSON
function readDataFromFile(endpoint) {
  const filePath = path.join(__dirname, `${endpoint}.json`);
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return null;
}

// Función para guardar los datos modificados en un archivo JSON
function saveDataToFile(endpoint, data) {
  const filePath = path.join(__dirname, `${endpoint}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

// Función para crear nuevos datos
function createData(endpoint, newObject) {
  const data = readDataFromFile(endpoint);
  if (data) {
    data.push(newObject);
    saveDataToFile(endpoint, data);
    console.log('Nuevo dato agregado');
  }
}

// Función para actualizar los datos
function updateData(endpoint, id, updatedObject) {
  const data = readDataFromFile(endpoint);
  if (data) {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedObject };
      saveDataToFile(endpoint, data);
      console.log('Dato actualizado');
    } else {
      console.log('ID no encontrado');
    }
  }
}

// Función para eliminar datos
function deleteData(endpoint, id) {
  const data = readDataFromFile(endpoint);
  if (data) {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      saveDataToFile(endpoint, data);
      console.log('Dato eliminado');
    } else {
      console.log('ID no encontrado');
    }
  }
}

// Función para mostrar el menú y manejar la entrada del usuario
function showMenu(endpoint) {
  const data = readDataFromFile(endpoint);
  if (!data) {
    console.log('No se pudo leer los datos.');
    rl.close();
    return;
  }

  rl.question('Seleccione una operación:\n1. Leer datos\n2. Agregar datos\n3. Actualizar datos\n4. Eliminar datos\n5. Salir\nElija una opción (1-5): ', (option) => {
    switch (option) {
      case '1':
        console.log('Datos:', data);
        showMenu(endpoint);
        break;
      
      case '2':
        rl.question('Ingrese el título del nuevo objeto: ', (title) => {
          rl.question('Ingrese el cuerpo del nuevo objeto: ', (body) => {
            const newObject = { id: data.length + 1, title, body };
            createData(endpoint, newObject);
            showMenu(endpoint);
          });
        });
        break;
      
      case '3':
        rl.question('Ingrese el ID del objeto a actualizar: ', (id) => {
          rl.question('Ingrese el nuevo título: ', (title) => {
            rl.question('Ingrese el nuevo cuerpo: ', (body) => {
              updateData(endpoint, parseInt(id), { title, body });
              showMenu(endpoint);
            });
          });
        });
        break;

      case '4':
        rl.question('Ingrese el ID del objeto a eliminar: ', (id) => {
          deleteData(endpoint, parseInt(id));
          showMenu(endpoint);
        });
        break;

      case '5':
        console.log('Adiós');
        rl.close();
        break;

      default:
        console.log('Opción no válida');
        showMenu(endpoint);
        break;
    }
  });
}

// Función para manejar la entrada de la línea de comandos
const endpoint = process.argv[2];

if (['comments', 'photos', 'albums', 'todos', 'posts'].includes(endpoint)) {
  // Primero, obtenemos los datos de la API si no existen
  fetchAndSaveData(endpoint);
  
  // Mostrar el menú interactivo para operaciones CRUD
  setTimeout(() => {
    showMenu(endpoint);
  }, 2000); // Espera 2 segundos para que los datos se guarden antes de mostrar el menú
} else {
  console.log('Por favor, pasa un argumento válido: comments, photos, albums, todos o posts.');
}
