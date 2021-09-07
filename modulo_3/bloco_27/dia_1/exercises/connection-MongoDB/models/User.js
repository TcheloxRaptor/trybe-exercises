const connection = require('./connection');

const passwordIsValid = (password) => {
  if (!password || typeof password === 'string' || password.length < 6) return false;

  return true;
};

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || passwordIsValid(password) === false) {
    return false;
  }

  return true;
}

const create = async (firstName, lastName, email, password)  =>
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));

module.exports = {
  create,
}