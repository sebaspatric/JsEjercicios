import { readDataFromFile } from './readDataFromFile.js';
import { saveDataToFile } from './saveDataToFile.js';

export function createData(endpoint, newObject) {
  const data = readDataFromFile(endpoint);
  if (data) {
    data.push(newObject);
    saveDataToFile(endpoint, data);
    console.log('Nuevo dato agregado');
  }
}
