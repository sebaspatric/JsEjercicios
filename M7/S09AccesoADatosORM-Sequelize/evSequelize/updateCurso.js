const Curso = require("./Curso");
//Sequelize Update
async function updateUser(_id, _name) {
  let nameUpdate = {
    titulo: _name,
  };
  let curso = await Curso.update(nameUpdate, {
    where: {
      id: _id,
    },
  });
  console.log(curso);
  curso.close;
}
updateUser(1, "Matematica I");
