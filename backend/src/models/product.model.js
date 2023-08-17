const camelize = require('camelize');
const connection = require('./connection');
const { getFormattedUpdateColumns } = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products ORDER BY id');
  return camelize(products);
};

const findById = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return camelize(product);
};

const insertProduct = async (name) => {
  const query = `
    INSERT INTO products (name)
    VALUES (?)
  `;
  const [{ insertId }] = await connection.execute(query, [name]);
  return { name, id: insertId };
};

const updateProduct = async (productId, dataToUpdate) => {
  const columns = getFormattedUpdateColumns(dataToUpdate);
  const query = `UPDATE products SET ${columns} WHERE id = ?`;
  return connection.execute(query, [...Object.values(dataToUpdate), productId]);
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
};