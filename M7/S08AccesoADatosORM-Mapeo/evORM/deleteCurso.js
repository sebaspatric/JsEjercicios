import Curso from "./Curso.js";

(async () => {
  const idToDelete = 3; // ID del curso a eliminar

  try {
    const deleted = await Curso.deleteById(idToDelete);

    if (deleted) {
      console.log(`Curso con ID ${idToDelete} eliminado exitosamente.`);
    } else {
      console.log(`Curso con ID ${idToDelete} no encontrado.`);
    }
  } catch (err) {
    console.error("Error eliminando curso:", err.message);
  }
})();
