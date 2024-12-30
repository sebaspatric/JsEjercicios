const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

// Configuración de la base de datos
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.users = require("./user.model")(sequelize, Sequelize);
//db.projects = require("./project.model")(sequelize, Sequelize);

// Modelos
db.students = require("./student.model")(sequelize, Sequelize);
db.courses = require("./course.model")(sequelize, Sequelize);

//db.users.hasMany(db.projects, {
//  as: "projects",
//});

//db.projects.belongsTo(db.users, {
//  foreignKey: "userId",
//  as: "user",
//});

// Relación uno a muchos
db.students.hasMany(db.courses, { 
  as: "courses" ,
 // foreignKey: "studentId",
});

// Relación muchos a muchos
db.courses.belongsTo(db.students, { 
  foreignKey: "studentId", 
  as: "student" 
});

module.exports = db;
