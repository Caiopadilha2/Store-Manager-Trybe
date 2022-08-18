const express = require('express');
const productsController = require('./controllers/products');
const salesController = require('./controllers/sales');
const { validateName } = require('./middlewares/validateName');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.listAll);
app.get('/sales', salesController.listAll);

app.get('/products/:id', productsController.getById);
app.get('/sales/:id', salesController.getById);

app.post('/products', validateName, productsController.addProduct);

app.put('/products/:id', validateName, productsController.update);

app.delete('/products/:id', productsController.exclude);
app.delete('/sales/:id', salesController.exclude);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;