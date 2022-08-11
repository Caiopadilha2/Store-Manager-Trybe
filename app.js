const express = require('express');
const productsController = require('./controllers/products');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.listAll);

app.get('/products/:id', productsController.getById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;