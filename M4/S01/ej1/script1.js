//des pues de que carege la pagina

document.addEventListener("DOMContentLoaded", function () {

    // Aquí NO se puede usar nombre
//function ejemploFuncion() {
 //   var nombre = "Pablo";
    // Aquí SI podemos usar nombre
    //}
    // Aquí NO se puede usar nombre
    //{
 //   var y = 5; //Alcance global
 //   let x = 3; //Alcance bloque
 // }
// console.log(y);
 //console.log(x); //No se puede acceder aquí

 //VAR
var a = 50; // Aquí a es 10
{
var a = 2; // Aquí a es 2
}
// Aquí a es 2, no conservando su valor original
//LET
let b = 100; // Aquí a es 100
{
let b = 7; // Aquí a es 7
}
// Aquí b es 100, si conservando su valor original

let i = 5;


for(let i = 0; i < 10; i++) {
// ...
}
console.log(i) // 5


  
});




// ejemploFuncion.js
//var i = 5;
for(var i = 0; i < 10; i++) {
    // ...
    }
    console.log(i) // 10
  
  // Código aquí