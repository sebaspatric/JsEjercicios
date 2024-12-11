//rearemos un programa de Node que pueda modificar una variable con contenido en formato json,
//añadiendo objetos, y luego contar la cantidad de objetos que guarda el Array.


var mascotasJson = [
    {
    "nombre": "fluffy",
    "mascota": "true",
    "animal": "gato",
    "edadHumana": "7"
    },
    {
    "nombre": "Balto",
    "mascota": "true",
    "animal": "perro",
    "edadHumana": "11"},
    {
    "nombre": "Mandibulas",
    "mascota": "false",
    "animal": "tiburon",
    "edadHumana": "50"
    }
    ]

//Crea dos objetos en el mismo formato que presentan los que están contenidos en el Array de la variable inicial
//guarda cada uno en una variable distinta, y luego utiliza el método push de JavaScript para añadirlos a la variable inicial.

var perro = {
    "nombre": "Balto",
    "mascota": "true",
    "animal": "perro",
    "edadHumana": "11"
};

var tiburon = {
    "nombre": "Mandibulas",
    "mascota": "false",
    "animal": "tiburon",
    "edadHumana": "50"
};




    
//Imprime por consola la cantidad inicial de objetos del Array con el mensaje: “Cantidad de objetos
//inicial: número”, y la cantidad final luego de agregarle los nuevos objetos creados por ti, con el
//mensaje “Cantidad de objetos final: número”. Por último, imprime por consola el Array de objetos
//resultante de tus modificaciones.

console.log("Cantidad de objetos inicial: " + mascotasJson.length);

mascotasJson.push(perro, tiburon);
console.log("Cantidad de objetos final: " + (mascotasJson.length));
console.log(mascotasJson);

//Escribe un ejemplo de código como los revisados anteriormente, utilizando funciones de callback, y
//determina el orden de ejecución (debes tener en cuenta que el código que recibe la función de callback
//puede tomar un tiempo determinado)

function calcularEdad(animal, edadHumana, callback) {
    setTimeout(function() {
        var edadAnimal = animal === "perro"? edadHumana * 7 : edadHumana * 5;
        callback(edadAnimal);
    }, 2000);
}

calcularEdad("perro", 11, function(edadAnimal) {
    console.log("La edad del perro es: " + edadAnimal);
});

//ebes tener en cuenta que el código que recibe la función de callback puede tomar un tiempo determinado
// mostrar distintos objectPosition: 

function mostrarObjeto(objeto, callback) {
    setTimeout(function() {
        console.log(objeto);
        callback();
    }, 1000);
}

var objeto1 = {
    nombre: "Fluffy",
    animal: "gato"
};

var objeto2 = {
    nombre: "Balto",
    animal: "perro"



    
};




