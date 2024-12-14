const express = require("express");

const app = express();
const port = 3000;
//app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.send("Mi respuesta desde express");
});

app.get("/contacto", (req, res) => {
    res.send("Estamos en la página de contacto");
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log("Servidor preparado en el puerto", port);
});