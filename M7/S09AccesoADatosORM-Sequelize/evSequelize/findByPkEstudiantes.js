const Estudiante = require("./Estudiante");

// Sequelize con async, await
async function getEstudiante(id) {
  let estudiante = await Estudiante.findByPk(id);
  console.log(
    estudiante.get({
      plain: true,
    })
  );
  console.log(estudiante.get("nombres"));
  console.log("********************");
  console.log(`id: ${estudiante.id}, nombres: ${estudiante.nombres}`);
  estudiante.close;
}
getEstudiante(1);
