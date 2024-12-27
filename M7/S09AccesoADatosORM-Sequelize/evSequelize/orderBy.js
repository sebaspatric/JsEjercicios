// importar user
const User = require("./User");

// Sequelize ORDER BY por cláusula
async function getRowsUsers() {
    let users = await User.findAll({
    order: [
    ['name', 'ASC']
    ],
    attributes: ['name', 'age'],
    raw: true
    })
    console.log(users);
    users.close;
   }
   getRowsUsers();