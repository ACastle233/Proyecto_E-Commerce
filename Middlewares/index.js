const { request } = require("express");
const {findCategorie}= require("../Services/categoria.service")

const corsOption ={ origin:function(origin,callback){
    if(process.env.LISTA_BLANCA.indexOf(origin)!==-1){
        callback(null,true)

    }else{callback(new Error('No autorizado por CORS'))}
} }

const validacionCat =(req,res,next)=>{
    const{id, name}= req.body;
    console.log(req.body.message);
    if(!name || !id ){
        return res.status(400).json('Datos invalidos!!');
    }
    next()
}

const validaNombreCat= (req,res,next) => {
    const{id}= req.body;
    if(!id){
        return res.status(400).json('Datos invalidos!!');
    }
    next()
}

const validacionExistencia = (req,res,next)=>{
    const{id, name}= req.body;
    const result= findCategorie(id)
    const result2= findCategorie(name)
    console.log('resultado -> ',result, result2)
    if (result) return res.status(409).json('Esa categoria ya está dada de alta')
    next()
}

const existeCategoria = (req,res,next)=>{
    const{id}= req.body;
    const result= findCategorie(id)

    console.log('resultado de la busqueda-> ',result)
    if (!result) return res.status(409).json('Esa categoria no existe')
    next()
}

const middleware = (req,resp,next) =>{
    console.log(req.body.message);
    next()
}  

module.exports={corsOption, existeCategoria, validaNombreCat,validacionCat,validacionExistencia,middleware}