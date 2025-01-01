module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define("bootcamps", {
    title: {
      type: DataTypes.STRING,
    },
    //número que define la cantidad de sesiones (CUE) que contiene el Bootcamp, campo
//obligatorio con las siguientes validaciones: tipo entero con un valor mínimo de 5 CUE y
//como máximo 10.
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 10,
        isInt: {
          msg: "CUE debe ser un número entero",
        },
      },
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });
  return Bootcamp;
};
