const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.findAll);
route.get('/:id', productController.findById);
route.post('/', productController.insertSale);

module.exports = route;