import { fetchWithTimeout } from './fetchWithTimeout.js';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export async function fetchAndSaveData(endpoint) {
  const url = `https://jsonplaceholder.typicode.com/${endpoint}`;
  try {
    const response = await fetchWithTimeout(url, {}, 10000);
    if (response.ok) {
      const data = await response.json();
      const fileName = path.join(__dirname, `${endpoint}.json`);
      fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
      console.log(`Datos de ${endpoint} guardados en ${fileName}`);
    } else {
      console.log(`Error al obtener los datos de ${endpoint}. Código de estado: ${response.status}`);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
