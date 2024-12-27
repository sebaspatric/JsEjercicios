const User = require("./User");

async function findAllRows() {
  let users = await User.findAll({
    raw: true,
  });
  console.table(users);
  users.close;
}
findAllRows();
