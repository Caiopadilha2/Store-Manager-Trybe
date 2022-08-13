const salesModel = require('../models/sales');

const getAll = () => salesModel.getAll();

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  return sale;
};

module.exports = {
  getAll,
  getById,
};