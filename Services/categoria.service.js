let categoriasArray= [];

 const findCategorie= (nombre) => {
     if(categoriasArray.length>0){
         const categoriaExiste = categoriasArray.some((categoria) =>{
             return categoria.nombre===nombre
         }); 
         return categoriaExiste;
     }return false
 }

 const agregarCategoria = (categoria) =>{
     categoriasArray.push(categoria);
     return categoriasArray;
 }

 const obtenerCategorias = () =>{
     return categoriasArray;
 }

 const obtenerCategoriaNombre =(categoria) => {
    let item = {};
    console.log(categoria);
    categoriasArray.forEach((elemento) =>{
        if(elemento.nombre === categoria.nombre){
            item = elemento;
        }
    });
    return item
 }

 const eliminarCategoria = (item) =>{
     let i = categoriasArray.indexOf(item);
     categoriasArray.slice(i,1);
     return categoriasArray;
 }
 
 const eliminarCategoriaNombre = (categoria) =>{
    
    console.log('Eliminar ',categoria);
    if(categoriasArray.length>0){
        categoriasArray.forEach((elemento) =>{
            if(elemento.nombre === categoria.nombre){
                let index = categoriasArray.indexOf(elemento);
                console.log(index);
                categoriasArray.splice(index,1);
            }
        });
        
        return categoriasArray;
    }else return false

    
}



 module.exports = {obtenerCategoriaNombre,eliminarCategoriaNombre,findCategorie,agregarCategoria,obtenerCategorias, eliminarCategoria}

