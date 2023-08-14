const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  if (!products || products.length === 0) {
    return { status: 404, data: { message: 'There are no products' } };
  }
  return { status: 200, data: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);
  if (!product) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: product };
};

module.exports = {
  findById,
  findAll,
};