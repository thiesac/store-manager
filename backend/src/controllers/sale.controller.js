const { saleService } = require('../services');

const findAll = async (_req, res) => {
  const { status, data } = await saleService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleService.findById(id);
  return res.status(status).json(data);
};

const insertSale = async (req, res) => {
  const itemsSold = req.body;
  const { status, data } = await saleService.insertSale(itemsSold);
  return res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
  insertSale,
};