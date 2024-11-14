var closet = [
  "abrigos",
  "camisas",
  "poleras",
  "zapatos",
  "zapatillas",
  "pantalones",
  "traje",
];
console.log(closet);
// Eliminar un elemento del final de una matriz ( pop() )
console.log(`Eliminamos último elemento: '${closet.pop()}'`);
console.log(closet);

// Agregar un elemento al final de una matriz ( push() )
console.log(`Agregamos un elemento, ahora el tamaño de la matriz:
  '${closet.push("Cortavientos")}'`);
console.log(closet);

// Eliminar un elemento del principio de una matriz ( shift() )
console.log(`Eliminamos el primer elemento: '${closet.shift()}'`);
console.log(closet);

// Agregar un elemento al principio de una matriz (unshift() )

console.log(`Agregamos un elemento, ahora el tamaño de la matriz:
  '${closet.unshift("parka")}'`);
console.log(closet);

// Buscar y eliminar un elemento de una matriz (splice() )

console.log(`Buscamos 'camisas' y la eliminamos`);
closet.splice(closet.indexOf("camisas"), 1);
console.log(closet);

// Ordenar una matriz (sort() )