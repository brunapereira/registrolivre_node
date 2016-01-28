var should = require('chai').should(),
    expect = require('chai').expect(),
    myApp = require('../server.js'),
    request = require('supertest')(myApp);
    

describe('Company', function() {
  it('returns a 200 response', function(done){
    request
      .get('/empresas')
      .expect(200, done);
  });

  it('posts a company', function(done) {
    var company = { cnpj: '123456789-000', nomeFantasia: 'Test company' };
    request
      .post('/empresas')
      .send(company)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(error, response) {
        response.status.should.equal(200);
        response.body.cnpj.should.equal(company.cnpj);
        response.body.tradename.should.equal(company.nomeFantasia);
        done();
      });
  });

  it('gets a company with specific id', function(done) {
    request
      .get('/empresas/1')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('updates a company', function(done) {
    var company = { cnpj: '123456789-123', nomeFantasia: 'Test edit company' };
    request
      .put('/empresas/1/edit')
      .send(company)
      .expect(200)
      .end(function(error, response) {
        response.body.cnpj.should.equal('123456789-123')
        response.body.tradename.should.equal('Test edit company')
        done();
      });
  });
});
