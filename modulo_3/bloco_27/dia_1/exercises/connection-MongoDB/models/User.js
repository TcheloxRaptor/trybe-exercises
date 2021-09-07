const connection = require('./connection');

const create = async (firstName, lastName, email, password)  =>
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));


module.exports = {
  create,
}