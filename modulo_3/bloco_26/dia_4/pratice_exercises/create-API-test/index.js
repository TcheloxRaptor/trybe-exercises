const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes.sort((elementA, elementB) => {
    if (elementA.name > elementB.name) return 1;
    if (elementA.name < elementB.name) return -1;
    else return 0;
  }));
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (req, res) {
  res.json(drinks.sort((elementA, elementB) => {
    if (elementA.name > elementB.name) return 1;
    if (elementA.name < elementB.name) return -1;
    else return 0;
  }));
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})
