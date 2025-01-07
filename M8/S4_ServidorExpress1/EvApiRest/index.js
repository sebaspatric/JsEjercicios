// Cargando el modulo de Express.js
const express = require("express");
// Cargando la librería de express-fileupload
const fileUpload = require("express-fileupload");
// Este variable define el puerto del computador donde la API esta disponible;
const PORT = 5001;
// Definimos la variable que inicializa la libreria Express.js
const app = express();
const fs = require("fs");
const baseUrl = "http://localhost:5001/files/";
// Middleware
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// 1 - El puerto donde esta disponible la API
// 2 - Una función de llamada (callback) cuando la API esta lista
//app.listen(PORT, () =>
//  console.log(
//    `Corriendo en el servidor, API REST subida de archivos express-fileupload que se esta ejecutando en: http://localhost:${PORT}.`
//  )
//);

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

app.get("/listadodearchivos", async (req, res) => {
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

app.get("/archivo/:name", async (req, res) => {
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

app.delete("/archivo/:name", async (req, res) => {
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
