const route = require('express').Router();
const { saleController } = require('../controllers');

route.get('/', saleController.findAll);
// route.get('/:id', productController.findById);

module.exports = route;