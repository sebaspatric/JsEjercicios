const User = require("./User");
// El método toma un array de objetos
let users = [
  {
    name: "José",
    age: 25,
  },
  {
    name: "Pedro",
    age: 40,
  },
  {
    name: "Carlos",
    age: 50,
  },
  {
    name: "Antonio",
    age: 18,
  },
  {
    name: "Felipe",
    age: 20,
  },
  {
    name: "Juan",
    age: 30,
  },
];
User.bulkCreate(users, {
  validate: true,
})
  .then(() => {
    console.log("Usuarios Creados ");
  })
  .catch((err) => {
    console.log("Fallo la inserción de usuarios");
    console.log(err);
  })
  .finally(() => {
    User.close;
  });
