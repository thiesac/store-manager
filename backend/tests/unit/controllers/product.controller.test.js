const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { productsFromModel, productsFromServiceSuccessful, productFromServiceSuccessful, productFromModel } = require('../mocks/product.mock');
const { productController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('Realizando testes - PRODUCT CONTROLLER', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Lista todos os produtos cadastrados com sucesso', async function () {
    // arrange
    sinon.stub(productService, 'findAll').resolves(productsFromServiceSuccessful);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    // act
    await productController.findAll(req, res);

    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromModel); 
  });

  it('Recuperando produto por id com sucesso', async function () {
    // arrange
    sinon.stub(productService, 'findById').resolves(productFromServiceSuccessful);
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    // act
    await productController.findById(req, res);
    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromModel);
  });
});