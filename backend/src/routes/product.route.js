const route = require('express').Router();
const { productController } = require('../controllers');
const allValidationsProduct = require('../middlewares/validateProduct');

route.get('/', productController.findAll);
route.get('/:id', productController.findById);
route.post('/', allValidationsProduct, productController.insertSale);

module.exports = route;