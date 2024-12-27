const Curso = require("./Curso");

// Sequelize con async, await
async function getCurso(id) {
  let curso = await Curso.findByPk(id);
  console.log(
    curso.get({
      plain: true,
    })
  );
  console.log(curso.get("titulo"));
  console.log("********************");
  console.log(`id: ${curso.id}, titulo: ${curso.titulo}`);
  curso.close;
}
getCurso(1);
