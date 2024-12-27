const Estudiante = require("./Estudiante");
//Sequelize Update
async function updateUser(_id, _name) {
  let nameUpdate = {
    nombres: _name,
  };
  let user = await Estudiante.update(nameUpdate, {
    where: {
      id: _id,
    },
  });
  console.log(user);
  user.close;
}
updateUser(1, "Carlos Ramón");
