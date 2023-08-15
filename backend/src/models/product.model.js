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

const insertSale = async (name) => {
  const query = `
    INSERT INTO products (name)
    VALUES (?)
  `;
  const [{ insertId }] = await connection.execute(query, [name]);
  return { name, id: insertId };
};

module.exports = {
  findAll,
  findById,
  insertSale,
};