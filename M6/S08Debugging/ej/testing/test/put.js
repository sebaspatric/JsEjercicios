const chai = require('chai');
const chaiHttp = require('chai-http');
const {servidor} = require('../index');
//const { doesNotMatch } = require('assert');

chai.use(chaiHttp);

describe('Probando respuesta de servidor para metodo PUT /comics', () => {
    it ('Comprueba que metodo PUT responde con codigo 200', (done) => {
        chai
        .request(servidor)
           .put('/comics?id=765ytrewq-890u-456v-7890-109876543210')
           .send({
                "titulo": "Capitan America",
                "autor": "Stan Lee",
                "issn": "43214321",
                "cantidad": 230
            })
           .end((error, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });    
})