const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../server');

chai.use(chaiHttp);

describe('Test para CRUD de Animes', () => {
    let nuevoId;

    it('Debe listar todos los animes (GET /animes)', done => {
        chai
            .request(servidor)
            .get('/animes')
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                done();
            });
    });
    it('Debe obtener un anime por id (GET /animes?id=1)', done => {
        chai
            .request(servidor)
            .get('/animes?id=1')
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                chai.expect(res.body).to.have.property('nombre', 'Akira');
                done();
            });
    });

    it('Debe obtener un anime por nombre (GET /animes?nombre=akira)', done => {
        chai
            .request(servidor)
            .get('/animes?nombre=Akira')
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                chai.expect(res.body).to.have.property('nombre', 'Akira');
                done();
            });
    });

    it('Debe agregar un nuevo anime (POST /animes)', done => {
        chai
            .request(servidor)
            .post('/animes')
            .send({
                nombre: 'One Piece',
                genero: 'Shonen',
                año: '1999',
                autor: 'Eiichiro Oda',
            })
            .end((error, res) => {
                chai.expect(res).to.have.status(201);
                chai.expect(res.text).to.equal('Anime agregado exitosamente.');
                done();
            });
    });

    it('Debe actualizar un anime existente (PUT /animes?id=1)', done => {
        chai
            .request(servidor)
            .put('/animes?id=1')
            .send({ genero: 'Cyberpunk' })
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal('Anime actualizado exitosamente.');
                done();
            });
    });


    it('Debe eliminar un anime existente (DELETE /animes?id=2)', done => {
        chai
            .request(servidor)
            .delete('/animes?id=2')
            .end((error, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal('Anime eliminado exitosamente.');
                done();
            });
    });

    it('Debe responder con código 404 para una ruta no implementada', done => {
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
