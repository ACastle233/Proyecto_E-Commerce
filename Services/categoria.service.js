let categoriasArray= [];

const fetch = require("node-fetch"); 

async function renderData(link) {
    let response = await fetch(link);
    let data = await response.json()
    

    for(let i in data)
        categoriasArray.push(data[i]);
    return data; 
}
let json_data = renderData('https://api.mercadolibre.com/sites/MLM/categories')






const findCategorie= (id) => {
     if(categoriasArray.length>0){
         const categoriaExiste = categoriasArray.some((categoria) =>{
             return categoria.id===id
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
        if(elemento.id === categoria.id){
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
            if(elemento.id === categoria.id){
                let index = categoriasArray.indexOf(elemento);
                console.log(index);
                categoriasArray.splice(index,1);
            }
        });
        
        return categoriasArray;
    }else return false

    
}

const modificarCategoria = (categoria) => {
    if(findCategorie){
        categoriasArray.splice(categoria)
    }
    categoriasArray.push(categoria)
    return categoriasArray;
}



 module.exports = {modificarCategoria,obtenerCategoriaNombre,eliminarCategoriaNombre,findCategorie,agregarCategoria,obtenerCategorias, eliminarCategoria}

