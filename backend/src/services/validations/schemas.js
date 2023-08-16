const Joi = require('joi');

const salesSchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().integer().positive().required()
      .messages({ 'number.min': '"productId" is required' }),
    quantity: Joi.number().integer().min(1).required()
      .messages({ 'number.min': '"quantity" is require' }),
  }),
);      

module.exports = {
  salesSchema,
};      
