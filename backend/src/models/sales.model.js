const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection
    .execute(`
  SELECT
    s.date,
    sp.product_id,
    sp.quantity,
    sp.sale_id
  FROM sales s
  INNER JOIN sales_products sp
  ON
    s.id = sp.sale_id;
  `);
  return camelize(sales);
};

const findById = async (saleId) => {
  const [sale] = await connection
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
  `, [saleId]);
  return camelize(sale);
};

const insertSale = async (itemsSold) => {
  const insertSalesQuery = 'INSERT INTO sales (date) VALUES (NOW())';
  const [insertSalesResult] = await connection.execute(insertSalesQuery);
  const saleId = insertSalesResult.insertId;

  const salesProductsQueries = itemsSold.map((item) => {
    const insertSalesProductsQuery = `
    INSERT INTO sales_products
      (sale_id, product_id, quantity)
    VALUES (?, ?, ?)
    `;
    return connection.execute(insertSalesProductsQuery, [saleId, item.productId, item.quantity]);
  });
  await Promise.all(salesProductsQueries);
  return {
    id: saleId,
    itemsSold,
  };
};

module.exports = {
  findAll,
  findById,
  insertSale,
};