import { pool } from './dataBase.js'; // Asegúrate de que el archivo pool.js esté configurado con la conexión a la base de datos.
import Estudiante from './Estudiante.js'; // Importa la clase Estudiante que contiene el método findAll.

// Función para probar la obtención de todos los estudiantes
(async function () {
  try {
    // Llamamos al método findAll para obtener todos los estudiantes
    const estudiantes = await Estudiante.findAll();

    if (estudiantes.length === 0) {
      console.log("No se encontraron estudiantes en la base de datos.");
    } else {
      console.log("Estudiantes encontrados:");
      // Imprimimos la información de cada estudiante
      estudiantes.forEach(estudiante => {
        console.log(`ID: ${estudiante.id}, Nombre: ${estudiante.nombres} ${estudiante.apellidos}, Edad: ${estudiante.edad}, Nro Identificación: ${estudiante.nroIdentificacion}`);
      });
    }
  } catch (err) {
    console.error("Error al obtener los estudiantes:", err.message);
  }
})();
