const User = require("./User");
//Sequelize Update
async function updateUser(_id, _name) {
  let nameUpdate = {
    name: _name,
  };
  let user = await User.update(nameUpdate, {
    where: {
      id: _id,
    },
  });
  console.log(user);
  user.close;
}
updateUser(1, "Carlos Ramón");
