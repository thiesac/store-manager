const productsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productsFromServiceSuccessful = {
  status: 200,
  data: productsFromModel,
};

const productFromModel = { id: 1, name: 'Martelo de Thor' };

const productFromServiceSuccessful = {
  status: 200,
  data: productFromModel,
};

const productFromServiceNotFound = { status: 404, data: { message: 'Product not found' } };

const productIdFromDB = { insertId: 42 };

module.exports = {
  productsFromModel,
  productsFromDB,
  productsFromServiceSuccessful,
  productFromServiceSuccessful,
  productFromModel,
  productFromServiceNotFound,
  productIdFromDB,
};