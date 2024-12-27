const Estudiante = require("./Estudiante");
//Sequelize findOne
// Este método hace la búsqueda para una sola fila
Estudiante.findOne({
    where: {
    id: 2
    }
   }).then(estudiante => {
    console.log(estudiante.get({
    plain: true
    }));
   }).finally(() => {
    Estudiante.close;
   });
   