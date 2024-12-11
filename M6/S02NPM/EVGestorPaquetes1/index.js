//Importa las variables autos y animales dentro de tu archivo index.js.

// index.js
const { autos, animales } = require('./datos');

console.log(autos); // Imprime los autos
console.log(animales); // Imprime los animales
console.log(typeof(autos)); // Imprime el primer auto
console.log(typeof(animales)); //

const _ = require('lodash');

const autosUnicos = _.uniq(autos); // Filtra los autos únicos por marca

console.log('autos unicos: ',autosUnicos); // Imprime los autos únicos

// buscar un animal especifico

const animalSalvaje = _.find(animales, { tipo: 'salvaje' }); // Busca un animal llamado Slvaje

console.log('animal salvaje: ', animalSalvaje); // Imprime el animal slvaje

// Filtrar todos los animales salvajes
const animalesSalvajes = _.filter(animales, { tipo: "salvaje" });
console.log("Animales salvajes:", animalesSalvajes);
// Resultado:
// [
//   { animal: "tigre", tipo: "salvaje", nombre: "hendrix" },
//   { animal: "tiburon", tipo: "salvaje", nombre: "ray charles" }
// ]
