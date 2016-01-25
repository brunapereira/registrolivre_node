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

  it('returns a 200 response when post a company', function(done) {
    var company = { cnpj: '123456789-000', nome_fantasia: 'Test company' };
    request
      .post('/empresas')
      .field('cnpj', company.cnpj)
      .field('nome_fantasia', company.nome_fantasia)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
