const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { salesFromDB, salesFromModel, saleFromDB, saleFromModel } = require('../mocks/sale.mock');
const { salesModel } = require('../../../src/models');

describe('Performing tests - SALE MODEL', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('List all registered sales successfully', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromDB]);

    const products = await salesModel.findAll();

    expect(products).to.deep.equal(salesFromModel);
  });

  it('Get sale by id successfully', async function () {
    sinon.stub(connection, 'execute').resolves([saleFromDB]);
    const id = 1;

    const products = await salesModel.findById(id);

    expect(products).to.deep.equal(saleFromModel);
  });
});