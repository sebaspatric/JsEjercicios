import Estudiante from "./Estudiante.js";

(async () => {
  try {
    const nuevoEstudiante = new Estudiante("Juan", "Pérez", 25, 123456);
    await nuevoEstudiante.insert();
    console.log(`Estudiante '${nuevoEstudiante.nombres} ${nuevoEstudiante.apellidos}' insertado con éxito.`);
  } catch (err) {
    console.error("Error al insertar estudiante:", err.message);
  }
})();
