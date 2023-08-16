const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return { status: 200, data: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);
  if (!product) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: product };
};

const insertProduct = async (productName) => {
  const sale = await productModel.insertProduct(productName);
  return { status: 201, data: sale };
};

module.exports = {
  findById,
  findAll,
  insertProduct,
};