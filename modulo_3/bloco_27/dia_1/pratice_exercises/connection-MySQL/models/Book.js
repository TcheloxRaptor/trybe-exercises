const connection = require('./connection');

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

module.exports = { 
  getAll,
  getByAuthorId,
 };
