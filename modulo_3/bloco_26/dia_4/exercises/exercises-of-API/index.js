const express = require('express');
const bodyPasser = require('body-parser');

const app = express();
app.use(bodyPasser.json());

// 1 - Crie uma rota GET /ping

app.get('/ping', function (_req, res) {
  res.status(200).json({ message: 'pong' });
});

// -----------------------------

// 2 - Crie uma rota POST /hello

app.post('/hello', function (req, res) {
  const { name } = req.body;

  res.status(201).json({ message: `Hello, ${name}!` })
});

// -----------------------------

// 3 - Crie uma rota POST /greetings

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json({ message: `Hello, ${name}!` })
});

// -----------------------------

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001 http://localhost:3001');
});
