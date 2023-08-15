const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const [allValidationsProduct] = require('../../../src/middlewares/validateProduct');

describe('Performing tests - PRODUCT MIDDLEWARE', function () {
  let req; let res; let 
next;

  beforeEach(function () {
    req = {
      body: {},
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    next = sinon.stub();
  });

  it('should return a 400 status code and the message "name" is required if the name field is missing', function () {
    allValidationsProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('should return a 400 status code and the message "name" length must be at least 5 characters long if the name field has less than 5 characters', function () {
    req.body.name = 'abc';

    allValidationsProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
});