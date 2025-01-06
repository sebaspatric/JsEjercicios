// Importando las librerías necesarias
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");

// Inicializando la aplicación de Express
const app = express();

// Configurando middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  fileUpload({
    createParentPath: true, // Crea el directorio destino si no existe
  })
);

// Puerto donde se ejecutará la API
const PORT = 5001;

// Endpoint para la carga de archivos
app.post("/cargadearchivo", async (req, res) => {
  try {
    // Validando que exista un archivo en la solicitud
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({
        status: false,
        message: "No se subió ningún archivo.",
      });
    }

    // Procesando el archivo recibido
    let archivoRecibido = req.files.archivo;
    let nombreArchivo = archivoRecibido.name;
    let uploadPath = `./uploads/${nombreArchivo}`;

    // Validando el tipo de archivo
    if (archivoRecibido.mimetype === "text/plain") {
      // Guardar el archivo en el servidor
      archivoRecibido.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send({
            status: false,
            message: "Error al subir el archivo.",
            error: err,
          });
        }

        // Respuesta exitosa
        return res.status(200).send({
          status: true,
          message: "Archivo subido exitosamente.",
          nombreArchivo,
          ruta: uploadPath,
        });
      });
    } else {
      // Respuesta si el archivo no es válido
      return res.status(400).send({
        status: false,
        message: "Archivo no válido. Solo se permiten archivos de texto (.txt).",
      });
    }
  } catch (err) {
    // Respuesta en caso de error inesperado
    return res.status(500).send({
      status: false,
      message: "Se presentó un error inesperado.",
      error: err,
    });
  }
});

// Iniciando el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
