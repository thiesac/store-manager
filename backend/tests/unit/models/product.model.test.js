const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productsFromModel, productsFromDB, productFromModel, productFromDB } = require('../mocks/product.mock');

describe('Performing tests - PRODUCT MODEL', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('List all registered products successfully', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDB]);

   const products = await productModel.findAll();
  
    expect(products).to.deep.equal(productsFromModel);
  });
});