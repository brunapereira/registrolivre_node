var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8765;
var companies = require('./companies');

module.exports = app

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/empresas', companies);
app.listen(port, function() {
  console.log('Aplicação rodando na porta', port);
});
