const User = require("./User");

// Creando instancias con el metodo create
User.create({
    name: "Pedro",
    age: 40
    })
    .then((result) => {
    console.log('Nuevo usuario creado: ' +
    result.getDataValue('name') +
    ' con el id: ' + result.getDataValue('id'));
    }).catch((err) => {
    console.log('Fallo la inserción del usuario');
    console.log(err);
    }).finally(() => {
    User.close;
    });