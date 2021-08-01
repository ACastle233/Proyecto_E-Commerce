const Joi = require('joi');module.exports.editarProductoDTO = Joi.object().keys({
    nombre: Joi.string(),
    descripcion: Joi.string(),
    precio: Joi.number(),
    stock: Joi.number()
});