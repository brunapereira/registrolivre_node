var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);
app.listen(port, function() {
  console.log('Aplicação rodando na porta', port);
});
