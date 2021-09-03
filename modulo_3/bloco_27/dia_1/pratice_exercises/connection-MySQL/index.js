const express = require('express');
const Book = require('./models/Book');
const Author = require('./models/Author');

const app = express();

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;
  const books = await Book.getByAuthorId(author_id);

  res.status(200).json(books);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});


app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT} em http://localhost:${PORT}/`);
});
