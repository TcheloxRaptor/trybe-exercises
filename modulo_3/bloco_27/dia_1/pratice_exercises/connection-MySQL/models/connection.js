const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost:3306',
  user: 'trybe',
  password: '',
  database: 'model_example',
});

module.exports = connection;
