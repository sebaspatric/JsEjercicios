module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nro_identificacion: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return Student;
};
