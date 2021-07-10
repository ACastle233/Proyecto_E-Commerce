let categoriasArray= [];

 const findCategorie= (categoria) => {
     if(categoriasArray.length>0){
         const categoriaExiste = categoriasArray.some((categoriaexistente) =>{
             return categoriaexistente.categoria===categoria
         }); return categoriaExiste;
     }return false
 }

 const agregarCategoria = (categoria) =>{
     categoriasArray.push(categoria);
     return categoriasArray;
 }
 const fn = () =>{
    console.log('Hola');
    return categoriasArray;
}

 module.exports = {findCategorie,agregarCategoria,fn}

