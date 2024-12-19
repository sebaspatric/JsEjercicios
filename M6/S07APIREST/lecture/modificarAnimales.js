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

    if (req.url.startsWith("/animales") && req.method === "PUT") {
      let animal;
      req.on('data', (datos) => {
            animal = JSON.parse(datos);
      });
      req.on('end', () => {
        //const nuevoId = Object.keys(animales).length + 1; // obtiene el numerod e objetos y sumar 1
        //animales[nuevoId] = nuevoAnimal;
        const id = params.get('id');
        const animalActualizado = { ...animales[id], ...animal } //actualizando animal

        animales[id] = animalActualizado; //redefiniendo animl dentro de objeto inicial animal

        res.write(JSON.stringify(animales, null, 2));

        res.end();
      })
    }
  })
  .listen(3000, function () {
    console.log("Servidor escuchando en http://localhost:3000/");
  });

  /*
  localhost:3000/animales?id=2
  put
  body
  {
    "animal": "tiburoncin",
    "razaa": "uh ah ah ",
    "edad": 3
  }
  */ 