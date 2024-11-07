// ------------------------------------------------
alert("for");

var numero = parseInt(5);
for (var i = 0; i <= numero; i++){
    console.log(i);
}

// ------------------------------------------------
alert("while#");

var numero = parseInt(3);
while (numero) {
    console.log(numero);
    numero--;
}

// ------------------------------------------------
alert("do while#");

var numero = parseInt(4);

do {
    console.log(numero);
    numero--;
} while (numero >= 0);

// ------------------------------------------------
alert("trycacth#");
var numero = parseInt(10);
try {
    if (isNaN(numero)) {
        throw "Invalid input. Please enter a number.";
    }
    if (numero < 0) {
        throw "Negative numbers are not allowed.";
    }
    console.log(numero);
} catch (error) {
    console.error(error.name, error.message);
}
console.log("continua la ejecucion del programa");

// ------------------------------------------------
alert("arreglos javascript");
var paises = ["Chile", "Argentina", "Paraguay"];
console.log(paises);

// ------------------------------------------------
console.log("Mostrando los paises con for:");

for (var i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

// ------------------------------------------------
alert("añadir elemento: " + (paises.length +1) + " paises ");

paises.push("Uruguay");

console.log(paises);

// ------------------------------------------------
alert("añadir elemento al principio");

paises.unshift("Bolivia");

console.log(paises);

// -----------------------------------------------------

alert("eliminar elemento último: " + (paises.length));

paises.pop();

console.log(paises);

// -------------------------------------------------
alert("eliminar primer elemento");

paises.shift();

console.log(paises);

// -------------------------------------------------

alert("buscar elemento");

var indice = paises.indexOf("Argentina");

console.log("Indice de Argentina: " + indice);

// -------------------------------------------------
alert("Creando primer objeto");

var auto = new Object();
auto.color = "rojo";
auto.numeroPuertas = 4;
auto.marca = "Samsung";

auto.acelerar = function() {
    console.log("Acelerando...");
};
auto.frenar = function() {
    console.log("Frenando...");
};
alert("llamando primer objeto")
console.log(auto);
auto.frenar();
console.log(auto.marca);

//--------------------------------------------------
alert("funcion constructora");

function Auto1(color, numeroPuertas, marca, conductor) {
    this.color = color;
    this.numeroPuertas = numeroPuertas;
    this.marca = marca;
    this.conductor = conductor;
    //this.acelerar = function() {
      //  console.log("Acelerando...");
    //};
    //this.frenar = function() {
    //    console.log("Frenando...");
    //};
    //this.toString = function() {
    //    return "Auto(" + this.color + ", " + this.numeroPuertas + ", " + this.marca + ")";
    //};
    //this.imprimir = function() {
    //    console.log(this.toString());
    //};

}    
//var miAuto1 = new Auto("rojo", 4, "Nissan");
//var miAuto2 = new Auto("Negro", 2, "Suzuki");

// ---------------------------------------------
alert("objetos como propiedades de objetos");

function Conductor(nombre, tipoLicencia, edad) {
    this.nombre = nombre;
    this.tipoLicencia = tipoLicencia;
    this.edad = edad;
}

var conductor1 = new Conductor("Juan", "A", 35);
var miAuto1 = new Auto1("Rojo", 4, "Nissan", conductor1);
var miAuto2 = new Auto1("Negro", 2, "Suzuki", conductor1);

console.log(miAuto1); 
