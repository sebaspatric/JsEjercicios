var moment = require('moment');
//var config = require('./config');

//function queDiaFue(dias, idioma){
//    //moment.locale('es'); // Establece el idioma a español
//    moment.locale(config.idiomas[idioma]); // Establece el idioma a rtir //de la configuracion
//    return moment().subtract(dias, 'days').calendar();
//}

function sumaDosEnteros(enteroUno, enteroDos){
    return enteroUno + enteroDos;
}

function multiplicaDosEnteros(enteroUno, enteroDos){
    return enteroUno * enteroDos;
}

/*
crea una función que devuelva la concatenación de dos cadenas de
texto, o el largo de caracteres resultante de la concatenación de las dos cadenas de texto,
dependiendo de un valor booleano.
*/

const {useLength} = require('./config');

//
function concatenateOrLength(str1,str2) {
    const concatenated = str1 + str2;
    return useLength ? concatenated.length : concatenated;
}




//module.exports = { sumaDosEnteros: sumaDosEnteros, 
//    multiplicaDosEnteros: multiplicaDosEnteros, 
//    //queDiaFue: queDiaFue,
//    concatenateOrLength: concatenateOrLength
// };

//importacion directa
//module.exports =  
//    concatenateOrLength
// ;

 // utils.js
module.exports = {
    concatenateOrLength: concatenateOrLength
};
