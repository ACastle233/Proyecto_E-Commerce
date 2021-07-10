let categoriasArray= [];

 const findCategorie= (nombre) => {
     if(categoriasArray.length>0){
         const categoriaExiste = categoriasArray.some((categoriaexistente) =>{
             return categoriaexistente.categoria===nombre
         }); return categoriaExiste;
     }return false
 }

 const agregarCategoria = (categoria) =>{
     categoriasArray.push(categoria);
     return categoriasArray;
 }



 module.exports = {findCategorie,agregarCategoria}

