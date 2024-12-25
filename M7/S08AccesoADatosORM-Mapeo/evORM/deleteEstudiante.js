import Estudiante from "./Estudiante.js";

(async () => {
  const idToDelete = 3; // ID del estudiante a eliminar

  try {
    const deleted = await Estudiante.deleteById(idToDelete);

    if (deleted) {
      console.log(`Estudiante con ID ${idToDelete} eliminado exitosamente.`);
    } else {
      console.log(`Estudiante con ID ${idToDelete} no encontrado.`);
    }
  } catch (err) {
    console.error("Error eliminando estudiante:", err.message);
  }
})();
