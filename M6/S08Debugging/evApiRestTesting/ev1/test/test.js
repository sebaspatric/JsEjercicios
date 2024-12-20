const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../index'); // Asegúrate de exportar tu servidor en index.js

chai.use(chaiHttp);

describe('Probando respuesta del servidor para la ruta /autos', () => {
    // Test para POST /autos
    it('Comprueba que el método POST responde con código 201', (done) => {
        chai
            .request(servidor)
            .post('/autos')
            .send({
                marca: 'Honda',
                modelo: 'Civic',
                año: 2023,
                color: 'Azul',
            })
            .end((error, res) => {
                chai.expect(res).to.have.status(201);
                chai.expect(res.text).to.equal('Auto agregado exitosamente.');
                done();
            });
    });

    // Test para GET /autos
    it('Comprueba que el método GET responde con código 200 y devuelve un objeto', (done) => {
        chai
            .request(servidor)
            .get('/autos')
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                done();
            });
    });

    // Test para PUT /autos
    it('Comprueba que el método PUT responde con código 200 al actualizar un auto', (done) => {
        const id = 'bce4e192'; // Asegúrate de que este ID existe en el archivo `autos.txt`
        chai
            .request(servidor)
            .put(`/autos?id=${id}`)
            .send({ color: 'Rojo' })
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal('Auto actualizado exitosamente.');
                done();
            });
    });

    // Test para DELETE /autos
    it('Comprueba que el método DELETE responde con código 200 al eliminar un auto', (done) => {
        const id = 'bce4e192'; // Asegúrate de que este ID existe en el archivo `autos.txt`
        chai
            .request(servidor)
            .delete(`/autos?id=${id}`)
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal(`El auto con id ${id} ha sido eliminado exitosamente.`);
                done();
            });
    });

    // Test para DELETE con un ID inexistente
    it('Comprueba que el método DELETE responde con código 404 si el auto no existe', (done) => {
        chai
            .request(servidor)
            .delete('/autos?id=inexistente')
            .end((error, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.text).to.equal('Auto no encontrado.');
                done();
            });
    });
});
