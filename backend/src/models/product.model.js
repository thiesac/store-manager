const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products ORDER BY id');
  return camelize(products);
};

const findById = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return camelize(product);
};

module.exports = {
  findAll,
  findById,
};