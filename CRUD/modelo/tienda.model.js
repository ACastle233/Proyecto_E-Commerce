const sequelize = require('../db/db.conexion')

module.exports = class Usuarios {
  constructor(cliente) {
    this.cliente = cliente;
  }

  async alta() {
    try {
      let cliente = [
        this.nuevoCliente.nombre,
        this.nuevoCliente.email,
        this.nuevoCliente.contraseña
      ];

      let resultado = await sequelize.query('INSERT INTO ventasML (nombre, email, contraseña) VALUES (?, ?, ?)', { replacements: producto, type: sequelize.QueryTypes.SELECT })
      console.log(resultado);
      return resultado
    } catch (error) {
      throw new Error ({message: error.message})
    }
  }
}