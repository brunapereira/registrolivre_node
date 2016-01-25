var express = require('express'),
    router = express.Router();

var companies = [
  { cnpj: '0000000000-191', nome_fantasia: 'Nome fantasia da empresa'  }
]

router.get('/', function(request, response) {
  response.json(companies);
});

module.exports = router;
