const connection = require('./connection');

const passwordIsValid = (password) => {
  if (!password || typeof password === 'string' || password.length < 6) return false;

  return true;
};

const isValid = (checkValue) => {
  if (!checkValue) {
    return false;
  }

  return true;
}

const create = async (firstName, lastName, email, password)  =>
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));

module.exports = {
  create,
  isValid,
  passwordIsValid,
}