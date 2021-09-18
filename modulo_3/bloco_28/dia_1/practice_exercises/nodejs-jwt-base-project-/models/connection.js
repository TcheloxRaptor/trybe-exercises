const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017'; //'mongodb://localhost:27017'; // ou coloque sua URL do MongoDB aqui

let schema = null;

async function connection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('jwt_exercise'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connection;

/*
Nota : Após clonar o projeto, não se esqueça de colocar o endereço do MongoDB no arquivo models/connection.js , na linha 3. 
O endereço da sua instância local do MongoDB ficará disponível assim que você executar o mongo no seu terminal. 
Normalmente, esse endereço é mongodb://127.0.0.1:27017 .  
*/