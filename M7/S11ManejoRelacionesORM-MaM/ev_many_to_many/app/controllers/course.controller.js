const { students, courses } = require('../models');
const db = require('../models');
const Course = db.courses;
const Student = db.students;

// Crear y guardar un nuevo curso
exports.createCourse = (course) => {
    return Course.create({
      titulo: course.titulo,
      descripcion: course.descripcion,
    })
      .then((course) => {
        console.log(`>> Creado el curso: ${JSON.stringify(course, null, 4)}`);
        return course;
      })
      .catch((err) => {
        console.log(`>> Error al crear el curso: ${err}`);
      });
  };

  // Agregar un estudiante al curso
exports.addStudent = (courseId, studentId) => {
    return Course.findByPk(courseId)
      .then((course) => {
        if (!course) {
          console.log("No se encontró el curso!");
          return null;
        }
        return Student.findByPk(studentId).then((student) => {
          if (!student) {
            console.log("Estudiante no encontrado!");
            return null;
          }
          course.addStudent(student); // Usa la relación muchos a muchos
          console.log('***************************');
          console.log(`>> Agregado el estudiante id=${student.id} al curso con id=${course.id}`);
          console.log('***************************');
          return course;
        });
      })
      .catch((err) => {
        console.log(">> Error mientras se estaba agregando el Estudiante al Curso", err);
      });
  };

         // Obtener un curso por ID e incluir estudiantes
exports.findCourseById = (courseId) => {
  return Course.findByPk(courseId, {
    include: [
      {
        model: Student,
        as: "students",
        attributes: ["id", "nombres", "apellidos"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((course) => {
      return course;
    })
    .catch((err) => {
      console.log(`>> Error mientras se encontraba el curso: ${err}`);
    });
};
// Obtener todos los cursos e incluir estudiantes
exports.findAllCourses = () => {
    return Course.findAll({
      include: [
        {
          model: Student,
          as: "students",
          attributes: ["id", "nombres", "apellidos"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((courses) => {
        return courses;
      })
      .catch((err) => {
        console.log(">> Error al buscar los cursos: ", err);
      });
  };