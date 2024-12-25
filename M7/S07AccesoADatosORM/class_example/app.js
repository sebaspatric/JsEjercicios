const User = require('./userClass.js');
let user = new User(1, "usuario@test.com", "José", "Perez", 25)
// Obteniendo el atributo de email
console.log(user.email)
// Obteniendo el atributo de firstname
console.log(user.firstname)
// Obteniendo el atributo de lastname
console.log(user.lastname)
// Obteniendo toda la información por el metodo
let data = user.allUserData();
console.log(data)
// Cambiando el lastname del user con setters
user.lastname = "Sánchez"
// Verificando los cambios
console.log(user.lastname)
console.log(user.allUserData())