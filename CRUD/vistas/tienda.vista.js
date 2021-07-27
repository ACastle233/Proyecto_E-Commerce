const { altaClientes } = require('../controlador/controlador.tienda');

module.exports.vistaUsers = async (app) => {
  app.post('/usuario/alta', async (req, res) => {
    let data = req.body;
    console.log(data)
    try {
      let resultado = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña
      }
      res.render('alta', {
        nombre: resultado.nombre,
        email: resultado.email,
        contraseña: resultado.contraseña
      })
    } catch (error) {
      res.status(400).render('404', {msj: error.message , titulo: 'Error en la consulta'})
    }
  })
}