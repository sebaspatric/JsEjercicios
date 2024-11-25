//Así NO se puede asignar un valor a un const:
// const lenguaje; //Declaramos la variable
// lenguaje = "JavaScript" //Asignamos un valor
document.addEventListener("DOMContentLoaded", function () {

const lenguaje = "JavaScript" //Así debe ser

//const planeta = "Marte" //Un String es un valor primitivo que no se puede reasignar.
//planeta = "Tierra";
//console.log(planeta);


//Si podemos manipular las referencias a un objeto constante:
const persona = {
    nombre: 'Alex',
    Edad: 23
    }
    persona.nombre = 'Rene' //podemos cambiar PROPIEDADES
    persona.apellido = 'Smith' //incluso podemos agregar propiedades
    console.log(persona)

});