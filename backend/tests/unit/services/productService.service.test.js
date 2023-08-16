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

  // it('Get all the products successfully', async function () {
  //   sinon.stub(productModel, 'findAll').resolves();

  //   const result = await productService.findAll();

  //   expect(result).to.deep.equal(productsService);
  // });
});