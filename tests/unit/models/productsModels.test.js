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

  it('ao listar todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves(fakeAllProducts)
    const products = await productsModel.getAll();
    // console.log(products);
    expect(products).to.be.all.keys('id', 'name');
  });

  // it('ao listar um produto por ID', async () => {
  // sinon.stub(connection, 'execute').resolves(fakeAllProducts)
  // const products = await productsModel.getById();
  // // console.log(products);
  // expect(products).to.be.all.keys('id', 'name');
  // });
})