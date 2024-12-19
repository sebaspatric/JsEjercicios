const http = require('http');
const animales = {
  1: {
        animal: "perro",
        razaa: "siberian husky",
        edad: 15,
  },
  2: { 
        animal: "gato", 
        razaa: "mainecoon", 
        edad: 20 
    },
};
http.createServer(function (req, res) {
      const url = new URL(req.url,`http://${req.headers.host}`);
      const params = new URLSearchParams(url.searchParams);

      if (req.url.startsWith('/animales') && req.method === 'GET') {
            res.write(JSON.stringify(animales, null, 2));
            res.end();
      }
})
.listen(3000, function () {
      console.log('Servidor escuchando en http://localhost:3000/');
});