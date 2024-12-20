//const chai = require("chai");
//const chaiHttp = require("chai-http");
//const { servidor } = require("../index.js");
import chai from "chai";
import chaiHttp from "chai-http";
import { servidor } from "../index.js"; // Importa el servidor desde index.js

chai.use(chaiHttp);
//const { assert } = chai;

describe("Probando respuesta de servidor", () => {
  it('Comprueba que respuesta de servidor es el string "Respuesta desde el servidor"', () => {
    chai
    .request(servidor)
    .get('/')
    .end((error, response) => {
        chai.assert.equal(
            response.text, 
            'Respuesta desde el servidor',
            //response.status, 201,
            'La respuesta no ha sido la esperada');
            //done(); // Indicamos que la prueba ha finalizado
    });
  });
});
