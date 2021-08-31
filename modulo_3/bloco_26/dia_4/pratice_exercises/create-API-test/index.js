const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Receitas

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 25.0, waitTime: 25 },
];

// Query String com três parâmetros

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= parseInt(minPrice));

  res.status(200).json(filteredRecipes);
})

// Roteamento com parâmetro de rota

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/recipes', function (req, res) {
  res.json(recipes.sort((elementA, elementB) => {
    if (elementA.name > elementB.name) return 1;
    if (elementA.name < elementB.name) return -1;
    else return 0;
  }));
});

// Rota com o método Post

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;

  recipes.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Recipe created successfully' });
});

// Rota com o método Put

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

// Rota com o método Delete

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});


// Drinks

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// Query String com um parâmetro de busca

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));

  res.status(200).json(filteredDrinks);
})

// Roteamento com parâmetro de rota

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
});

app.get('/drinks', function (req, res) {
  res.json(drinks.sort((elementA, elementB) => {
    if (elementA.name > elementB.name) return 1;
    if (elementA.name < elementB.name) return -1;
    else return 0;
  }));
});

// Rota com o método Post

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;

  drinks.push({ id, name, price });

  res.status(201).json({ message: 'Drink created successfully' });
});

// Rota com o método Put

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

// Rota com o método Delete

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})
