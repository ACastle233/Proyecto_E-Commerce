const Sequelize = require("sequelize");
const modeloProductos = require("./modelos_db/productos.modelos");
const modeloUsuarios = require("./modelos_db/users_modelos");
// databasename, username, password
// const sequelize = new Sequelize("pPwS1XiZt6", "pPwS1XiZt6", "18Jdf6zLGV", {
//   host: "remotemysql.com",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("APIML", "SA", "Root233425?", {
    host: "localhost",
    dialect: "mssql",
  });

const Producto = modeloProductos(sequelize, Sequelize);
const Usuario = modeloUsuarios(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});
module.exports = {
  Producto,
  Usuario,
};
