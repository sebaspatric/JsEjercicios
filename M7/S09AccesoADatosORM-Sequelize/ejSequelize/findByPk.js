const User = require("./User");

// Sequelize con async, await
async function getUser(id) {
  let user = await User.findByPk(id);
  console.log(user.get("name"));
  user.close;
}
getUser(2);
