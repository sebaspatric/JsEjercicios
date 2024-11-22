// sintaxis:
//var p = new Proxy (target, handler);
var manejador = {
  get(target, key) {
    return key in target ? target[key] : "no existe en el objeto";
  },
};

var p = new Proxy({}, manejador);
p.a = 1;
p.b = "hola";

console.log(p.a, p.b);
console.log("c" in p, p.c);

//--------------------------------------------------------

let validador = {
  set: function (objeto, propiedad, valor) {
    // Solo validará la propiedad 'edad':
    if (propiedad === "edad") {
      // Aquí validamos de que solo sea un número:
      if (typeof valor !== "number" || Number.isNaN(valor)) {
        console.log("Edad debe ser un numero");
      }
      // Aquí validamos que sea un numero positivo:
      if (valor < 0) {
        console.log("Edad debe ser un número positivo");
      }
    }
    // Si cumple con el criterio, se asigna el valor:
    objeto[propiedad] = valor;
    return true;
  },
};
// Nuestro Proxy
let persona = new Proxy({}, validador);

console.log('fin del proxy');
//Tratamos de asignar valores a la propiedad “edad”
persona.edad = 'joven'; //Error: solo debe ser numeros
persona.edad = -36; //Error: solo numeros positvos
persona.edad = 62; //¡Perfecto!
console.log(persona.edad)
