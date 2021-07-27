const Usuarios = require('../modelo/tienda.model');

module.exports.altaClientes = async (data) => {
  try {
    let cliente = new Usuarios(data);
    let resultado = await cliente.alta();
    return resultado;
  } catch (error) {
    throw new Error ({error: error.message})
  }
}
module.exports.bajaClientes = async (data) => {
  try {
    await Usuarios.destroy({
      where: { id:data }
    })
    return true;
  } catch (error) {
    throw new Error ('No se eliminó')
  }
}

module.exports.modificarCliente = async(data)=>{
  try {
    await Usuarios.actualizar({nombre: data.nombre, email: data.nombre, contraseña:data.contraseña})
    return true; 
  } catch (error) {
    throw new Error ('No pudo actualizar')
  }
}
