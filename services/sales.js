const salesModel = require('../models/sales');

const getAll = () => salesModel.getAll();

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  return sale;
};

const exclude = async (id) => {
  await salesModel.exclude(id);
};

module.exports = {
  getAll,
  getById,
  exclude,
};