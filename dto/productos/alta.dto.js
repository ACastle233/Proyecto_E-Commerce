const Joi = require('joi');

module.exports.altaProductoDTO = Joi.object().keys({
    nombre: Joi.string().alphanum().required(),
    precio: Joi.number().required(),
    stock: Joi.number().required(),

}).with('nombre', 'precio');