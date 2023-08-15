const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleService } = require('../../../src/services');
const { salesFromServiceSuccessful, salesFromModel } = require('../mocks/sale.mock');
const { saleController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('Performing tests - SALE CONTROLLER', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('List all successful sales', async function () {
    sinon.stub(saleService, 'findAll').resolves(salesFromServiceSuccessful);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromModel); 
  });
});