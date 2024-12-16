import { readDataFromFile } from './readDataFromFile.js';
import { saveDataToFile } from './saveDataToFile.js';

export function updateData(endpoint, id, updatedObject) {
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
