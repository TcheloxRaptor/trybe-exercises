const express = require('express');

const app = express();

// 5 - Crie uma API de dados das personagens de Simpsons 

const fs = require('fs/promises');

const simpsonsCharacterList = () => {
  return fs.readFileSync('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
};

// ---------------------------

// 6 - Crie um endpoint GET /simpsons 

app.get('/simpsons', function (req, res) {
  if(simpsonsCharacterList === undefined) return res.status(500);

  res.status(200).json(simpsonsCharacterList).stringify();
});

// ---------------------------

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001 http://localhost:3001');
});
