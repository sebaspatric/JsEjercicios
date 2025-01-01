const db = require("./app/models");
const studentController = require("./app/controllers/student.controller.js");
const courseController = require("./app/controllers/course.controller.js");
//import db from "./app/models/index.js";
//import * as userController from "./app/controllers/user.controller.js";
//import * as projectController from "./app/controllers/project.controller.js";

const run = async () => {
  // Crear estudiantes
  const student1 = await studentController.createStudent({
    nombres: "José Alberto",
    apellidos: "Gómez",
    edad: 22,
    nro_identificacion: "12345678A",

  });
  console.log(">> Se ha creado el estudiante:", student1);


  const student2 = await studentController.createStudent({

    nombres: "Carlos Mejías",
    apellidos: "Hernández",
    edad: 24,
    nro_identificacion: "87654321B",
  });
  

// Crear cursos
const course1 = await courseController.createCourse({
  titulo: "Matemáticas Avanzadas",
  descripcion: "Curso intensivo de matemáticas avanzadas.",
});
console.log(">> Creado el curso:", course1);

const course2 = await courseController.createCourse({
  titulo: "Programación en JavaScript",
  descripcion: "Curso práctico sobre desarrollo en JavaScript.",
});
console.log(">> Creado el curso:", course2);

// Asociar estudiantes a cursos
await courseController.addStudent(course1.id, student1.id);
await courseController.addStudent(course1.id, student2.id);
await courseController.addStudent(course2.id, student1.id);

  // Consultar un curso (id) incluyendo los estudiantes
  const _course1 = await courseController.findCourseById(course1.id);
  console.log("Curso: ", JSON.stringify(_course1, null, 2));

 // Consultar un estudiante (id) incluyendo los cursos
 const _student = await studentController.findStudentById(student1.id);
 console.log("Estudiante: ", JSON.stringify(_student, null, 2));
};

// db.sequelize.sync()
db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Eliminando y resincronizando la base de datos.");
    run();
  })
  .catch((err) => {
    console.error("Hubo un error al resincronizar la base de datos:", err);
  });
