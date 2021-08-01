import Product from "./Product.js";

const items = document.getElementById("items");
const cards = document.getElementById("cards");
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
const footer = document.getElementById("footer");
let textML = document.getElementById("textCategorie");
let carrito = {};

var formatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
cards.addEventListener("click", (e) => {
  addCarrito(e);
});
items.addEventListener("click", (e) => {
  btnAumentarDisminuir(e);
});

class miContenido {
  constructor(header, content, price, stock, btn) {
    this.header = header;
    this.content = content;
    this.price = price;
    this.stock = stock
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

    document
      .getElementById("car" + i)
      .setAttribute("src", data.results[idx1].thumbnail);
    let about = await fetch(
      "https://api.mercadolibre.com/items/" +
        data.results[idx1].id +
        "/description"
    );
    
    about = await about.json();
    let Objeto = new miContenido(
      document.createElement("h1"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("a")
    );

    Objeto.header.textContent = `${data.results[idx1].title}`;
    Objeto.price.textContent = `${data.results[idx1].price}`;

    Objeto.content.textContent = `${about.plain_text}`;
    Objeto.stock.textContent = '';
    Objeto.btn.textContent = "Más info...";

    Objeto.btn.setAttribute("href", data.results[idx1].permalink);
    Objeto.btn.className += "btn btn-lg btn-warning"; //warning hace el boton amarillo

    cont.appendChild(Objeto.header);
    contDes.appendChild(Objeto.content);
    cont.appendChild(Objeto.btn);
  }

  //Nuestros productos

  let res = await fetch("http://localhost:3000/api/productos");
  let resultaData = await res.json();

  console.log(resultaData)

  for (let j = 0; j < resultaData.length; j++) {
    let columna = document.createElement("div");
    let card = document.createElement("div");
    let cardbody = document.createElement("div");
    let contitems = document.getElementById("cards");

    columna.className += "col-lg-4";
    card.className += "card";
    cardbody.className += "card-body";

    //let idx2=Math.floor(Math.random() * Object.keys(data.results).length);
    //let imagen = document.createElement("img");
    //imagen.setAttribute("src", data.results[j].thumbnail);
    let Objeto = new miContenido(
      document.createElement("h4"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("button")
    );

    Objeto.header.textContent = `${resultaData[j].nombre}`;
    Objeto.content.textContent = `${resultaData[j].descripcion}`;
    Objeto.price.textContent = `${resultaData[j].precio}`;
    Objeto.stock.textContent = `Stock: ${resultaData[j].stock}`

    Objeto.btn.textContent = "Agregar al carrito";
    Objeto.btn.setAttribute("data-id", resultaData[j].id);
    // Objeto.btn.setAttribute("href", data.results[j].permalink);
    Objeto.btn.className += "btn btn-lg btn-warning";

    cardbody.appendChild(Objeto.header);
    cardbody.appendChild(Objeto.content);
    cardbody.appendChild(Objeto.price);
    cardbody.appendChild(Objeto.stock);
    cardbody.appendChild(Objeto.btn);

    //card.appendChild(imagen);
    card.appendChild(cardbody);

    columna.appendChild(card);

    contitems.appendChild(columna);
  }
}

//Todo el codigo siguiente corresponde a la funcionalidad del carrito de compras

// Agregar al carrito
const addCarrito = (e) => {
  if (e.target.lastChild.parentElement.classList.contains("btn")) {
    // console.log(e.target.dataset.id)
    //console.log(e.target.lastChild)
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (item) => {
  console.log(item);

  //AQUI AGREGAR REQUERIR CLASE PRODUCTO
  // const producto = {
  //   title: item.querySelector("h4").textContent,
  //   price: item.children[2].textContent,
  //   id: item.querySelector("button").dataset.id,
  //   quantity: 1,
  // };

  const producto = new Product(
    item.querySelector("button").dataset.id,
    item.querySelector("h4").textContent,
    item.children[2].textContent,
    1,
    String(item.children[3].textContent).split(' ')[1]
  );

  console.log(producto);
  if (carrito.hasOwnProperty(producto.id)) {
    producto._cantProduct = carrito[producto._idProduct]._cantProduct + 1;
  }
  console.log(producto._stockProduct)

  carrito[producto._idProduct] = { ...producto };
  pintarCarrito();
};

const pintarCarrito = () => {
  items.innerHTML = "";

  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto._idProduct;
    templateCarrito.querySelectorAll("td")[0].textContent =
      producto._nameProduct;
    templateCarrito.querySelectorAll("td")[1].textContent =
      producto._cantProduct;
    templateCarrito.querySelector("span").textContent =
      producto._priceProduct * producto._cantProduct;

    //botones
    templateCarrito.querySelector(".btn-info").dataset.id = producto._idProduct;
    templateCarrito.querySelector(".btn-danger").dataset.id =
      producto._idProduct;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const pintarFooter = () => {
  footer.innerHTML = "";

  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío</th>
      `;
    return;
  }

  // sumar cantidad y sumar totales
  const nCantidad = Object.values(carrito).reduce(
    (acc, { _cantProduct }) => acc + _cantProduct,
    0
  );
  const nPrecio = Object.values(carrito).reduce(
    (acc, { _cantProduct, _priceProduct }) =>
      acc + _cantProduct * _priceProduct,
    0
  );
  // console.log(nPrecio)

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);

  footer.appendChild(fragment);

  const boton = document.querySelector("#vaciar-carrito");
  boton.addEventListener("click", () => {
    carrito = {};
    pintarCarrito();
  });
};

const btnAumentarDisminuir = (e) => {
  console.log(e.target.classList.contains("btn-info"));
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    if(producto._cantProduct < producto._stockProduct){

      producto._cantProduct++;
      carrito[e.target.dataset.id] = { ...producto };
      pintarCarrito();
    }
    
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto._cantProduct--;
    if (producto._cantProduct === 0) {
      delete carrito[e.target.dataset.id];
    } else {
      carrito[e.target.dataset.id] = { ...producto };
    }
    pintarCarrito();
  }
  e.stopPropagation();
};

//Traer todos los items de la API de ML
renderData("https://api.mercadolibre.com/sites/MLM/search?category=MLM1743");

//Si hay un carrito en localStorage, pintalo
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  pintarCarrito();
}
