const chai = require('chai');
const chaiHttp = require('chai-http');
const {servidor} = require('../index');
//const { doesNotMatch } = require('assert');

chai.use(chaiHttp);

describe('Probando respuesta de servidor para metodo GET /comics', () => {
    it ('Comprueba que metodo GET responde con codigo 200', (done) => {
        chai.request(servidor)
           .get('/comics')
           .end((error, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });    
})