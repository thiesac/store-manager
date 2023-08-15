const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('./models/product.model');

describe('Product Model', () => {
  it('should call connection.execute with the correct arguments', async () => {
    const executeSpy = sinon.spy(productModel.connection, 'execute');
    const productId = 123;

    await productModel.findById(productId);

    sinon.assert.calledWith(executeSpy, 'SELECT * FROM products WHERE id = ?', [productId]);

    executeSpy.restore();
  });
});