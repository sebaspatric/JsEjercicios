// Requerimos el modelo User
const Curso = require('./Curso');
// Procedemos a crear la tabla user con sus propiedades
Curso.sync().then(() => {
 console.log('Nueva Tabla cursos ha sido creada');
}).finally(() => {
    Curso.close
})
