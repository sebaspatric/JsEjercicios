// CONFIGURACION:
let miPromesa = new Promise(function (miResolucion, miRechazo) {
  setTimeout(function () {
    if (false) {
      //En este caso la promesa NO se cumple
      miResolucion("Funcionó :)");
    } else {
      miRechazo("No funcionó :(");
    }
  }, 1000);
});
// LLAMADA A LA PROMESA:
miPromesa.then(
  function (value) {
    //En caso de cumplirse
    document.getElementById("d1").innerHTML = value;
  },
  function (value) {
    //En caso de fallo
    alert(value);
  }
);
// This is just a sample script. Paste your real code (JavaScript, CSS or HTML) here.
if ("this_is" == /an_example/) {
  of_beautifer();
} else {
  var a = b ? c % d : e[f];
}


miPromesa.catch(function(value) {
    console.log(value)
    })