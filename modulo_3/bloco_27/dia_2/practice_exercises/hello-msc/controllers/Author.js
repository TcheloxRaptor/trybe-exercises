// hello-msc/controllers/Author.js

const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;

  // Pedimos para o service buscar o autor
  const author = await service.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  res.status(200).json(author);
});

module.exports = {
  getAll,
  findById,
};
