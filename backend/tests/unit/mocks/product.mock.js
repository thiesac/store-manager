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

const productsFromServiceSuccessful = {
  status: 200,
  data: productsFromModel,
};

const productFromModel = { id: 1, name: 'Martelo de Thor' };

const productFromServiceSuccessful = {
  status: 200,
  data: productFromModel,
};

module.exports = {
  productsFromModel,
  productsFromServiceSuccessful,
  productFromServiceSuccessful,
  productFromModel,
};