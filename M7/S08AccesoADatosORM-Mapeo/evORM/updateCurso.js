import Curso from './Curso.js';  // Importar la clase Curso

(async () => {
  // Crear una instancia del curso con id, título y descripción
  const curso = new Curso('Nuevo Título', 'Descripción actualizada');
  curso.id = 1; // ID del curso a actualizar

  // Llamar al método update para actualizar el curso
  const updated = await curso.update();

  if (updated) {
    console.log('Curso actualizado correctamente.');
  } else {
    console.log('No se pudo actualizar el curso.');
  }
})();

