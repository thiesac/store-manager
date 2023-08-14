const { productService } = require('../services');

const findAll = async (_req, res) => {
  const { status, data } = await productService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.findById(id);
  return res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
};