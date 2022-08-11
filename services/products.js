const productsModel = require('../models/products');

const getAll = () => productsModel.getAll();

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product[0];
};

const exclude = async (id) => {
  await productsModel.exclude(id);
};

module.exports = {
  getAll,
  getById,
  exclude,
};