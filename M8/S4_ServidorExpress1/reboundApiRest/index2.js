// Cargando el modulo de Express.js
const express = require("express");
// Cargando la librería de express-fileupload
const fileUpload = require("express-fileupload");
// Este variable define el puerto del computador donde la API esta disponible;
const PORT = 3000;
// Definimos la variable que inicializa la libreria Express.js
const app = express();
// Middleware
app.use(
  fileUpload({
    createParentPath: true,
  })
);
// 1 - El puerto donde esta disponible la API
// 2 - Una función de llamada (callback) cuando la API esta lista
app.listen(PORT, () =>
  console.log(`Corriendo en el servidor, API REST subida de archivos
express-fileupload que se esta ejecutando en: http: //localhost:${PORT}.`)
);

app.post("/upload", async (req, res) => {
  // Validando la no existencia de un archivo vacío
  if (!req.files || Object.keys(req.files).length === 0) {
    res.send({
      status: false,
      message: "Archivo no subido al servidor",
      error: "400",
    });
  } else {
    // Se procede con la subida del archivo al servidor
    let fileRecived = req.files.fileName;
    let extName = fileRecived.name;
    console.log(fileRecived);
    uploadPath = "./files/" + extName;
    //Validando que el archivo sea solo texto plano .txt
    if (fileRecived.mimetype === "text/plain") {
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
    } else {
      return res.status(400).send({
        message: "Archivo no valido, solo .txt",
      });
    }
  }
});
