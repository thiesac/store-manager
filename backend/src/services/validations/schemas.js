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

module.exports = {
  salesSchema,
};