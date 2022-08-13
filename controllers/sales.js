const salesService = require('../services/sales');

const listAll = async (_req, res, next) => {
  try {
    const sales = await salesService.getAll();

    res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listAll,
};