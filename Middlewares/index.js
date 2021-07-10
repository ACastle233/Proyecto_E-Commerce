const { response } = require("express");
const {findCategorie}= require("../Services/categoria.service")

const corsOption ={ origin:function(origin,callback){
    if(process.env.LISTA_BLANCA.indexOf(origin)!==-1){
        callback(null,true)

    }else{callback(new Error('No autorizado por CORS'))}
} }

const validacionCat =(req,res,next)=>{
    const{nombre,ID}= req.body;
    if(!nombre||!ID){
        return res.status(400).json('Hace falta categoría o ID')
    } next()
}

const validacionExistencia = (req,res,next)=>{
    const{nombre, ID}= req.body;
    const result= findCategorie(nombre)
    const result2= findCategorie(ID)
    if (result && result2) return res.status(409).json('Esa categoria ya está dada de alta')
    next()
} 

const middleware = (req,resp,next) =>{
    console.log(req.body.message);
    next()
}  

module.exports={corsOption,validacionCat,validacionExistencia,middleware}