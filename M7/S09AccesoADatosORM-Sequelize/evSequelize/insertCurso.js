const Curso = require("./Curso");

// Creando instancias con el metodo create
Curso.create({
    titulo: "Matemáticas III",
    descripcion: "Curso para aprender conceptos avanzados de matemáticas.",  
    })
    .then((result) => {
    console.log('"Nuevo curso creado: ' +
    result.getDataValue('titulo') +
    ' con el id: ' + result.getDataValue('id'));
    }).catch((err) => {
    console.log('Fallo la inserción del curso');
    console.log(err);
    }).finally(() => {
        Curso.close;
    });