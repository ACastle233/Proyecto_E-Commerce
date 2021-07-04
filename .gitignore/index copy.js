


let textML = document.getElementById('contenedor');

/*
async function getCategories(idCategorie) {
    let urlId = 'https://api.mercadolibre.com/categories/' + idCategorie;
    let response = await fetch(urlId);
    let data = await response.json();
    return data;
}*/


  

//const resultado = getCategories('MLA1743');

class MercadoLibreService {
    constructor(url) {
      this.url = url;
     }
    
    getCategories() {
      return fetch (this.url)
    }
  }
  

function renderData(mercadoLibreObject) {
    mercadoLibreObject.getCategories()
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        for (let index = 0; index < 10; index++) {
          let keywordMl = document.createElement('h2');
          keywordMl.textContent = `${data[index].keyword}`;
    
          let createMLUrl = document.createElement('a');
          createMLUrl.setAttribute('href', data[index].url);
          createMLUrl.textContent = `${data[index].url}`;
    
          textML.appendChild(keywordMl)
          textML.appendChild (createMLUrl)
          
        }

        
      })
      .catch((err) => {
        console.log(err);
    })
  }
  
  const newMercadoLibre = new MercadoLibreService('https://api.mercadolibre.com/trends/MLM/MLM1743');
  
  renderData(newMercadoLibre);