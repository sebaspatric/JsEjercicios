
var primer = "Este es mi primer "
var hola = 'Hola Mundo '
var js = "en JavaScript!"
console.log(primer + hola + js)

let enSerio = true
enserio = 0
console.log("valor de enSerio: "+ enSerio); // este es un boolean
console.log("valor de enserio: "+ enserio); // este es un valor numérico

let num1 = 5
let num2 = '5'
console.log("num1: "+ num1) // number
console.log("num2: "+ num2)

console.log("El tipo de valor de `num1`:" + typeof num1) //

console.log("El tipo de valor de `num2`:" + typeof num2) //

let x = 1
//cambiamos el tipo de number a String
console.log("x to String(x): " + String(x) + ", Type: " + typeof(String(x)));

// Cambiamos el tipo de number a boolean (0 = false, 1 = true) 

console.log("x to Boolean(x): " + Boolean(x) + ", Type: " + typeof(Boolean(x)));


// String a numero
console.log("1: " + Number("7.3453"));
console.log("2: " + Number(" "));
console.log("3: " + Number(""));
console.log("4: " + Number("102 32"));

var doce = '12'
console.log(doce + 3)
console.log(doce / 3)
console.log(doce * 3)
console.log(doce - 3)

alert('Hola Mundo 1');
window.onload = function() {
    alert('Hola Mundo 2');
    document.getElementById("primero").innerHTML = 'Esto es una demostración de cómo usar JavaScript';
    document.getElementById("segundo").innerHTML = "La suma de 8 y 7 es:";
    document.getElementById("resultado").innerHTML = (8 + 7);
    alert('Hola Mundo desde JavaScript');
}