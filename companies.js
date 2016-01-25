var express = require('express'),
    router = express.Router();

var companies = [
  { cnpj: '0000000000-191', nome_fantasia: 'Nome fantasia da empresa'  }
]

router.get('/', function(request, response) {
  response.json(companies);
});

router.post('/', function(request, response) {
  var company = {
    cnpj: request.body.cnpj,
    nome_fantasia: request.body.nome_fantasia
  };

  companies.push(company);
  response.json(company);
});

module.exports = router;
