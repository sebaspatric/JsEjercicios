const express = require("express");
// Middleware Simple Express para cargar archivos

const fileUpload = require("express-fileupload");
const app = express();
// Usamos el Middleware con la opción que pueda crear el path
app.use(
  fileUpload({
    createParentPath: true,
  })
);
// Creamos la nueva ruta POST /upload
app.post("/upload", async (req, res) => {
  // Utilice el nombre del campo de entrada (es decir, "fileName")
  // para recuperar el archivo cargado
  let fileRecived = req.files.fileName;
  console.log(req.files);
  // Utilice el método mv() para colocar el archivo en el directorio
  // a cargar (es decir, "files")
  fileRecived.mv("./files/${fileRecived.name}", (err) => {
    if (err)
      return res.status(500).send({
        message: err,
      });
    return res.status(200).send({
      message: "Archivo Subido al Servidor",
    });
  });
});
app.listen(3000, () => console.log("Corriendo"));
