const Sequelize = require("sequelize");
const db = require("./authenticateDB");
// Creación de la tabla user
const Curso = db.define("cursos", {
  // propiedades del objeto User
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});
module.exports = Curso;

