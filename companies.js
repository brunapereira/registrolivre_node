var express = require('express'),
    router = express.Router(),
    pg = require('pg'),
    path = require('path'),
    connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/registrolivre_node';

router.get('/', function(request, response) {
  var companies = [],
      query; 
  
  pg.connect(connectionString, function(error, client, done) {
    if(error) {
      done();
      console.log(error);
      return response.status(500).json({ success: false, data: error })
    }

    query = client.query("SELECT * FROM company ORDER BY id ASC;");

    query.on('row', function(row) {
      companies.push(row);
    });

    query.on('end', function() {
      done();
      return response.json(companies);
    });
  });
});

router.post('/', function(request, response) {
  var company = {
    cnpj: request.body.cnpj,
    nomeFantasia: request.body.nomeFantasia
  };

  var result, query;

  pg.connect(connectionString, function(error, client, done) {
    if(error) {
      done();
      console.log(error);
      return response.status(500).json({ success: false, data: error });
    }

    client.query("INSERT INTO company(cnpj, tradeName) values($1, $2)", [company.cnpj, company.nomeFantasia]);

    query = client.query("SELECT * FROM company WHERE cnpj=($1)", [company.cnpj]);
    
    query.on('row', function(row) {
     result = row; 
    });
    
    query.on('end', function() {
      done();
      return response.json(result);
    }); 
  });
});

router.get('/:id', function(request, response) {
  var results = [],
      id = request.params.id;

  pg.connect(connectionString, function(error, client, done) {
    if(error) {
      done();
      console.log(error);
      return response.status(500).send(json({ success: false, data: error }));
    }

    var query = client.query("SELECT * FROM company WHERE id=($1)", id);

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return response.json(results);
    });
  });
});

router.put('/:id/edit', function(request, response) {
  var result, 
      query,
      id = request.params.id,
      company = { cnpj: request.body.cnpj, nomeFantasia: request.body.nomeFantasia };
  
  pg.connect(connectionString, function(error, client, done) {
    if(error) {
      done();
      console.log(error);
      return response.status(500).send(json({ success: false, data: error }));
    }
    client.query("UPDATE company SET cnpj=($1), tradeName=($2) WHERE id=($3)", [company.cnpj, company.nomeFantasia, id]);

    query = client.query("SELECT * FROM company WHERE id=($1)", id);

    query.on('row', function(row) {
      result = row;
    });

    query.on('end', function() {
      done();
      return response.json(result);
    });
  });
});

module.exports = router;
