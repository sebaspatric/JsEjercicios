//const assert = require('chai').assert;
//const {devuelveString} = require('../utils.js');

import { assert } from 'chai'; //ESM
import { devuelveString } from '../utils.js';

describe ('Verifica string', () => {
    it('Verifica el valor entregado es string', () => {

        //const string = 'Este es un texto de prueba';
        //const number = 7;
        assert.isString(devuelveString(), 'No es una cadena');
    })
})

//npm install chai@4.3.4
//    "chai": "^4.3.4",
//"chai-http": "^4.3.4",
