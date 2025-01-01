const {
    students, courses
   } = require('../models')
   const db = require('../models')
   const Student = db.students;
   const Course = db.courses;

   // Crear y Guardar Usuarios
   exports.createStudent  = (student) => {
    return Student.create({
        nombres: student.nombres,
        apellidos: student.apellidos,
        edad: student.edad,
        nro_identificacion: student.nro_identificacion,    
    })
    .then((student) => {
    console.log(`>> Se ha creado el estudiante: ${JSON.stringify(student, null, 4)}`)
    return student
    })
    .catch(err => {
    console.log(`>> Error al crear el estudiante: ${err}`)
    })
   }
   
   // Obtener los cursos de un estudiante
exports.findStudentById = (studentId) => {
    return Student.findByPk(studentId, {
      include: [
        {
          model: Course,
          as: "courses",
          attributes: ["id", "titulo", "descripcion"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((student) => {
        return student;
      })
      .catch((err) => {
        console.log(`>> Error mientras se encontraba el estudiante: ${err}`);
      });
  };

   // obtener todos los Usuarios incluyendo los proyectos
  // Obtener todos los estudiantes incluyendo los cursos
exports.findAllStudents = () => {
    return Student.findAll({
      include: [
        {
          model: Course,
          as: "courses",
          attributes: ["id", "titulo", "descripcion"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((students) => {
        return students;
      })
      .catch((err) => {
        console.log(`>> Error al obtener los estudiantes: ${err}`);
      });
  };
