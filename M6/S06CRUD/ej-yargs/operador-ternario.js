const numero = 3;
let valorCondicional;

if (numero > 1) {
    valorCondicional = 'El número es mayor que 1';
} else if (numero === 1) {
    valorCondicional = 'El número es igual a 1';
} else {
    valorCondicional = 'El número es menor que 1';
}

console.log(valorCondicional); // Output: El número es menor que 1


const numero2 = 3;
const valorCondicional2 = numero2 > 1 ? "El numero es mayor que 1" : "El numero es menor ";

console.log(valorCondicional2); // Output: El numero es mayor que 1