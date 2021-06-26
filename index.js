
let textML = document.getElementById('textCategorie');

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
        let legend = document.createElement('h2');
        legend.textContent = `${data.value}`;
  
        let createChuck = document.createElement('img');
        createChuck.setAttribute('src', data.icon_url);
        createChuck.style.width = '200px';
  
        textML.appendChild(legend)
        textML.appendChild (createChuck)
      })
      .catch((err) => {
        console.log(err);
    })
  }
  
  const newMercadoLibre = new MercadoLibreService('https://api.mercadolibre.com/categories/' + 'MLA1743');
  
  renderData(newMercadoLibre);