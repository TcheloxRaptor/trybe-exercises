const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');


const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

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
  if(!title || typeof title !== 'string' || title.length < 3) return false;

  return true;
};

const authorIdIsValid = async (authorId) => {
  if(!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = { 
  getAll,
  getByAuthorId,
  getBookById,
  titleIsValid,
  authorIdIsValid,
  create,
 };
