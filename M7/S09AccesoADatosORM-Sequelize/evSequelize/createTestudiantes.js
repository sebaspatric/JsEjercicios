// Requerimos el modelo User
const Estudiante = require('./Estudiante');
// Procedemos a crear la tabla user con sus propiedades
Estudiante.sync().then(() => {
 console.log('Nueva Tabla estudiantes ha sido creada');
}).finally(() => {
    Estudiante.close
})
