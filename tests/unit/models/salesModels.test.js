const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../models/sales');
const connection = require('../../../models/connection');

describe("Testa model sales", () => {
  beforeEach(sinon.restore);
  const fakeAllSales = [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
  ];

  it('ao listar todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves(fakeAllSales)
    const sales = await salesModel.getAll();
    // console.log(sales);
    expect(sales).to.be.all.keys('saleId', 'date', 'productId', 'quantity');
  });

});