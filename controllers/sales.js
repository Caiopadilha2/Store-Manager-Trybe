const salesService = require('../services/sales');

const listAll = async (_req, res, next) => {
  try {
    const sales = await salesService.getAll();

    res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);

    if (!sale.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
};

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);
    if (!sale.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    await salesService.exclude(id);
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