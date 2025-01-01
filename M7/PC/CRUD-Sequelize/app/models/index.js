const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.max,
    min: dbConfig.min,
    acquire: dbConfig.acquire,
    idle: dbConfig.idle,

  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.users = require("./user.model")(sequelize, Sequelize); // Modelo de usuario
db.bootcamps = require("./bootcamp.model")(sequelize, Sequelize); // Modelo de bootcamp

// Relación Muchos a Muchos entre Students y Courses
db.users.belongsToMany(db.bootcamps, {
  through: "user_bootcamp", // Tabla intermedia
  as: "bootcamps",            // Alias para acceder a los bootcamps desde un usuario
  foreignKey: "user_id", //  Clave foránea en la tabla intermedia (relacionada con users)
});
db.bootcamps.belongsToMany(db.users, {
  through: "user_bootcamp", // Tabla intermedia
  as: "users",           // Alias para acceder a los usuarios desde un bootcamp
  foreignKey: "bootcamp_id",  // Clave foránea en la tabla intermedia (relacionada con bootcamps)
});

// Exportar modelos y conexiones
module.exports = db;
