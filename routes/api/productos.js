
const router = require('express').Router();
const { Producto }= require('../../db');
const midd = require('../../Middlewares/midd.producto')

router.get('/', async (req,res)=>{
    try {
        const producto= await Producto.findAll();// recupera todos los registros de la tabla, regresa una promesa
        res.json(producto) 
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error en la consulta'})
    }});
router.post('/', midd.checkDatosProducto, async (req,res)=>{
    try {
        const producto= await Producto.create(req.body);
        res.json(producto); 
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al agregar el producto'})
    }});
router.put('/:productoId', async (req,res)=>{
    try {
        await Producto.update(req.body,{
            where:{id: req.params.productoId }
        });
        res.json ({ success: 'Se ha modificado con éxito' })
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al modificar los datos'})
    }});
    
router.delete('/:productoId', async (req,res)=>{
    try {
        await Producto.destroy({
            where:{id: req.params.productoId }
        });
        res.json ({ success: 'Se ha eliminado el registro con éxito' })
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'No se ha podido eliminar'})
    }});module.exports = router;