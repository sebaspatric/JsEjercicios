// Cargando el modulo de Express.js
const express = require("express");
// Cargando la librería de express-fileupload
const fileUpload = require("express-fileupload");
// Este variable define el puerto del computador donde la API esta disponible;
const PORT = 3000;
// Definimos la variable que inicializa la libreria Express.js
const app = express();
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";
// Middleware
app.use(
  fileUpload({
    createParentPath: true,
  })
);
// 1 - El puerto donde esta disponible la API
// 2 - Una función de llamada (callback) cuando la API esta lista

app.post("/upload", async (req, res) => {
  let fileRecived = req.files.fileName;
  let extName = fileRecived.name;
  uploadPath = "./files/" + extName;
  fileRecived.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send({
        message: err,
      });
    }
    return res.status(200).send({
      message: "Archivo Subido al Servidor",
    });
  });
});

app.get("/files", async (req, res) => {
  const directoryPath = "./files/";

  // El metodo fs.readdir
  // lee los archivos y directorios en una carpeta y devuelve una lista de strings con los nombres de estos elementos.
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({
        message: "No se puede buscar archivos en el directorio",
      });
    }
    // variable que contiene el listado de archivos
    let listFiles = [];
    //res.send(files);
    // recorremos cada archivo
    files.forEach((file) => {
      // añadimos cada archivo al listado
      listFiles.push({
        name: file,
        url: baseUrl + file,
      });
    });
    // enviamos el listado de archivos
    res.status(200).send(listFiles);
  });
});

app.get("/files/:name", async (req, res) => {
  const fileName = req.params.name;
  const directoryPath = "./files/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      return res.status(500).send({
        message: "No se puede descargar el archivo" + err,
      });
    }
  });
});

//definir readdir

//eliminacion de archivos en el servidor, metodo delete /files/:name

app.delete("/files/:name", async (req, res) => {
  const fileName = req.params.name;
  const directoryPath = "./files/";
  let listFiles = [];
  try {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "No se puede buscar archivos en el directorio",
            });
        }
        files.forEach((file) => {
                listFiles.push(file);
        });
        //verificamos si el archivo se encuentra
        let fileBusqueda = listFiles.find(l => l == fileName);
        if (!fileBusqueda) {
            return res.status(409).json({ message: "Archivo no encontrado" });
        } else {
            // eliminamos el archivo
            fs.unlinkSync(directoryPath + fileName);
            console.log('File removed');
            res.status(200).send({ message: "Archivo eliminado con éxito" });

        }
    });

  
  } catch (err){
    console.error('ocurrió algo incorrecto al eliminar el archivo ', err);
  } 
});

app.listen(PORT, () =>
  console.log(`Corriendo en el servidor, API REST subida de archivos
  express-fileupload que se esta ejecutando en: http: //localhost:${PORT}.`)
);

