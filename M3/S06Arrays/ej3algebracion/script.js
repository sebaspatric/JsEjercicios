// Usando el método filter
var edades = [32, 33, 16, 40];
var resultado = edades.filter(verificarMayorDeEdad);
function verificarMayorDeEdad(edad) {
 return edad >= 18;
}
console.log(resultado)

var frutas = ["Plátano", "Naranja", "Manzana", "Mango"];
var busqueda = frutas.includes("Mango");
console.log(busqueda);

var frutas = ["Plátano", "Naranja", "Manzana", "Mango"];
var busqueda = frutas.includes("Mango",2);
console.log(busqueda);

var numeros = [1, 2, 3];
var letras = ["a", "b", "c"];
var alfanumerico = numeros.concat(letras);
console.log(alfanumerico);


var a = [1, 2, 3]
var b = [2, 4, 5]

console.log(`mostrar lasa vaiables`);
console.log(`${a} y ${b}`);
var union = a.concat(b.filter(function (x) {
  return !a.includes(x)
 }))
 console.log(union);


 var interseccion = a.filter((function (x) {
  return b.includes(x)
 }))
 console.log(interseccion);

 var diferencia = a.concat(b).filter((function (x) {
  return !a.includes(x) || !b.includes(x)
 }));
 console.log(diferencia);

 // tamaño del arreglo
 var arreglo = [1, 2, 3, 4, 5];
 console.log(`El tamaño del arreglo es: ${arreglo.length}`);

 // invertir el arreglo
 var arregloInvertido = arreglo.reverse();
 console.log(`El arreglo invertido es: ${arregloInvertido}`);

 // ordenar el arreglo
 var arregloOrdenado = arreglo.sort((a, b) => a - b);
 console.log(`El arreglo ordenado es: ${arregloOrdenado}`);

 // buscar un elemento en el arreglo
 var elemento = 3;
 var posicion = arreglo.indexOf(elemento);