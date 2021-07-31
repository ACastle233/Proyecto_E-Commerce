module.exports =(sequelize, type) =>{
    return sequelize.define('productos',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        stock:type.INTEGER,
        precio:type.FLOAT,
    })
}