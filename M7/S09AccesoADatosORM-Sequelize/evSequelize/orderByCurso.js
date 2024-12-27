// importar user
const Curso = require("./Curso");

// Sequelize ORDER BY por cláusula
async function getRowsUsers() {
    let cursos = await Curso.findAll({
    order: [
    ['titulo', 'ASC']
    ],
    attributes: ['titulo', 'descripcion'],
    raw: true
    })
    console.log(cursos);
    cursos.close;
   }
   getRowsUsers();