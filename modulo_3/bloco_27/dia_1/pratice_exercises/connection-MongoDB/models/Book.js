const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books',
  );

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books ' +
    'WHERE author_id=?;', [authorId]
  );

  return books.map(serialize);
}

const getBookById = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id=?;', [id]
  );

  if (books.length === 0) return null;

  return serialize(books[0]);
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
