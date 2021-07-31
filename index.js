const http = require('http');
const express = require('express');
require('dotenv').config();
const apiRouter = require('./routes/api');const app = express();
require('./db');const bodyParser=require('body-parser');
const { Producto } = require('./db');//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRouter)
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});
