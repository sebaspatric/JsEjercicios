const http = require("http");
const animales = {
  1: {
    animal: "perro",
    razaa: "siberian husky",
    edad: 15,
  },
  2: {
    animal: "gato",
    razaa: "mainecoon",
    edad: 20,
  },
};
http
  .createServer(function (req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = new URLSearchParams(url.searchParams);

    if (req.url.startsWith("/animales") && req.method === "POST") {
      let nuevoAnimal;
      req.on('data', (datos) => {
        nuevoAnimal = JSON.parse(datos);
      });
      req.on('end', () => {
        const nuevoId = Object.keys(animales).length + 1; // obtiene el numerod e objetos y sumar 1
        animales[nuevoId] = nuevoAnimal;

        res.write(JSON.stringify(animales, null, 2));

        res.end();
      })
    }
  })
  .listen(3000, function () {
    console.log("Servidor escuchando en http://localhost:3000/");
  });

/*
post
body
{
    "animal": "tiburon",
    "razaa": "uh ah ah ",
    "edad": 3
  }
*/