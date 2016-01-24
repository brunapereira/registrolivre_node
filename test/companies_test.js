var should = require('chai').should(),
    expect = require('chai').expect(),
    myApp = require('../server.js'),
    request = require('supertest')(myApp);
    

describe('Company', function() {
  it('returns a 200 response', function(done){
    request.get('/api/empresas')
    .expect(200, done);
  });
});
