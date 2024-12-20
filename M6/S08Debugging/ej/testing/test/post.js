const chai = require('chai');
const chaiHttp = require('chai-http');
const {servidor} = require('../index');
//const { doesNotMatch } = require('assert');

chai.use(chaiHttp);

describe('Probando respuesta de servidor para metodo POST /comics', () => {
    it ('Comprueba que metodo POST responde con codigo 200', (done) => {
        chai
        .request(servidor)
           .post('/comics')
           .send({
                "titulo": "El intrépido Hombre Araña3",
                "autor": "Stan Lee",
                "issn": "12341234",
                "cantidad": 340
            })
           .end((error, res) => {
                chai.expect(res).to.have.status(200);
                done();
            })
    })    
})