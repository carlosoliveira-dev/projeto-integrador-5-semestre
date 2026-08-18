const { makeDatabase, makeTables } = require('../database/make');
const request = require('supertest');
const app = require('./app');

let sequelize;
let Product;
let Supplier;

beforeAll(async () => {
  sequelize = makeDatabase('database/databasetests.sqlite');
  ({Product, Supplier } = await makeTables(sequelize));
  
  const Phone = await Product.create({
      NomeProduto: 'Galaxy A10',
      Descricao: 'Smartphone não muito eficiente...'
  });

});

afterAll(async () => {
  const produto = await Product.findByPk(1);
  console.log(produto);
  await sequelize.close()

  const fs = require('fs');
  
  try {
  fs.unlinkSync('database/databasetests.sqlite');
  console.log('Arquivo excluído com sucesso!');
  } 
  catch (error) {
    if (error.code === 'ENOENT') {
    console.log('O arquivo não existe.');
  } 
  else {
    console.error('Erro ao excluir:', error.message);
    }
  }
});

describe('GET /', () => {
  it('deveria retornar "Hello World!"', async () => {
    const res = await request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200);

    expect(res.text).toBe('Hello World!');
  });
});

describe('GET /produtos', () => {
  it('deveria retornar uma lista com todos os produtos', async () => {

  });
});