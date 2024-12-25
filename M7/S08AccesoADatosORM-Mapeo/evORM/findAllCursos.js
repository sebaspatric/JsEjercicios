import { pool } from './dataBase.js'; // Asegúrate de que este archivo esté configurado con el pool de conexión.
import Curso from './Curso.js'; // El archivo que contiene la clase Curso.

(async function () {
  try {
    // Obtenemos todos los cursos
    const cursos = await Curso.findAll();
    
    if (cursos.length === 0) {
      console.log("No se encontraron cursos en la base de datos.");
    } else {
      console.log("Cursos encontrados:");
      cursos.forEach(curso => {
        console.log(`ID: ${curso.id}, Título: ${curso.titulo}, Descripción: ${curso.descripcion}`);
      });
    }
  } catch (err) {
    console.error("Error al obtener los cursos:", err.message);
  }
})();
