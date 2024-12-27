// importar user
const Estudiante = require("./Estudiante");

// Sequelize ORDER BY por cláusula
async function getRowsUsers() {
    let estudiantes = await Estudiante.findAll({
    order: [
    ['nombres', 'ASC']
    ],
    attributes: ['nombres', 'apellidos', 'edad', 'nro_identificacion'],
    raw: true
    })
    console.log(estudiantes);
    estudiantes.close;
   }
   getRowsUsers();