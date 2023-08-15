// const { expect } = require('chai');
// const sinon = require('sinon');
// const connection = require('../../../src/models/connection');
// const { productModel } = require('../../../src/models');
// const { productIdFromDB } = require('../mocks/product.mock');

// describe('Realizando testes - PRODUCT MODEL:', function () {
//   it('Inserindo produto com sucesso', async function () {
//     sinon.stub(connection, 'execute').resolves(productIdFromDB);

//     const inputData = { name: 'ProductZ' };
//     const insertId = await productModel.insert(inputData);
    
//     expect(insertId).to.be.a('number');
//   });
// });