//config/database.js:
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    })
    .then(() => {
      console.log("Correctamente Conectado a la Bases de Datos");
    })
    .catch((error) => {
      console.log("Fallo de conexión de a la base de datos");
      console.error(error);
      process.exit(1);
    });
};
