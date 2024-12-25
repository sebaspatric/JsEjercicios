import Curso from "./Curso.js";

(async () => {
  try {
    const nuevoCurso = new Curso("Matemáticas Avanzadas", "Curso intensivo de matemáticas para nivel universitario");
    await nuevoCurso.insert();
    console.log(`Curso '${nuevoCurso.titulo}' insertado con éxito.`);
  } catch (err) {
    console.error("Error al insertar curso:", err.message);
  }
})();
