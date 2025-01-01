const {
    users, bootcamps
   } = require('../models')
   const db = require('../models')
   const User = db.users;
   const Bootcamp = db.bootcamps;

   // Crear y Guardar Usuarios
   exports.createUser = (user) => {
    
    return User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })
    .then((user) => {
    console.log(`>>  Se ha creado el usuario: ${JSON.stringify(user, null, 4)}`)
    return user;
    })
    .catch(err => {
    console.log(`>> Error al crear el usuario: ${err}`)
    })
   }
   
   // Obtener los cursos de un estudiante
exports.findUserById = (userId) => {
    return User.findByPk(userId, {
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title", "descripcion", "cue"],
          through: {
            attributes: [], // Excluir atributos de la tabla intermedia
          },
        },
      ],
    })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(`>> Error mientras se encontraba el usuario: ${err}`);
      });
  };

   // obtener todos los Usuarios incluyendo los proyectos
  // Obtener todos los estudiantes incluyendo los cursos
exports.findAll = () => {
    return User.findAll({
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title", "descripcion", "cue"],
          through: {
            attributes: [], // Excluir atributos de la tabla intermedia
          },
        },
      ],
    })
      .then((users) => {
        return users;
      })
      .catch((err) => {
        console.log(`>> Error al obtener los estudiantes: ${err}`);
      });
  };

//• Actualizar usuario por Id llamado updateUserById.

// Función para actualizar un usuario por su ID
exports.updateUserById = async (userId, updatedData) => {
  try {
    const [updated] = await User.update(updatedData, {
      where: { id: userId }
    });

    if (updated) {
      console.log(`>> Usuario con id=${userId} actualizado correctamente.`);
      return { message: "Usuario actualizado correctamente." };
    } else {
      console.log(`>> No se pudo actualizar el usuario con id=${userId}.`);
      return { message: `No se encontró el usuario con id=${userId} o no se realizaron cambios.` };
    }
  } catch (err) {
    console.log(`>> Error al actualizar el usuario con id=${userId}: ${err}`);
    return { message: `Error al actualizar el usuario.` };
  }
};



// Función para eliminar un usuario por ID
exports.deleteUserById = async (userId) => {
  try {
    const deleted = await User.destroy({
      where: { id: userId }
    });

    if (deleted) {
      console.log(`>> Usuario con id=${userId} eliminado correctamente.`);
      return { message: `Usuario con id=${userId} eliminado correctamente.` };
    } else {
      console.log(`>> No se pudo eliminar el usuario con id=${userId}.`);
      return { message: `No se encontró el usuario con id=${userId}.` };
    }
  } catch (err) {
    console.log(`>> Error al eliminar el usuario con id=${userId}: ${err}`);
    return { message: `Error al eliminar el usuario.` };
  }
};
