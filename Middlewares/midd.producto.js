//IMPORTO LOS MODULOS NECESARIOS
const usuariosService = require('../Services/usuarios.service')
const cors = require('cors')
const rateLimit = require("express-rate-limit");
const Joi = require('joi');
const { editarProductoDTO } = require('../dto/productos/editar.dto');
const { altaProductoDTO } = require('../dto/productos/alta.dto');module.exports.checkDatosProducto = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, altaProductoDTO, "Los datos enviados no son correctos");
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports.checkDatosEditarProducto = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, editarProductoDTO, "Los datos enviados no son correctos");
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}