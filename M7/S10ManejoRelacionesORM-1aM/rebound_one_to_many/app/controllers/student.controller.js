//const { users } = require("../models");
const db = require("../models");
const Student = db.students;
const Course  = db.courses;

// Crear y Guardar Usuarios
exports.createStudent  = async (student) => {
  return await Student.create({
    nombres: student.nombres,
    apellidos: student.apellidos,
    edad: student.edad,
    nro_identificacion: student.nro_identificacion,
  })
    .then((student) => {
      console.log(
        `>> Se ha creado el estudiante: ${JSON.stringify(student, null, 4)}`
      );
      return student;
    })
    .catch((err) => {
      console.log(`>> Error al crear el estudiante: ${err}`);
    });
};

// Crear y guardar un nuevo proyecto
exports.createCourse = (studentId, course) => {
  return Course.create({
    titulo: course.titulo,
    descripcion: course.descripcion,
    studentId: studentId,
  })
    .then((course) => {
      console.log(`>> Curso creado: ${JSON.stringify(course, null, 4)}`);
      return course;
    })
    .catch((err) => {
      console.log(`>> Error al crear el curso: ${err}`);
    });
};

// obtener los proyectos de un usuario
exports.findStudentById  = (studentId) => {
  return Student.findByPk(studentId, {
    include: ["courses"], // Incluye los cursos asociados
  })
    .then((student) => {
      return student;
    })
    .catch((err) => {
      console.log(`>> Error al buscar el estudiante: ${err}`);
    });
};

// Obtener un curso por ID con su estudiante
exports.findCourseById  = (courseId) => {
  return Course.findByPk(courseId, {
    include: ["student"], // Incluye el estudiante asociado
  })
    .then((course) => {
      return course;
    })
    .catch((err) => {
      console.log(`>> Error al buscar el curso: ${err}`);
    });
};

// obtener todos los Usuarios incluyendo los proyectos
exports.findAllStudents  = () => {
  return Student.findAll({
    include: ["courses"],
  }).then((students) => {
    return students;
  })
  .catch((err) => {
    console.log(`>> Error al obtener todos los estudiantes: ${err}`);
  });
};
