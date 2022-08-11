const productsModel = require('../models/products');

const listAll = async (_req, res, next) => {
  try {
    const products = await productsModel.getAll();

    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const product = await productsModel.getById(id);

    if (!product.length) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product[0]);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listAll,
  getById,
};