const { salesModel, productModel } = require('../models');
const { salesSchema } = require('./validations/schemas');

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

const validateInsertSale = async (itemsSold) => {
  const promises = await Promise.all(itemsSold.map(async ({ productId }) => {
    const product = await productModel.findById(productId);
    if (product === undefined) {
      return { status: 404, data: { message: 'Product not found' } };
    }
    return product;
  }));
  return promises;
};

const insertSale = async (itemsSold) => {
  const validationResult = salesSchema.validate(itemsSold);
  if (validationResult.error) {
    const errorMessages = validationResult.error.details.map((detail) => detail.message);
    return { status: 400, data: { message: errorMessages } };
  }
  const validationId = await validateInsertSale(itemsSold);
  console.log(validationId);
  if (validationId[0].status === 404) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  const sale = await salesModel.insertSale(itemsSold);
  return { status: 201, data: sale };
};

  module.exports = {
    findAll,
    findById,
    insertSale,
  };