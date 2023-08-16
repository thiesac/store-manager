const date = '2023-08-15T13:20:58.000Z';

const salesFromModel = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
  {
    date,
    productId: 3,
    quantity: 15,
  },
];

const salesFromDB = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
  {
    date,
    productId: 3,
    quantity: 15,
  },
];

const salesFromServiceSuccessful = {
  status: 200,
  data: salesFromModel,
};

const saleFromServiceNotFound = { status: 404, data: { message: 'Sale not found' } };

module.exports = {
  salesFromModel,
  salesFromServiceSuccessful,
  salesFromDB,
  saleFromServiceNotFound,
};