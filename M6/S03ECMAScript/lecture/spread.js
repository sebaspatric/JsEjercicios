const primerArray = ['dos', 'tres'];
const segundoArray = ['uno', ...primerArray, 'cuatro', 'cinco'];

console.log(primerArray); // Output: ["dos", "tres"]
console.log(segundoArray); // Output: ["uno", "dos", "tres", "uno", "dos", "tres", "cuatro", "cinco"]

//pasar valores de un array hacia los paramtros de una funcion
const arrayOriginal = ['soy', 'el', 'original'];
function retornaArray(itemUno, itemDos, itemTres) {
    return `${itemUno} ${itemDos} ${itemTres}`;
}

console.log(retornaArray(...arrayOriginal)); // Output: "soy el original"


// concatenar arrays
const objetoOriginal = {cancion : 'Uptown Funk', autor : 'Bruno Mars', year : 2014};

const objetoCopia = {...objetoOriginal, year: 2005, genero : 'Pop', album : 'Fifty Shades of Grey'};

console.log(objetoOriginal); // Output: {cancion: 'Uptown Funk', autor: 'Bruno Mars', year: 2014, genero: undefined, album: undefined}

console.log(objetoCopia); // Output: {cancion: 'Uptown Funk', autor: 'Bruno Mars', year: 2014, genero: 'Pop', album: 'Fifty Shades of Grey'}