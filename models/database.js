var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/registrolivre_node';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE company(' + 
                            'id SERIAL PRIMARY KEY,' +
                            'cnpj VARCHAR(20) not null,' + 
                            'tradeName VARCHAR(100),' +
                            'companyName VARCHAR(100),' +
                            'streetName VARCHAR(100),' +
                            'cep VARCHAR(15),' +
                            'city VARCHAR(50),' +
                            'complement VARCHAR(30),' +
                            'number VARCHAR(10),' +
                            'state VARCHAR(50),' +
                            'openingDate DATE)'
                        );
query.on('end', function() { client.end(); });
