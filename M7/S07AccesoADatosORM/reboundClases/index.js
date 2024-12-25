// index.js
const Estudiante = require('./estudianteClass');
const Curso = require('./cursoClass');

// Crear instancias de Estudiante
const estudiante1 = new Estudiante(1, "Juan", "Pérez", "20 años", 12345);
const estudiante2 = new Estudiante(2, "Ana", "López", "22 años", 67890);

// Crear instancias de Curso
const curso1 = new Curso("Matemáticas Básicas", "Curso introductorio de matemáticas");
const curso2 = new Curso("Programación en JavaScript", "Curso avanzado de JavaScript");

// Mostrar información de estudiantes
console.log("Información de Estudiantes:");
console.log(estudiante1.mostrarInformacion());
console.log(estudiante2.mostrarInformacion());

// Mostrar información de cursos
console.log("\nInformación de Cursos:");
console.log(curso1.mostrarInformacion());
console.log(curso2.mostrarInformacion());


// node index.js