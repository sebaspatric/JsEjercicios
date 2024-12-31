const db = require("./app/models");
const userController = require("./app/controllers/user.controller.js");
const projectController = require("./app/controllers/project.controller.js");
//import db from "./app/models/index.js";
//import * as userController from "./app/controllers/user.controller.js";
//import * as projectController from "./app/controllers/project.controller.js";

const run = async () => {
  // Crear un Usuario
  const user1 = await userController.createUser({
    name: "José Alberto",
  });
  const user2 = await userController.createUser({
    name: "Carlos Mejias",
  });

  // Crear un proyecto
  const project1 = await projectController.createProject({
    name: "Projecto A",
  });
  const project2 = await projectController.createProject({
    name: "Proyecto X",
  });
  await projectController.addUser(project1.id, user1.id);
  await projectController.addUser(project1.id, user2.id);
  await projectController.addUser(project2.id, user1.id);

  // Consultado el proyecto(id) incluyendo los usuarios
  const _project1 = await projectController.findById(project1.id);
  console.log(" proyecto ", JSON.stringify(_project1, null, 2));
  // Consultado los usuarios (id) incluyendo los proyectos
  const _user = await userController.findUserById(user1.id);
  console.log(" user1: ", JSON.stringify(_user, null, 2));
};

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
