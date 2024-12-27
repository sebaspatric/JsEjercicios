const { update } = require("./User");
const User = require("./User");
// Sequelize, búsqueda por pk, findByPk
User.findByPk(10)    
  .then((user) => {
    console.log(
      user.get({
        plain: true,
      })
    );
    console.log("********************");
    console.log(`id: ${user.id}, name: ${user.name}`);
  })
  .finally(() => {
    User.close;
  });
