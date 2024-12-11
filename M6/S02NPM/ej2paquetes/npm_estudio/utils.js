var moment = require('moment');
var config = require('./config');

function queDiaFue(dias, idioma){
    //moment.locale('es'); // Establece el idioma a español
    moment.locale(config.idiomas[idioma]); // Establece el idioma a partir de la configuracion
    return moment().subtract(dias, 'days').calendar();
}

function sumaDosEnteros(enteroUno, enteroDos){
    return enteroUno + enteroDos;
}

function multiplicaDosEnteros(enteroUno, enteroDos){
    return enteroUno * enteroDos;
}

module.exports = { sumaDosEnteros: sumaDosEnteros, multiplicaDosEnteros: multiplicaDosEnteros, queDiaFue: queDiaFue};

