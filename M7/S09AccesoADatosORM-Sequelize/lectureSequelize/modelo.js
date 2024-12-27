const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Usuario = sequelize.define("Usuario", {
  id: { type: DataTypes.SMALLINT, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: DataTypes.STRING,
  email: DataTypes.STRING,
  clave: DataTypes.STRING,

  sequelize, // Es necesario pasar la instancia de la conexión
  modelName: "Usuario", // Es necesario incluir el nombre del modelo
});

// REALIZANDO OPERACIONES CRUD (CREACIÓN, LECTURA, ACTUALIZACIÓN Y ELIMINACIÓN)
const manuel = await User.create({ nombre: "Manuel", apellido: "Pérez" });
//const users = await User.findAll();
//const users = await User.findAll({
//    attributes: ['nombre', 'apellido', 'email']
//    });

const users = await User.findAll({
  attributes: [
    "nombre",
    [sequelize.fn("COUNT", sequelize.col("edad"), "edades")],
    "apellido",
    "email",
  ],
});

const users2 = await User.findAll({
  attributes: { exclude: ["nombre"] },
});

User.findAll({
  where: {
    apellido: "Perez",
  },
});

await User.update(
  { apellido: "Perez" },
  {
    where: {
      apellido: null,
    },
  }
);

await User.destroy({
  where: {
    apellido: "Perez",
  },
});

await User.destroy({
    truncate : true
    });