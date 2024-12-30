const db = require("./app/models");
const controller = require("./app/controllers/student.controller");
const run = async () => {
  // Crear estudiantes
  const student1 = await controller.createStudent({
    nombres: "Ana María",
    apellidos: "Gómez",
    edad: 20,
    nro_identificacion: "12345678",
  });

  const student2 = await controller.createStudent({
    nombres: "Luis Eduardo",
    apellidos: "Pérez",
    edad: 22,
    nro_identificacion: "87654321",
  });

  // Crear cursos para el estudiante 1
    const course1 = await controller.createCourse(student1.id, {
    titulo: "Matemáticas Básicas",
    descripcion: "Curso introductorio de matemáticas.",
  });

  await controller.createCourse(student1.id, {
    titulo: "Introducción a la Física",
    descripcion: "Conceptos básicos de la física.",
  });

  // Crear cursos para el estudiante 2
  const course2 = await controller.createCourse(student2.id, {
    titulo: "Programación Avanzada",
    descripcion: "Curso para aprender patrones de diseño.",
  });

  await controller.createCourse(student2.id, {
    titulo: "Diseño de Bases de Datos",
    descripcion: "Introducción a modelado y SQL.",
  });

  // Obtener un estudiante por ID con sus cursos
  const student1Data = await controller.findStudentById(student1.id);
  console.log(
    ">> Estudiante id=" + student1Data.id,
    JSON.stringify(student1Data, null, 2)
  );

  // Obtener un curso por ID con el estudiante asociado
  const courseData = await controller.findCourseById(course1.id);
  console.log(
    ">> Curso id=" + course1.id,
    JSON.stringify(courseData, null, 2)
  );

 // Obtener todos los estudiantes con sus cursos
 const allStudents = await controller.findAllStudents();
 console.log(">> Todos los Estudiantes ", JSON.stringify(allStudents, null, 2));

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
    console.error("Hubo un error al conectar a la base de datos:", err);
    process.exit(1);
  });
