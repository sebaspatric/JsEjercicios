//Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
//de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
//porque la definición es al interior de una función, de un bloque o fuera de ellos.

//Función con alcance de var

function varTest() {
  var x = "Variable con alcance de var";
  console.log(x);
}

varTest();

//console.log(x); // Error: x is not defined

//Función con alcance de let

function letTest() {
  let y = "Variable con alcance de let";
  console.log(y);
}

letTest();

//console.log(y); // Error: y is not defined

//Función con alcance de const

function constTest() {
  const z = "Variable con alcance de const";
  console.log(z);
}

constTest();

//console.log(z); // Error: z is not defined

//Bloque con alcance de var

{
  var w = "Variable con alcance de var dentro de un bloque";
  console.log(w);
}

console.log(w); // Variable con alcance de var dentro de un bloque


//Crear una función utilizando el formato tradicional con la palabra clave function, y luego
//volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
//dentro de una variable. La función debe recibir, al menos, dos argumentos.

function traditionalFunction(a, b) {
  return a + b;
}

const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(3, 4)); // 7

console.log(arrowFunction(3, 4)); // 7


/*
Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
características de algún animal, que contenga, al menos, cinco pares de llave - valor.
Utilizar template literals para escribir un texto empleando los valores del objeto, y
Destructuring para definir los valores del objeto dentro de la función.
*/

const animal = {
  name: "Perro",
  age: 5,
  breed: "Golden Retriever",
  color: "Golden",
  sound: "Woof!"
};

function animalInfo({ name, age, breed, color, sound }) {
  return `El animal es un ${breed}, se llama ${name}, tiene ${age} años y su sonido es ${sound}.`;
}


console.log(animalInfo(animal)); // El animal es un Golden Retriever, se llama Perro, tiene 5 años y su sonido es Woof!

/*
Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread
operator; actualizar dos campos, y añadir dos nuevos.
*/ 

const updatedAnimal = {
  ...animal,
  age: 6,
  color: "Blanco",
  favoriteToy: "Perchita",
  newFeature: "Canina pequeña"
};

console.log(updatedAnimal);
console.log(`----------`); // Ambos objetos son iguales, ya que hemos modificado una copia y no el original.


/*
Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y
luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.
*/

const animalProperties = Object.values(updatedAnimal);

for (const property of animalProperties) {
  console.log(property);
}