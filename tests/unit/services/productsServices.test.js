const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/products');
const productsService = require('../../../services/products');

describe("Testa service products", () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Ao listar todos os produtos, retorna array vazio', async () => {
    const resultExecute = [];  
    sinon.stub(productsModel, 'getAll').resolves(resultExecute)

    const resultado = await productsService.getAll();

    expect(resultado).to.be.empty;
  });

    it('Ao listar todos os produtos, retorna array cheio', async () => {
    const resultExecute = [{ id: 1, name: "martelo"}];  
    sinon.stub(productsModel, 'getAll').resolves(resultExecute)

    const resultado = await productsService.getAll();

    expect(resultado).to.be.not.empty;
    });
  
      it('Ao listar todos os produtos, retorna array contendo objetos', async () => {
    const resultExecute = [{ id: 1, name: "martelo"}];  
    sinon.stub(productsModel, 'getAll').resolves(resultExecute)

    const [resultado] = await productsService.getAll();

        expect(resultado).to.be.an('object');
        expect(resultado).to.have.all.keys('id', 'name');
  });
})