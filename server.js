const http = require('http');
const express =require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const {findCategorie, agregarCategoria,fn}=require('./Services/categoria.service')

//MIDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use((err,req,res,next)=>{
    if(err){if(!res.headersSend){return res.status(500).json('Error interno del servidor')} } 
    next();
}  )
const {corsOption}=require('./Middlewares/index')

fn()

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});

app.get('/',cors(corsOption),(req,res) =>{
    res.status(200).json({message:'Hola'})
})

app.get('/categorias',cors(corsOption),(req,res) =>{
    res.status(200).json({message:'Hola Categorias'})
})
app.post('/categorias',(req,res) =>{
    const data = fn()
    return res.status(200).json({message:'Categoría subida con exito'})
    
})
app.delete('/categorias',cors(corsOption),(req,res) =>{
    res.status(200).json({message:'metodo delete'})
})

