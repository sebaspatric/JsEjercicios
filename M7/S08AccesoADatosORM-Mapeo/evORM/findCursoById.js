import { pool } from './dataBase.js'; // Asegúrate de que pool esté configurado correctamente.
import Curso from './Curso.js'; // Asegúrate de que la clase Curso esté bien importada.

(async function () {
  const idCurso = 1; // ID del curso que quieres buscar en la base de datos

  try {
    // Llamamos al método findCursoById para obtener el curso por ID
    const curso = await Curso.findById(idCurso);

    if (curso) {
      console.log(`Curso encontrado: ${JSON.stringify(curso)}`);
    } else {
      console.log(`No se encontró un curso con ID ${idCurso}`);
    }
  } catch (err) {
    console.error("Error al probar findCursoById:", err.message);
  }
})();
