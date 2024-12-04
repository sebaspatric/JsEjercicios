let primeraAccion = () => console.log("primero");
let segundaAccion = () => console.log("segundo");
// pasamos primeraAccion como callback
setTimeout(primeraAccion, 3000);
segundaAccion();

function mostrarHora() {
  let d = new Date();

  document.getElementById(
    "reloj"
  ).innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
setInterval(mostrarHora, 1000);

// Definimos nuestro callback

// Definimos nuestro callback
function mostrar(algo) {
  document.getElementById("aqui").innerHTML = algo;
}
// Metodo para consumir un recurso externo
function consumirArchivo(myCallback) {
  // Se inicializa el objeto XMLHttpRequest
  let req = new XMLHttpRequest();
  // Se configura una solicitud de tipo GET
  req.open("GET", "recurso.html");
  // En esta funcion se carga los datos del doc.
  req.onload = function () {
    // Si existe el recurso, usar el contenido.
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      // Si no existe, mostrar un error.
      myCallback("Error: " + req.status);
    }
  };
  // Inicializa el request.
  req.send();
}
consumirArchivo(mostrar);

