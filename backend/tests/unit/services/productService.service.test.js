const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { productFromServiceNotFound } = require('../mocks/product.mock');

describe('Performing tests - PRODUCT SERVICE', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Don\'t get product in case it doesn\'t exist', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);
    const productId = 5;

    const result = await productService.findById(productId);

    expect(result).to.deep.equal(productFromServiceNotFound);
  });

  it('should return 404 error if product does not exist', async function () {
    sinon.stub(productService, 'findById').resolves({ status: 404, data: { message: 'Product not found' } });
    sinon.stub(productModel, 'updateProduct').resolves(undefined);
    sinon.stub(productModel, 'findById').resolves(undefined);
    const name = 'Martelo do Chapolim';
    const id = 1;
      const result = await productService.updateProduct(id, name);
      console.log(result);
  
      expect(result).to.deep.equal({
        status: 404,
        data: { message: 'Product not found' },
      });
  });
});