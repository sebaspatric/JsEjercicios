const User = require("./User");

// Sequelize con async, await
async function getUser(id) {
  let user = await User.findByPk(id);
  console.log(
    user.get({
      plain: true,
    })
  );
  console.log(user.get("name"));
  console.log("********************");
  console.log(`id: ${user.id}, name: ${user.name}`);
  user.close;
}
getUser(10);
