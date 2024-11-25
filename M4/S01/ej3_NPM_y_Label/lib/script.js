"use strict";

var x = "Mundo";
hola = function hola() {
  return "Hola ".concat(x);
};
var sumar = function sumar(x, y) {
  return x + y;
};
var num1 = 1;
var num2 = 2;
var suma = sumar(num1, num2);
console.log("La suma entre ".concat(num1, " y ").concat(num2, " es ").concat(suma, "."));