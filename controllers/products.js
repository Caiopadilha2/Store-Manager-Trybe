const productsService = require('../services/products');

const listAll = async (_req, res, next) => {
  try {
    const products = await productsService.getAll();

    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (e) {
    next(e);
  }
};

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await productsService.exclude(id);
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listAll,
  getById,
  exclude,
};