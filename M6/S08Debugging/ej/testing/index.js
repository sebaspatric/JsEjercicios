const http = require("http");
const fs = require("fs/promises");
const { creaComic } = require("./crea");
const servidor = http.createServer(async (req, res) => {
  const { searchParams, pathname } = new URL(
    req.url,
    `http://${req.headers.host}`
  );
  const params = new URLSearchParams(searchParams);
  if (pathname == "/comics" && req.method == "GET") {
    const lecturaArchivo = await fs.readFile("comics.txt");
    res.statusCode = 200;
    res.write(lecturaArchivo);
    res.end();
  }
  if (pathname == "/comics" && req.method == "POST") {
    let datosComic;
    req.on("data", (data) => {
      datosComic = JSON.parse(data);
    });
    req.on("end", async () => {
      await creaComic(datosComic);
      res.statusCode = 200; // Created status code
      res.write("Comic agregado exitosamente");
      res.end();
    });
  }
  if (pathname == "/comics" && req.method == "PUT") {
    const id = params.get("id");
    const datosArchivo = await fs.readFile("comics.txt");
    const objetoArchivoOriginal = JSON.parse(datosArchivo);
    let datosParaModificar;
    req.on("data", (datos) => {
      datosParaModificar = JSON.parse(datos);
    });
    req.on("end", async () => {
      const comicOriginal = objetoArchivoOriginal[id];
      const comicActualizado = { ...comicOriginal, ...datosParaModificar };
      objetoArchivoOriginal[id] = comicActualizado;
      await fs.writeFile(
        "comics.txt",
        JSON.stringify(objetoArchivoOriginal, null, 2)
      );
      res.statusCode = 200; // OK status code
      res.write("Los datos han sido modificados exitosamente");
      res.end();
    });
  }
  if (pathname == "/comics" && req.method == "DELETE") {
    const comicsOriginales = await fs.readFile("comics.txt");
    const objetoComicsOriginal = JSON.parse(comicsOriginales);
    const id = params.get("id");
    delete objetoComicsOriginal[id];
    await fs.writeFile(
      "comics.txt",
      JSON.stringify(objetoComicsOriginal, null, 2)
    );
    res.statusCode = 200; // No Content status code
    res.write("El comic ha sido eliminado exitosamente");
    res.end();
  }
});
servidor.listen(3000, function () {
  console.log("Servidor iniciado en puerto 3000");
});

module.exports = { servidor: servidor };
