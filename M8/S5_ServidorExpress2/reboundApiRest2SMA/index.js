// Cargando el modulo de Express.js
const express = require("express");
// Cargando la librería de express-fileupload
const fileUpload = require("express-fileupload");
// Este variable define el puerto del computador donde la API esta disponible;
const PORT = 5001;
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
  console.log(
    `Corriendo en el servidor, API REST subida de archivos express-fileupload que se esta ejecutando en: http://localhost:${PORT}.`
  )
);

app.post("/cargadearchivo", async (req, res) => {
  try {
    // Validar que se hayan subido archivos
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({
        status: false,
        message: "No se subió ningún archivo.",
      });
    }

    // Extraer los archivos enviados
    let archivos = req.files.fileName; // `fileName` debe coincidir con el nombre del campo en Postman
    if (!Array.isArray(archivos)) {
      archivos = [archivos]; // Convertir en un array si solo es un archivo
    }

    // Validar que no sean más de 3 archivos
    if (archivos.length > 3) {
      return res.status(400).send({
        status: false,
        message: "Solo se permiten un máximo de 3 archivos.",
      });
    }

    // Configuración para validaciones
    const extensionesPermitidas = ["image/png", "image/jpeg"];
    const tamanoMaximo = 1 * 1024 * 1024; // 1MB

    // Procesar cada archivo
    const rutasSubidas = [];
    for (let archivo of archivos) {
      // Validar el tipo de archivo
      if (!extensionesPermitidas.includes(archivo.mimetype)) {
        return res.status(400).send({
          status: false,
          message: `El archivo ${archivo.name} no es válido. Solo se permiten imágenes PNG y JPEG.`,
        });
      }

      // Validar el tamaño del archivo
      if (archivo.size > tamanoMaximo) {
        return res.status(400).send({
          status: false,
          message: `El archivo ${archivo.name} excede el tamaño máximo de 1MB.`,
        });
      }

      // Ruta de destino
      let uploadPath = `./files/${archivo.name}`;

      // Mover el archivo al servidor
      archivo.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send({
            status: false,
            message: `Error al subir el archivo ${archivo.name}.`,
            error: err,
          });
        }
      });

      rutasSubidas.push(uploadPath);
    }

    // Respuesta exitosa
    return res.status(200).send({
      status: true,
      message: "Archivos subidos exitosamente.",
      rutas: rutasSubidas,
    });
  } catch (err) {
    // Error inesperado
    return res.status(500).send({
      status: false,
      message: "Se presentó un error inesperado.",
      error: err,
    });
  }
});
