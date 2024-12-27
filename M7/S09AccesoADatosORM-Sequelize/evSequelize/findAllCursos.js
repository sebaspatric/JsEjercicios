const Curso = require("./Curso");

async function findAllRows() {
  let cursos = await Curso.findAll({
    raw: true,
  });
  console.table(cursos);
  cursos.close;
}
findAllRows();
