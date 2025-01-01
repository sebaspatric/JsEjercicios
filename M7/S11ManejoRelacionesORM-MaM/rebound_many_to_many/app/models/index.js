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
//db.users = require("./user.model")(sequelize, Sequelize);
//db.projects = require("./project.model")(sequelize, Sequelize);

// Modelos
db.students = require("./student.model")(sequelize, Sequelize);
db.courses = require("./course.model")(sequelize, Sequelize);

//db.users.belongsToMany(db.projects, {
//  through: "user_project",
//  as: "projects",
//  foreignKey: "user_id",
//});
//db.projects.belongsToMany(db.users, {
//  through: "user_project",
//  as: "users",
//  foreignKey: "project_id",
//});

// Relación Muchos a Muchos entre Students y Courses
db.students.belongsToMany(db.courses, {
  through: "student_course", // Tabla intermedia
  as: "courses",            // Alias para acceder a los cursos desde un estudiante
  foreignKey: "student_id", // Clave foránea en la tabla intermedia
});
db.courses.belongsToMany(db.students, {
  through: "student_course", // Tabla intermedia
  as: "students",           // Alias para acceder a los estudiantes desde un curso
  foreignKey: "course_id",  // Clave foránea en la tabla intermedia
});

module.exports = db;
