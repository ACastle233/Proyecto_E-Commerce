const Joi = require('joi');

module.exports.loginDTO = Joi.object().keys({
    nombre: Joi.string().alphanum().required(),
    password: Joi.string().required()
}).with('nombre', 'password'); //Si viene con usuario tambien debe existir la contraseña