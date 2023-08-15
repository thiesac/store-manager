const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection
    .execute(`
  SELECT
    s.date,
    sp.product_id,
    sp.quantity
  FROM sales s
  INNER JOIN sales_products sp
  ON
    s.id = sp.sale_id;
  `);
  return camelize(sales);
};

const findById = async (salesId) => {
  const [sales] = await connection
    .execute(`
  SELECT
    s.date,
    sp.product_id,
    sp.quantity
  FROM sales s
  INNER JOIN sales_products sp
  ON
    s.id = sp.sale_id
  WHERE id = ?
  `, [salesId]);
  return camelize(sales);
};

module.exports = {
  findAll,
  findById,
};