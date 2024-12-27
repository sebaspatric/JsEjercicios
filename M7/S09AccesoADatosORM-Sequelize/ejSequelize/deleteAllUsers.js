//importa User

const User = require("./User");

// Elimina todos los registros de la tabla user
async function deleteAllUsers() {
  let deleteAllusers = await User.destroy({
    truncate: true,
  });
  console.log("tabla users eliminada satisfactoriamente");
  deleteAllUsers.close;
}
deleteAllUsers();
