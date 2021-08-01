//Importo los modulos necesarios
const sequelize = require("./conexion");

//Exporto los modulos

module.exports.nuevoUsuario = async (usr) => {
  try {
    let resultado = await sequelize.query(
      `SELECT * FROM dbo.usuarios WHERE usuarios.nombre = '${usr[0]}'`
    );
    console.log(resultado[1]);
    if (resultado[1] > 0) {
      return false;
    } else {
      let resultado = await sequelize.query(
        `INSERT INTO dbo.usuarios (nombre, email,contraseña, direccion, antiguedad) VALUES ('${usr[0]}','${usr[1]}','${usr[2]}','',DEFAULT)`,
        { replacements: usr, type: sequelize.QueryTypes.SELECT }
      );
      return true;
    }
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.existenciaDeUsuario = async (usr) => {
  let usuario = [usr.email, usr.password];
  try {
    let resultado = await sequelize.query(
      `SELECT * FROM dbo.usuarios WHERE usuarios.email = '${usuario[0]}' AND usuarios.contraseña = '${usuario[1]}'`
    );
    console.log(resultado[1]);
    if (resultado[1] != 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.usuarios = async () => {
  try {
    let resultado = await sequelize.query("SELECT * FROM usuarios");
    return resultado;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
