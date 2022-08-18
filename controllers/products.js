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

const addProduct = async (req, res, next) => {
  try {
    const { name } = req.body;

    const created = await productsService.addNewProduct({ name });

    return res.status(201).json(created);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await productsService.update({ id, name });

    if (updated.code) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updated);
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

const searchProduct = async (req, res, next) => {
  try {
    const { q: search } = req.query;
    const allProducts = await productsService.getAll();
    // console.log(allProducts); Era uma promise, esqueci do await.
    const filteredProducts = allProducts.filter((product) => product.name.includes(search));
    if (!search) {
      return res.status(200).json(allProducts);
    }
    return res.status(200).json(filteredProducts);
  } catch (e) {
    next(e);    
  }
};

module.exports = {
  listAll,
  getById,
  exclude,
  addProduct,
  update,
  searchProduct,
};