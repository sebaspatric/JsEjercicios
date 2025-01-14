const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./app/models');

// Importar rutas
const userRoutes = require("./routes/user.routes");
const bootcampRoutes = require("./routes/bootcamp.routes");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", userRoutes);  // Rutas de usuarios
app.use("/api", bootcampRoutes);  // Rutas de bootcamps

// Configuración de puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
