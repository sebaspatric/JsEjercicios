const Estudiante = require('./estudianteClass');
const Curso = require('./cursoClass');

// Instanciar estudiantes
const estudiante1 = new Estudiante(1, 'Juan', 'Pérez', '20', 12345);
const estudiante2 = new Estudiante(2, 'Ana', 'López', '22', 67890);

// Instanciar cursos
const curso1 = new Curso(1, 'Matemáticas', 'Curso de álgebra y geometría');
const curso2 = new Curso(2, 'Historia', 'Curso sobre la historia universal');

// Mostrar registros de estudiantes
console.log('Estudiantes registrados:');
console.log(estudiante1.obtenerEstudiante());
console.log(estudiante2.obtenerEstudiante());

// Mostrar registros de cursos
console.log('\nCursos registrados:');
console.log(curso1.obtenerCurso());
console.log(curso2.obtenerCurso());

// Modificar datos de un estudiante
estudiante1.setNombres('Juan Carlos');
estudiante1.setEdad('21');

console.log('\nEstudiante modificado:');
console.log(estudiante1.obtenerEstudiante());
