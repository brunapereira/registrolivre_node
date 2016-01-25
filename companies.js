var express = require('express'),
    router = express.Router();

var companies = [
  { id: 1, cnpj: '0000000000-191', nomeFantasia: 'Nome fantasia da empresa'  }
]

router.get('/', function(request, response) {
  response.json(companies);
});

router.post('/', function(request, response) {
  var company = {
    cnpj: request.body.cnpj,
    nomeFantasia: request.body.nomeFantasia
  };

  companies.push(company);
  response.json(company);
});

router.get('/:id', function(request, response) {
  var company = companies[request.params.id - 1];
  response.json(company);
});

router.put('/:id/edit', function(request, response) {
  var company = companies[request.params.id - 1];
  company.cnpj = request.body.cnpj;
  company.nomeFantasia = request.body.nomeFantasia;
  response.json({ message: "Empresa alterada com sucesso", data: company });
});

module.exports = router;
