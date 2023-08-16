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

const saleFromDB = [
  {
    date: '2023-08-16T17:26:54.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-08-16T17:26:54.000Z',
    productId: 2,
    quantity: 10,
  },
];

const saleFromModel = [
  {
    date: '2023-08-16T17:26:54.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-08-16T17:26:54.000Z',
    productId: 2,
    quantity: 10,
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
  saleFromDB,
  saleFromModel,
};