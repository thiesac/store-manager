const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { saleService } = require('../../../src/services');
const { saleFromServiceNotFound } = require('../mocks/sale.mock');

describe('Performing tests - SALE SERVICE', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Don\'t get sale in case it doesn\'t exist', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);
    const saleId = 5;

    const result = await saleService.findById(saleId);

    expect(result).to.deep.equal(saleFromServiceNotFound);
  });
});