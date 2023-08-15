const route = require('express').Router();
const { saleController } = require('../controllers');

route.get('/', saleController.findAll);
route.get('/:id', saleController.findById);

module.exports = route;