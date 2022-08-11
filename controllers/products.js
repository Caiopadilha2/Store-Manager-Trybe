const productsModel = require('../models/products');

const listAll = async (_req, res, next) => {
  try {
    const products = await productsModel.getAll();

    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listAll,
};