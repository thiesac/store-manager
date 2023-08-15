const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { productFromServiceNotFound } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT SERVICE', function () {
  it('Não recupera produto caso não exista', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);
    const productId = 5;

    const result = await productService.findById(productId);

    expect(result).to.deep.equal(productFromServiceNotFound);
  });
});