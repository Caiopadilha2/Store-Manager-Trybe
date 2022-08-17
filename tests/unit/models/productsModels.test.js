const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/products');
const connection = require('../../../models/connection');

describe("Testa model products", () => {
  beforeEach(sinon.restore);
  const fakeAllProducts = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ];

    it('Ao listar todos os produtos, retorna array vazio', async () => {
    const resultExecute = [];  
    sinon.stub(productsModel, 'getAll').resolves(resultExecute)

    const resultado = await productsModel.getAll();

    expect(resultado).to.be.empty;
    });
  
    it('Ao listar todos os produtos, retorna array cheio', async () => {
    const resultExecute = [{ id: 1, name: "martelo"}];  
    sinon.stub(productsModel, 'getAll').resolves(resultExecute)

    const resultado = await productsModel.getAll();

    expect(resultado).to.be.not.empty;
    });

  it('ao listar todos os produtos, retorna objeto', async () => {
    sinon.stub(connection, 'execute').resolves(fakeAllProducts)
    const products = await productsModel.getAll();
    // console.log(products);
    expect(products).to.be.all.keys('id', 'name');
  });
})