const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../controllers/sales');
const salesService = require('../../../services/sales');

describe("Testa service sales", () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Ao listar todas as vendas, retorna array vazio', async () => {
    const request = {};
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    const result = [];  
    sinon.stub(salesService, 'getAll').resolves(result)

    await salesController.listAll(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
})
