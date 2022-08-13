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
    const result = [];  
    sinon.stub(productsService, 'getAll').resolves(result)

    await productsController.listAll(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  //   it('Ao listar todos os produtos, retorna array cheio', async () => {
  //   const result = [{ id: 1, name: "martelo"}];  
  //   sinon.stub(productsModel, 'getAll').resolves(result)

  //   const resultado = await productsService.getAll();

  //   expect(resultado).to.be.not.empty;
  //   });
  
  //     it('Ao listar todos os produtos, retorna array contendo objetos', async () => {
  //   const result = [{ id: 1, name: "martelo"}];  
  //   sinon.stub(productsModel, 'getAll').resolves(result)

  //   const [resultado] = await productsService.getAll();

  //       expect(resultado).to.be.an('object');
  //       expect(resultado).to.have.all.keys('id', 'name');
  // });
})
