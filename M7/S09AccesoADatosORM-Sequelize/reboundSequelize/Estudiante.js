const Sequelize = require("sequelize");
const db = require("./authenticateDB");
// Creación de la tabla user
const Estudiante = db.define("estudiantes", {
  // propiedades del objeto User
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  apellidos: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  nro_identificacion: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
});

module.exports = Estudiante;

