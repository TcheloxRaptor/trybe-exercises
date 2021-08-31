const express = require('express');

const app = express();

// 1 - Crie uma rota GET /ping

app.get('/ping', function (_req, res) {
  res.status(200).json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001 http://localhost:3001');
});
