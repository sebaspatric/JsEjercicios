// Requerimos el modelo User
const User = require('./User');
// Procedemos a crear la tabla user con sus propiedades
User.sync().then(() => {
 console.log('Nueva Tabla users ha sido creada');
}).finally(() => {
 User.close
})
