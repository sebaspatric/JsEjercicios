var autoDeportivo = {
  marca: "audi",
  modelo: "r8",
  puertas: "3",
  tipoTransmision: "mecanico",
  cantidadCambios: "6",
  velocidadMaximaKMH: 350,
  asientos: "2",
  tipo: "deportivo",
};

var autoFamiliar = {
  marca: "ford",
  modelo: "explorer",
  puertas: "5",
  tipoTransmision: "automatico",
  cantidadCambios: "5",
  velocidadMaximaKMH: 200,
  asientos: "7",
  tipo: "familiar",
};

var autoActual;
var describeAuto = (auto) => {
  autoActual = auto.marca + " " + auto.modelo;
  var descripcion =
    "El " +
    auto.marca +
    " " +
    auto.modelo +
    " es un auto que consta de " +
    auto.puertas +
    " puertas. Es de cambio " +
    auto.tipoTransmision +
    " con " +
    auto.cantidadCambios +
    " velocidades. Alcanza una velocidad de " +
    auto.velocidadMaximaKMH +
    " KM/Hr y tiene capacidad para " +
    auto.asientos +
    " asientos, por lo que lo hace un perfecto auto de tipo " +
    auto.tipo +
    ".";
  console.log(autoActual);
  console.log(descripcion);
};
function retornaTipo(auto) {
  return auto.tipo;
}
describeAuto(autoFamiliar);
console.log(retornaTipo(autoFamiliar));
function retornaCantidadAsientos(auto) {
  if (auto == undefined) {
    auto = autoFamiliar;
  }

  console.log("El auto proporcionado tiene " + auto.asientos + "asientos.");
}
retornaCantidadAsientos(autoDeportivo);
autoDeportivo.velocidadMaximaKMH = 400;
autoDeportivo.asientos = 3;
arrayPropiedadesDeportivo = Object.values(autoDeportivo); // array de propiedades
for (var i = 0; i < arrayPropiedadesDeportivo.length; i++) {
  console.log(arrayPropiedadesDeportivo[i]);
}
