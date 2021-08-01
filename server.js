const http = require('http');
const express =require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const {obtenerCategoriaNombre, eliminarCategoriaNombre,obtenerCategorias, agregarCategoria, modificarCategoria} =require('./Services/categoria.service')
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

//Obten todas las categorias
app.get('/categorias',(req,res) =>{
    try{
        const data = obtenerCategorias();
    return res.status(200).json(data);
    }catch {
        return res.status(400).json("Error")
    }
})

//Obten categoria por nombre
app.get('/categoria', validaNombreCat,existeCategoria,(req,res) =>{
    try{
    const data = obtenerCategoriaNombre(req.body);
    return res.status(200).json(data);
    } catch {
    return res.status(400).json("Error")
    }

    
})

//API crear una nueva categoria
app.post('/categorias',validacionCat,validacionExistencia,(req,res) =>{
    try{
    const data= agregarCategoria(req.body);
    console.log('Categoria subida con exito')
    return res.status(200).json(data)
    } catch {
        return res.status(400).json("Error")
    }
});
// Modifica las categorias
app.put('/categorias', validacionCat, (req,res) =>{
    try{
    const data = modificarCategoria(req.body);
    return res.status(200).json(data);
    } catch {
        return res.status(400).json("Error")
    }
})

//API elimina categoria por nombre
app.delete('/categorias', validaNombreCat,(req,res) =>{
    try{
    const data = eliminarCategoriaNombre(req.body);
    return res.status(200).json('Eliminado con exito')
    } catch {
        return res.status(400).json("Error")
    }
})

