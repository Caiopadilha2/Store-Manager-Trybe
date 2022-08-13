const sinon = require('sinon');
const { expect } = require('chai');
const salesModel = require('../../../models/sales');
const salesService = require('../../../services/sales');

describe("Testa service sales", () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Ao listar todas as vendas, retorna array vazio', async () => {
    const result = [];  
    sinon.stub(salesModel, 'getAll').resolves(result)

    const resultado = await salesService.getAll();

    expect(resultado).to.be.empty;
  });

    it('Ao listar todas as vendas, retorna array cheio', async () => {
    const result = [    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    }];  
    sinon.stub(salesModel, 'getAll').resolves(result)

    const resultado = await salesService.getAll();

    expect(resultado).to.be.not.empty;
    });
  
      it('Ao listar todas as vendas, retorna array contendo objetos', async () => {
    const result = [{
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    }];  
    sinon.stub(salesModel, 'getAll').resolves(result)

    const [resultado] = await salesService.getAll();

        expect(resultado).to.be.an('object');
        expect(resultado).to.have.all.keys('saleId', 'date', 'productId', 'quantity');
  });
  

  // it('Ao adicionar nova produto', async () => {
  //   sinon.stub(productsModel, 'addProduct').resolves({

  //   })


  //   const newProduct = await productsService.addNewProduct({ name: "ProdutoX"});
  //   // console.log(products);
  //   expect(newProduct).to.have.all.keys('id', 'name');
  //   expect(newProduct.name).to.be.eq("ProdutoX")
  // });
})