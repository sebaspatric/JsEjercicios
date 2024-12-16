import readline from 'readline';
import { readDataFromFile } from './readDataFromFile.js';
import { createData } from './createData.js';
import { updateData } from './updateData.js';
import { deleteData } from './deleteData.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function showMenu(endpoint) {
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
