//
// Creación un símbolo:
//let simbolo1 = Symbol();
// Símbolo con una descripcion:
//let simbolo2 = Symbol('simbolo2'); //Esto es sólo para identificar el símbolo

//Los símbolos siempre son únicos aunque tengan el mismo valor de identificador:
let simbolo1 = Symbol("simbolo2");
let simbolo2 = Symbol("simbolo2");
console.log(simbolo1 === simbolo2);

// creamos el objeto:
let usuario = {
  id: 234,
  nombre: "Max",
  Ciudad: "Osorno",
  edad: 54,
};

// Creamos el Symbol:
const idSimbolo = Symbol("id");
// Asignamos el Symbol como una propiedad del objeto:
usuario[idSimbolo] = 123156468976513;
console.log(usuario);

// El símbolo no aparece completamente en nuestro objeto
console.log(Object.getOwnPropertyNames(usuario));

//Pero, si podemos ver el símbolo:
console.log(Object.getOwnPropertySymbols(usuario));

const VERDE = "verde";
const AMARILLO = "amarillo";
const ROJO = "rojo";
const manzana = "rojo";

function semaforo(color) {
  switch (color) {
    case ROJO:
      return "Frena el auto";
      break;
    case AMARILLO:
      return "Reduce la velocidad";
      break;
    case VERDE:
      return "Adelante";
      break;
    default:
      console.log("¡Eso no es un color!");
      break;
  }
}
semaforo();
console.log(semaforo());
console.log(semaforo(manzana)); // Adelante
console.log(semaforo(ROJO)); // Frena el auto

console.log(semaforo(AMARILLO)); // Reduce la velocidad