const { makeDatabase, makeTables } = require('../database/make');
const request = require('supertest');
const app = require('./app');

beforeAll(() => {
  console.log('beforeAll')
  const sequelize = makeDatabase('database/databasetests.sqlite');
  makeTables(sequelize);
});

afterAll(() => {
  console.log('afterAll')
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