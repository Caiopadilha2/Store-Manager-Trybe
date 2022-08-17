const sinon = require('sinon');
const { expect } = require('chai');
const productsController = require('../../../controllers/products');
const productsService = require('../../../services/products');

describe("Testa service products", () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Ao listar todos os produtos, retorna array vazio', async () => {
    const request = {};
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    const resultExecute = [];  
    sinon.stub(productsService, 'getAll').resolves(resultExecute)

    await productsController.listAll(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('Ao listar todos os produtos, retorna array vazio', async () => {
  const request = {};
  const response = {};

  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns();

  const resultExecute = [];  
  sinon.stub(productsService, 'getAll').resolves(resultExecute)

  await productsController.listAll(request, response);

  expect(response.json.calledWith([])).to.be.equal(true);
  });
})
