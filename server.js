var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8765
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var companies = [
  { cnpj: '0000000000-191', nome_fantasia: 'Nome fantasia da empresa'  }
]

var companiesRoute = router.route('/empresas');

companiesRoute.get(function(request, response) {
  response.json(companies);
});

app.use('/api', router);
app.listen(port, function() {
  console.log('Aplicação rodando na porta', port);
});
