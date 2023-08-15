const { saleService } = require('../services');

const findAll = async (_req, res) => {
  const { status, data } = await saleService.findAll();
  return res.status(status).json(data);
};

module.exports = {
  findAll,
};