const { users, bootcamps } = require('../models');
const db = require('../models');
const Bootcamp = db.bootcamps;
const User = db.users;

// Crear y guardar un nuevo bootcamp
exports.createBootcamp = (bootcamp) => {
    return Bootcamp.create({
      title: bootcamp.title,
      descripcion: bootcamp.descripcion,
      cue: bootcamp.cue,  // Asegúrate de pasar el campo cue
    })
      .then((bootcamp) => {
        console.log(`>> Creado el bootcamp: ${JSON.stringify(bootcamp, null, 4)}`);
        return bootcamp;
      })
      .catch((err) => {
        console.log(`>> Error al crear el bootcamp: ${err}`);
      });

  };

// Agregar un usuario al bootcamp
exports.addUser = (bootcampId, userId) => {
    return Bootcamp.findByPk(bootcampId)
      .then((bootcamp) => {
        if (!bootcamp) {
          console.log("No se encontró el bootcamp!");
          return null;
        }
        return User.findByPk(userId).then((user) => {
          if (!user) {
            console.log("Usuario no encontrado!");
            return null;
          }
          bootcamp.addUser(user); // Usa la relación muchos a muchos
          console.log('***************************');
          console.log(`>> Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`);
          console.log('***************************');
          return bootcamp;
        });
      })
      .catch((err) => {
        console.log(">> Error mientras se estaba agregando el Usuario al Bootcamp", err);
      });
  };

// Obtener un bootcamp por ID e incluir usuarios
exports.findById = (bootcampId) => {
  return Bootcamp.findByPk(bootcampId, {
    include: [
      {
        model: User,
        as: "users",
        attributes: ["id", "firstName", "lastName"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((bootcamp) => {
      return bootcamp;
    })
    .catch((err) => {
      console.log(`>> Error mientras se encontraba el bootcamp: ${err}`);
    });
};

// Obtener todos los bootcamps e incluir usuarios
exports.findAll = () => {
    return Bootcamp.findAll({
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "firstName", "lastName"],
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((bootcamps) => {
        return bootcamps;
      })
      .catch((err) => {
        console.log(">> Error al buscar los bootcamps: ", err);
      });
  };
