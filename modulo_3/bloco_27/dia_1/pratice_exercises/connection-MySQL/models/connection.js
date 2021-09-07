const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'trybe12345',
  database: 'model_example',
});

module.exports = connection;
