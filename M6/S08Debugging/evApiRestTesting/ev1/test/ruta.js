const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../index');

chai.use(chaiHttp);

describe('Test de rutas no implementadas', () => {
    it('Debe responder con código 404 para una ruta no implementada', (done) => {
        chai
            .request(servidor)
            .get('/ruta-no-existente')
            .end((error, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.text).to.equal('Ruta no encontrada.');
                done();
            });
    });
});
