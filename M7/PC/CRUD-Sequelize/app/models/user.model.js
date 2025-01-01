module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email: campo obligatorio, y con las siguientes validaciones: formato de correo y que sea único, no repetitivo en la base de datos.
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });
  return User;
};
