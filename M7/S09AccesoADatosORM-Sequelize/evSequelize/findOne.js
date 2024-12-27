const User = require("./User");
//Sequelize findOne
// Este método hace la búsqueda para una sola fila
User.findOne({
    where: {
    id: 10
    }
   }).then(user => {
    console.log(user.get({
    plain: true
    }));
   }).finally(() => {
    User.close;
   });
   