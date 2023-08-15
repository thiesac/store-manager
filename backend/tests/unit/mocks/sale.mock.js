const salesFromModel = [
  {
    date: '2023-08-15T13:20:58.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-08-15T13:20:58.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    date: '2023-08-15T13:20:58.000Z',
    productId: 3,
    quantity: 15,
  },
];

const salesFromServiceSuccessful = {
  status: 200,
  data: salesFromModel,
};

module.exports = {
  salesFromModel,
  salesFromServiceSuccessful,
};