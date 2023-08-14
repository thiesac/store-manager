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

const productFromModelSuccessful = { id: 1, name: 'Martelo de Thor' };

module.exports = {
  productsFromModel,
  productsFromServiceSuccessful,
  productFromModelSuccessful,
};