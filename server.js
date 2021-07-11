const http = require('http');
const express =require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const {obtenerCategoriaNombre,eliminarCategoria, eliminarCategoriaNombre,obtenerCategorias, agregarCategoria}=require('./Services/categoria.service')
const {existeCategoria,validaNombreCat,validacionCat,validacionExistencia}=require('./Middlewares/index')
//MIDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use((err,req,res,next)=>{
    if(err){if(!res.headersSend){return res.status(500).json('Error interno del servidor')} } 
    next();
}  )
const {corsOption}=require('./Middlewares/index')


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});

app.get('/',cors(corsOption),(req,res) =>{
    res.status(200).json({message:'Hola'})
})

//Obten todas las categorias
app.get('/categorias',(req,res) =>{
    const data = obtenerCategorias();
    return res.status(200).json(data);
})

//Obten categoria por nombre
app.get('/categoria', validaNombreCat,existeCategoria,(req,res) =>{
    const data = obtenerCategoriaNombre(req.body);
    return res.status(200).json(data);
})

app.post('/categorias',validacionCat,validacionExistencia,(req,res) =>{
    const data= agregarCategoria(req.body);
    console.log('Categoria subida con exito')
    return res.status(200).json(data)
    
});

//API elimina categoria por nombre
app.delete('/categorias', validaNombreCat,(req,res) =>{
    const data = eliminarCategoriaNombre(req.body);
    return res.status(200).json('Eliminado con exito')
})

