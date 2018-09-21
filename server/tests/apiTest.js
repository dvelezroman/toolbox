const request = require('supertest');
const should = require('should');
const app = require('../app'); //aqui va la referencia al archivo que levanta el server 
 
/**
 * obtener respuesta 200 en la ruta /api/toolbox/test
 * devuelve un JSON con message: 'Todo Bien'
 */
describe('GET /api/toolbox/test', function () {
  it('Responde con un status 200 y la palabra Todo Bien', function (done) {
      request(app)
          .get('/api/toolbox/test')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.message.should.equal('Todo Bien');
            done();
          });
  });
});

/**
 *  recibe un texto por POST y devuelve el mismo texto hacia el cliente
 */
describe('POST /api/toolbox/', function () {
  let data = {
    text: "Texto string",
  }
  it('Responde con un status 200 y devuelve un JSON con el texto recibido', function (done) {
      let res = request(app)
          .post('/api/toolbox/')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.text.should.equal(data.text);
            done();
          });
  });
});