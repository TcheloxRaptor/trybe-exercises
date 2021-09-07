const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find({}).toArray());
};

const getByAuthorId = async (authorId) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());
}

const getBookById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const bookData = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!bookData) return null;

  const { title, author_id } = bookData;

  return { id, title, author_id };
};

const titleIsValid = (title) => {
  if (!title || typeof title !== 'string') return false;

  return true;
};

const authorIdIsValid = async (authorId) => {
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => 
  connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }));

module.exports = { 
  getAll,
  getByAuthorId,
  getBookById,
  titleIsValid,
  authorIdIsValid,
  create,
 };
