const Sequelize = require(`sequelize`);
const sequelize = new Sequelize(`database``username`, `password`, {
  host: `localhost`,
  dialect: `postgres`,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log("No se Conectó");
  });
