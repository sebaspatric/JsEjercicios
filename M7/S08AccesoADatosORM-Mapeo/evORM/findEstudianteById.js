import { pool } from './dataBase.js'; // Asegúrate de que este archivo esté configurado con el pool de conexión.
import Estudiante from './Estudiante.js'; // El archivo que contiene la clase Estudiante.

(async function () {
  const estudianteId = 1; // ID del estudiante a buscar

  // Buscamos el estudiante por ID
  const estudiante = await Estudiante.findById(estudianteId);
  if (estudiante) {
    console.log(`Estudiante encontrado: ${JSON.stringify(estudiante)}`);
  } else {
    console.log(`No se encontró el estudiante con ID ${estudianteId}.`);
  }
})();
