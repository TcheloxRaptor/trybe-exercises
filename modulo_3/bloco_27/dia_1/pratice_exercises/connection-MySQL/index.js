const express = require('express');
const Book = require('./models/Book');

const app = express();

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT} em http://localhost:${PORT}/`);
});
