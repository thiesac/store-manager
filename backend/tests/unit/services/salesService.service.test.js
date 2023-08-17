const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel, productModel } = require('../../../src/models');
const { saleService } = require('../../../src/services');
const { saleFromServiceNotFound } = require('../mocks/sale.mock');

describe('Performing tests - SALE SERVICE', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Do not get sale in case it does not exist', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);
    const saleId = 5;

    const result = await saleService.findById(saleId);

    expect(result).to.deep.equal(saleFromServiceNotFound);
  });

  it('should return 404 error if product does not exist', async function () {
    sinon.stub(saleService, 'validateInsertSale').returns({ status: 404, data: { message: 'Product not found' } });
    sinon.stub(productModel, 'findById').resolves(undefined);
    const itemsSold = [
      {
        productId: 1000,
        quantity: 1,
      },
    ];
    
    const result = await saleService.insertSale(itemsSold);
    expect(result).to.deep.equal({
      status: 404,
      data: { message: 'Product not found' },
    });
  });
});