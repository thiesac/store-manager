const { productModel } = require('../models');
const { productSchema } = require('./validations/schemas');

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

const updateProduct = async (productId, name) => {
  const findProductById = await findById(productId);
  if (findProductById.status === 404) {
    return { status: 404, data: { message: 'Product not found' } };
  }

  const validationResult = productSchema.validate({ name });
  if (validationResult.error) {
    const errorMessages = validationResult.error.message;
    const status = errorMessages.includes('required') ? 400 : 422;
    return { status, data: { message: errorMessages } };
  }

  await productModel.updateProduct(productId, name);

  return { status: 200, data: { id: Number(productId), name } };
};

module.exports = {
  findById,
  findAll,
  insertProduct,
  updateProduct,
};