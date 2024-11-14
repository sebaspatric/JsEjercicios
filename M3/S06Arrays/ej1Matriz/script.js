
 var refrigerador = ['Huevos', 'Mantequilla', 'Leche', 'Verduras', 'Carne',
  'Jugo'];
  // 6 elementos

  // Tamaño del array:
console.log(`El tamaño de la matriz 'refrigerador' es
  ${refrigerador.length}`);
  
  // Accediendo a elementos índice:
console.log(`Índice 0 es ${refrigerador[0]}`);
console.log(`Índice 1 es ${refrigerador[1]}`);
console.log(`Índice 2 es ${refrigerador[2]}`);
console.log(`Índice 3 es ${refrigerador[3]}`);
console.log(`Índice 4 es ${refrigerador[4]}`);
console.log(`Índice 5 es ${refrigerador[5]}`); 

console.log(`Índice 6 es ${refrigerador[6]}`); 

console.log(refrigerador.length);
// Iteramos sobre el largo del array
for (let i = 0; i < refrigerador.length; i++) {
  console.log(`Valor del Índice ${i} es '${refrigerador[i]}'`);
}


// Accediendo a elementos índice:
console.log(`Vamos a acceder al penúltimo elemento:
  ${refrigerador[refrigerador.length - 2]}`);
  
  //Buscamos el índice:
console.log(`Verduras se encuentra en el índice
  '${refrigerador.indexOf('Verduras')}'`);