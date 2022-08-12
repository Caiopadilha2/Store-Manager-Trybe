const productsModel = require('../models/products');

const getAll = () => productsModel.getAll();

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product[0];
};

const addNewProduct = async (name) => {
  const newProduct = await productsModel.addProduct(name);
  
  return newProduct;
};

const update = async (product) => {
  // const findProduct = getById(product.id);
  // if (!findProduct) {
  //   return {
  //     code: 404,
  //     message: 'Product not found',
  //   };
  // }
  const updated = await productsModel.update(product);

  if (!updated) {
    return {
      code: 404,
      message: 'Product not found',
    };
  }
  return updated;
};

const exclude = async (id) => {
  await productsModel.exclude(id);
};

module.exports = {
  getAll,
  getById,
  exclude,
  addNewProduct,
  update,
};