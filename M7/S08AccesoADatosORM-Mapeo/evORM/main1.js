import Estudiante from "./Estudiante.js";
import Curso from "./Curso.js";

(async function () {
  try {
    // Crear las tablas
    await Estudiante.CreateTable();
    await Curso.CreateTable();

    // Insertar estudiantes
    const estudiante1 = new Estudiante("Juan", "Pérez", 20, 12345);
    await estudiante1.insert();

    const estudiante2 = new Estudiante("Ana", "García", 22, 67890);
    await estudiante2.insert();

    // Insertar cursos
    const curso1 = new Curso("Matemáticas Básicas", "Curso introductorio a matemáticas.");
    await curso1.insert();

    const curso2 = new Curso("Programación en JavaScript", "Aprende JavaScript desde cero.");
    await curso2.insert();
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
