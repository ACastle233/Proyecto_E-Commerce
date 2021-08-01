const Joi = require('joi');

module.exports.editarProductoDTO = Joi.object().keys({
    nombre: Joi.string().min(6).max(20),
    precio: Joi.number(),
    stock: Joi.number()
});