module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("courses", {
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });
  return Course;
};
