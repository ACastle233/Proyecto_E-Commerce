const midd = require('../Middlewares/midd.usuario')
const usuariosService = require('../Services/usuarios.service')
const cors = require('cors')

//Exporto los modulos
module.exports = (app)=> {

    app.post('/login', async (req,res)=>{
        let usuario = req.body
        console.log(usuario)
        try {
            let resultado = await usuariosService.chequearUsrValido(usuario)
            if (resultado) {
                let validacion = await usuariosService.generaToken(usuario)
                res.json(validacion)
                //res.redirect('http://localhost:5500/Front/index.html');
            }
        }catch (err){
            console.log(err)
            res.status(400).send('Usuario no registrado')
        }
    })

    app.get('/usuarios', midd.usuarioValido, async (req,res)=>{
        console.log(req.params)
        try {
            let resultado = await usuariosService.listaUsuarios()
            res.json(req.params)
        }catch (err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')
        }
    })

    app.post('/nuevousuario', async (req,res)=>{
        try{
            let usuario = req.body;
            console.log(usuario)
            let resultado = await usuariosService.crearUsuarios(usuario)
            console.log(resultado)
            res.json(resultado)

        }catch(err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })
}