
let textML = document.getElementById('textCategorie');
const {findCategorie, agregarCategoria,fn}=require('./Services/categoria.service')
fn()
class MercadoLibreService {
  constructor(url) {
    this.url = url;
  }

}
class Contenido {
  constructor(header, content, btn) {
    this.header = header;
    this.content = content;
    this.btn = btn;
  }
}

async function renderData(link) {
  let response = await fetch(link);
  let data = await response.json();


  for (let i = 1; i <= 3; i++) {
    
    let cont = document.getElementById("carCont" + i);
    let contDes = document.getElementById("carContDes" + i);

    let idx1 = Math.floor(Math.random() * Object.keys(data.results).length);

    document.getElementById("car" + i).setAttribute("src", data.results[idx1].thumbnail);
    let about = await fetch('https://api.mercadolibre.com/items/' + data.results[idx1].id + '/description');
    about = await about.json();
    let Objeto = new Contenido(document.createElement('h1'),
      document.createElement('p'),
      document.createElement('a'));

    Objeto.header.textContent = `${data.results[idx1].title}`;

    Objeto.content.textContent = `${about.plain_text}`;

    Objeto.btn.textContent = "Ir a...";

    Objeto.btn.setAttribute("href", data.results[idx1].permalink);
    Objeto.btn.className += "btn btn-lg btn-warning"; //warning hace el boton amarillo

    cont.appendChild(Objeto.header);
    contDes.appendChild(Objeto.content);
    cont.appendChild(Objeto.btn);

  }


  for (let j = 0; j < 9; j++) {
    let columna = document.createElement("div");
    let card = document.createElement("div");
    let cardbody = document.createElement("div")
    let contitems = document.getElementById("items");

    columna.className += "col-lg-4";
    card.className += "card";
    cardbody.className += "card-body";

    //let idx2=Math.floor(Math.random() * Object.keys(data.results).length);
    let imagen = document.createElement("img");
    imagen.setAttribute("src", data.results[j].thumbnail);
    let Objeto = new Contenido(document.createElement('h4'), document.createElement('p'), document.createElement('a'));
    let about = await fetch('https://api.mercadolibre.com/items/' + data.results[j].id + '/description');
    about = await about.json();

    Objeto.header.textContent = `${data.results[j].title}`;
    Objeto.content.textContent = `${about.plain_text}`;

    Objeto.btn.textContent = "Ver más";
    Objeto.btn.setAttribute("href", data.results[j].permalink);
    Objeto.btn.className += "btn btn-lg btn-warning";


    cardbody.appendChild(Objeto.header);
    cardbody.appendChild(Objeto.content);
    cardbody.appendChild(Objeto.btn);

    card.appendChild(imagen);
    card.appendChild(cardbody);

    columna.appendChild(card);

    contitems.appendChild(columna);

  }

}

renderData('https://api.mercadolibre.com/sites/MLM/search?category=MLM1743');
