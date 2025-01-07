const express = require("express");
const fileUpload = require("express-fileupload");
const util = require("util");
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";

const app = express();
const PORT = 3000;
app.get("/files/:name", async (req, res) => {
  const fileName = req.params.name;
  const directoryPath = "./files/";
  // La función res.download() transfiere el archivo en la ruta
  // como un "archivo adjunto". Por lo general, los navegadores
  // le pedirán al usuario que descargue.
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "No se puede descargar el archivo. " + err,
      });
    }
  });
});

app.delete('/files/:name', async (req, res) => {
    const fileName = req.params.name;
    const directoryPath = "./files/";
    let listFiles = [];
    try {
    fs.readdir(directoryPath, function(err, files) {
    if (err) {
    res.status(500).send({
    message: "No se puede buscar archivos en el directorio!",
    });
    }
    // Variable que contiene el listado de archivos en el servidor
    files.forEach((file) => {
    listFiles.push(file);
    });
    // verificamos si el archivo se encuentra en el directorio
    let fileBusqueda = listFiles.find(l => l === fileName);
    if (!fileBusqueda) {
    return res.status(409).json({
    message: 'No se encontró el archivo a eliminar en el servidor'
    });
    } else {
    // fs.unlinkSync elimina un archivo y espera hasta que se termine la
    // operación para seguir ejecutando el código, también se puede
    // usar fs.unlink() que ejecuta dicha operación de forma    asíncrona
    fs.unlinkSync(directoryPath + fileName);
    console.log('Archivo Eliminado');
    res.status(200).send("Archivo Eliminado Satisfactoriamente");
    }
    });
    } catch (err) {
    console.error('ocurrió algo incorrecto al eliminar el archivo',
   err)
    }

// Servidor estático para servir archivos en el directorio "/files"
app.use("/files", express.static("./files"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}

// Middleware para habilitar el uso de archivos en el request
