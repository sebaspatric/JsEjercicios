const Estudiante = require("./Estudiante");

async function findAllRows() {
  let estudiantes = await Estudiante.findAll({
    raw: true,
  });
  console.table(estudiantes);
  estudiantes.close;
}
findAllRows();
