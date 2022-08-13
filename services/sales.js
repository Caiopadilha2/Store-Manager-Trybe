const salesModel = require('../models/sales');

const getAll = () => salesModel.getAll();

module.exports = {
  getAll,
};