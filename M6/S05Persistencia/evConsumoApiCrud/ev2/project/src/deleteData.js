import { readDataFromFile } from './readDataFromFile.js';
import { saveDataToFile } from './saveDataToFile.js';

export function deleteData(endpoint, id) {
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
