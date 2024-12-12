const autoDeportivo = {
  marca: "audi",
  modelo: "r8",
  puertas: "3",
  tipoTransmision: "mecanico",
  cantidadCambios: "6",
  velocidadMaximaKMH: 350,
  asientos: "2",
  tipo: "deportivo",
};
const autoFamiliar = {
  marca: "ford",
  modelo: "explorer",
  puertas: "5",
  tipoTransmision: "automatico",
  cantidadCambios: "5",
  velocidadMaximaKMH: 200,
  asientos: "7",
  tipo: "familiar",
};
let autoActual;
const describeAuto = ({
  marca,
  modelo,
  puertas,
  tipoTransmision,
  cantidadCambios,
  velocidadMaximaKMH,
  asientos,
  tipo,
}) => {
  autoActual = marca + " " + modelo;
  const descripcion = `El ${marca} ${modelo} es un auto que
    consta de ${puertas} puertas. Es de cambio ${tipoTransmision} con ${cantidadCambios} velocidades. Alcanza una velocidad de
${velocidadMaximaKMH} KM/Hr y tiene capacidad para
${asientos} asientos, por lo que lo hace un perfecto auto de
tipo ${tipo}. `;
  console.log(autoActual);
  console.log(descripcion);
};
const retornaTipo = (auto) => auto.tipo;
describeAuto(autoFamiliar);
console.log(retornaTipo(autoFamiliar));
const retornaCantidadAsientos = (auto = autoFamiliar) => {
  console.log("El auto proporcionado tiene " + auto.asientos + "asientos.");
};
retornaCantidadAsientos();
const autoDeportivoActualizado = {
  ...autoDeportivo,
  velocidadMaximaKMH: 400,
  asientos: 3,
};
arrayPropiedadesDeportivo = Object.values(autoDeportivo); // array de propiedades
for (propiedades of arrayPropiedadesDeportivo) {
  console.log(propiedades);
}
