const db = require("./app/models");
const bootcampController = require("./app/controllers/bootcamp.controller.js");
const userController = require("./app/controllers/user.controller.js");

const run = async () => {
  // Crear usuarios
  const user1 = await userController.createUser({
    firstName: "Mateo",
    lastName: "Díaz",
    email: "mateo.diaz@correo.com",
  });
  console.log(">> Se ha creado el usuario:", user1.dataValues);

  const user2 = await userController.createUser({
    firstName: "Santiago",
    lastName: "Mejías",
    email: "santiago.mejias@correo.com",
  });
  console.log(">> Se ha creado el usuario:", user2);

  const user3 = await userController.createUser({
    firstName: "Lucas",
    lastName: "Rojas",
    email: "lucas.rojas@correo.com",
  });
  console.log(">> Se ha creado el usuario:", user3);

  const user4 = await userController.createUser({
    firstName: "Facundo",
    lastName: "Fernandez",
    email: "facundo.fernandez@correo.com",
  });
  console.log(">> Se ha creado el usuario:", user4);

  // Crear bootcamps
  const bootcamp1 = await bootcampController.createBootcamp({
    title: "Introduciendo El Bootcamp De React",
    cue: 10,
    descripcion:
      "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
  });
  console.log(">> Creado el bootcamp:", bootcamp1);

  const bootcamp2 = await bootcampController.createBootcamp({
    title: "Bootcamp Desarrollo Web Full Stack",
    cue: 9,
    descripcion:
      "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales...",
  });
  console.log(">> Creado el bootcamp:", bootcamp2);

  const bootcamp3 = await bootcampController.createBootcamp({
    title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
    cue: 9,
    descripcion: "Domina Data Science...",
  });
  console.log(">> Creado el bootcamp:", bootcamp3);

  // Asociar usuarios a bootcamps
  await bootcampController.addUser(bootcamp1.id, user1.id); // Mateo Díaz
  await bootcampController.addUser(bootcamp1.id, user2.id); // Santiago Mejías
  console.log("--------------------------------"); //

  console.log(user1); // Verifica que contiene los datos correctos

  await bootcampController.addUser(bootcamp2.id, user1.id); // Mateo Díaz

  await bootcampController.addUser(bootcamp3.id, user1.id); // Mateo Díaz
  await bootcampController.addUser(bootcamp3.id, user2.id); // Santiago Mejías
  await bootcampController.addUser(bootcamp3.id, user3.id); // Lucas Rojas

  // Consultar un bootcamp por ID e incluir usuarios
  const _bootcamp1 = await bootcampController.findById(bootcamp1.id);
  console.log("Bootcamp:", JSON.stringify(_bootcamp1, null, 2));

  // Consultar todos los bootcamps con usuarios
  const allBootcamps = await bootcampController.findAll();
  console.log("Todos los bootcamps:", JSON.stringify(allBootcamps, null, 2));

  // Consultar usuario con ID=1 y sus Bootcamps
  const user = await userController.findUserById(1);
  console.log(user);

  // Actualizar usuario con ID=1
  const updatedUser = await userController.updateUserById(1, {
    firstName: "Pedro",
    lastName: "Sánchez",
    email: "pedro.sanchez@correo.com",
  });

  console.log(updatedUser);

  // Eliminar usuario con ID=1
  const deletedUser = await userController.deleteUserById(1);
  console.log(deletedUser);
};

// Sincronizar base de datos y ejecutar el script
// db.sequelize.sync()
db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Eliminando y resincronizando la base de datos.");
    run();
  })
  .catch((err) => {
    console.error("Hubo un error al resincronizar la base de datos:", err);
  });
