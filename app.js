//Importo los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const usuariosRoutes = require('./routes/usuarios.routes')
const midd = require('./Middlewares/midd.usuario')

//Middleware globales
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//db modules
//const sequelizeBDA = require('./CRUD/db/db.conexion.js');

const sequelize = require('./db/conexion');

//vistas
const { vistaUsers } = require ('./CRUD/vistas/tienda.vista.js')

//Levantamos nuestro servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexión en puerto');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
      }
}

app.get('/', (req,res) => {
  res.redirect('./Front/login.html');
})

inicioServer();
vistaUsers(app)
usuariosRoutes(app)

