const Joi = require('joi');

const salesSchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().integer().positive().required()
      .messages({
        'any.required': '"productId" is required',
      }),
    quantity: Joi.number().integer().min(1).required()
      .messages({
        'number.min': '"quantity" must be greater than or equal to 1',
        'any.required': '"quantity" is required',
      }),
  }),
);

const productSchema = Joi.object({
  name: Joi.string().min(5).required()
    .messages({
      'any.required': '"name" is required',
      'string.min': '"name" length must be at least 5 characters long',
    }),
});

module.exports = {
  salesSchema,
  productSchema,
};