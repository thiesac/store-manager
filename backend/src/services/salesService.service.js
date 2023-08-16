const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 200, data: sales };
};

const findById = async (salesId) => {
  const sale = await salesModel.findById(salesId);
  
  if (sale.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sale };
};

const insertSale = async (itemsSold) => {
  const sale = await salesModel.insertSale(itemsSold);
  return { status: 201, data: sale };
};

module.exports = {
  findAll,
  findById,
  insertSale,
};