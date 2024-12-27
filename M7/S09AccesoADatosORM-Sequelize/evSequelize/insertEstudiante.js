const Estudiante = require("./Estudiante");

// Creando instancias con el metodo create
Estudiante.create({
  nombres: "Edmundo",
  apellidos: "Gatica",
  edad: 27,
  nro_identificacion: 12349878,
})
  .then((result) => {
    console.log(
      "Nuevo estudiante creado: " +
        " " +
        result.getDataValue("nombres") +
        " " +
        result.getDataValue("apellidos") +
        " con el id: " +
        result.getDataValue("id")
    );
  })
  .catch((err) => {
    console.log("Fallo la inserción del estudiante");
    console.log(err);
  })
  .finally(() => {
    Estudiante.close;
  });
