const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { Usuario } = require("../../db");
const { check, validationResult } = require("express-validator");
//const midd = require('../Middlewares/midd.usuario')
const usuariosService = require("../../Services/usuarios.service");
const midd = require('../../Middlewares/midd.usuario')

router.post("/register", midd.checkDatosAlta, async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10); // aqui nos pasa la contraseña ya encriptada
    const user = await Usuario.create(req.body);
    res.json(user);
  } catch (error) {
    res
      .status(400)
      .render("404", {
        msj: error.message,
        titulo: "Error al realizar su registro",
      });
  }
});

router.post("/login", midd.checkDatosLogin,  async (req, res) => {
  try {
    const user = await Usuario.findOne({ where: { email: req.body.email } });
    console.log(req.body.email)
    if (user) {
      const iguales = bcrypt.compareSync(req.body.password, user.password);
      if (iguales) {
        let validacion = await usuariosService.generaToken(req.body);
        res.json(validacion);
      } else {
        res.json("Usuario o contraseña no coinciden");
      }
    } else {
        res.json("Usuario o contraseña no coinciden");
    }
    
  } catch (error) {
    res
      .status(400)
      .render("404", {
        msj: error.message,
        titulo: "Error al realizar su registro",
      });
  }
});
module.exports = router;
