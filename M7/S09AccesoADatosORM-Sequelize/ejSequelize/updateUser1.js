const { update } = require("./User");
const User = require("./User");
// Sequelize creando instancias con build, save
const user = User.build({
  name: "jose",
  age: 25,
});
user
  .save()
  .then(() => {
    console.log("El nuevo usuario ha sido guardado");
  })
  .finally(() => {
    user.close;
  });
