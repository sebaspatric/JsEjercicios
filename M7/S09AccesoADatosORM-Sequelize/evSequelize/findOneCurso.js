const Curso = require("./Curso");
//Sequelize findOne
// Este método hace la búsqueda para una sola fila
Curso.findOne({
    where: {
    id: 2
    }
   }).then(curso => {
    console.log(curso.get({
    plain: true
    }));
   }).finally(() => {
    Curso.close;
   });
   