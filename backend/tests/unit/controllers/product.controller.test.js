const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { productsFromModel, productsFromServiceSuccessful, productFromServiceSuccessful, productFromModel } = require('../mocks/product.mock');
const { productController } = require('../../../src/controllers');
const [allValidationsProduct] = require('../../../src/middlewares/validateProduct');

const { expect } = chai;
chai.use(sinonChai);

describe('Performing tests - PRODUCT CONTROLLER', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('List all registered products successfully', async function () {
    sinon.stub(productService, 'findAll').resolves(productsFromServiceSuccessful);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromModel); 
  });

  it('Retrieve product by id successfully', async function () {
    sinon.stub(productService, 'findById').resolves(productFromServiceSuccessful);
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromModel);
  });

  it('should return a 400 status code and the message "name" is required if the name field is missing', async function () {
    const req = { body: { name: '' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
    await allValidationsProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });
});

// describe('Performing tests - PRODUCT MIDDLEWARE', function () {
//   let req; let res; let
//     next;

//   beforeEach(function () {
//     req = {
//       body: {},
//     };
//     res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     next = sinon.stub();
//   });

//   it('should return a 400 status code and the message "name" is required if the name field is missing', function () {
//     allValidationsProduct(req, res, next);

//     expect(res.status).to.have.been.calledWith(400);
//     expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
//   });

//   it('should return a 400 status code and the message "name" length must be at least 5 characters long if the name field has less than 5 characters', function () {
//     req.body.name = 'abc';

//     allValidationsProduct(req, res, next);

//     expect(res.status).to.have.been.calledWith(422);
//     expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
//   });
// });