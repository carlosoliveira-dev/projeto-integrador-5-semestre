const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/produto', (req, res) => {
  res.send('get produtos');
});

app.get('/produto/:id', (req, res) => {
  const { id } = req.params;
  res.send(`get produto by id: ${id}`);
});

app.get('/produto/:id/fornecedores', (req, res) => {
  res.send('lista de fornecedores desse produto');
});

app.delete('/produto/:id/fornecedor/:id', (req, res) => {
  const { productId, supplierId } = req.params;
  res.send(`desvinculando produto: ${productId} do fornecedor: ${supplierId}`)
});

app.get('/fornecedor', (req, res) => {
  res.send('get fornecedores');
});

app.get('/fornecedor/:id', (req, res) => {
  const { id } = req.params;
  res.send(`get fornecedor by id: ${id}`);
});

app.get('/fornecedor/:id/produtos', (req, res) => {
  res.send('lista de produtos que esse fornecedor tem');
});

app.delete('/fornecedor/:id/produto/:id', (req, res) => {
  const { supplierId, productId } = req.params;
  res.send(`desvinculando fornecedor: ${supplierId} do produto: ${productId}`)
});

module.exports = app;
