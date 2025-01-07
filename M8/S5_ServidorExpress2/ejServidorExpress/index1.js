const express = require('express')
const fileUpload = require('express-fileupload')
const util = require("util");
const fs = require('fs');
const baseUrl = "http://localhost:3000/files/";

const app = express();
const PORT = 3000;
app.get("/files", async (req, res) => {
  const directoryPath = "./files/";
  // El método fs.readdir() se utiliza para leer de forma
  // asíncrona el contenido de un directorio determinado.
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "No se puede buscar archivos en el directorio!",
      });
    }
    // Variable que contiene el listado de archivos en el servidor

    let listFiles = [];
    files.forEach((file) => {
      listFiles.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(listFiles);
  });
});

// Servidor estático para servir archivos en el directorio "/files"
//app.use("/files", express.static("./files"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});