//objeto
var puerta = {
  //Propiedades
  cerrada: false,
  //Getter
  get getCerrada() {
  return this.cerrada;
  },
  // Setter
  set setCerrada(valor) {
  return this.cerrada = valor;
  },
  //Métodos
  abrir: function () {
  console.log('puerta abierta');
  },
  cerrar: function () {
  console.log('puerta cerrada');
  }
  };

  console.log(puerta) // Llamamos al objeto
console.log(puerta.cerrada) //Llamamos a la propiedad "cerrada" del objeto
"puerta"
// = false
console.log(puerta.setCerrada) // Utilizamos el Setter
console.log(puerta.cerrada) //

console.log("----- Fecha -----"); //
var hoydia = new Date(); //objeto “Fecha”
console.log("dia: " + hoydia.getDate()) //

console.log("mes: " + hoydia.getMonth() + 1) //numeracion del mes
console.log("año: " + hoydia.getFullYear()) //numeracion del año
// Fecha completa:
var fecha = hoydia.getDate() + '/' + (hoydia.getMonth() + 1) + '/' +
hoydia.getFullYear();
console.log("Fecha completa: " + fecha)
// Hora:
console.log("----- hora -----" );
console.log(hoydia.getHours()); // hora
console.log(hoydia.getMinutes()); // minutos
console.log(hoydia.getSeconds()); // segundos
//hora en formato hh:mm
var hora = hoydia.getHours() + ":" + hoydia.getMinutes();
console.log(hora)

console.log("----- Math -----");
// Objeto Math()
var alAzar = Math.random();
console.log(alAzar)

// notacion corchetes
console.log("notacion corchetes");

let obj = {
  gato: 'miau',
  perro: 'guau'
 };
 let sonido = obj['gato'];
 console.log(sonido); // 
