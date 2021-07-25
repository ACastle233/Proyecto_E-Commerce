const templateCarrito = document.getElementById('template-carrito').content;
const templateFooter = document.getElementById('template-footer').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

class Carrito{

    constructor(){
        this.products = [];
        this.quantity = 0;
    }

    addProduct(producto){
        this.products.push(producto)
        this.updateQuantity(1);
    }

    updateQuantity(quantity){
        this.quantity += quantity;
    }

    deleteProduct(){
        this.products.pop();
        this.updateQuantity(-1);
    }

    viewCartDetails(){
        this.products.map( (item) => {
            console.log(item);
        } );
    }

    static getLocalCarrito(){
        let carrito = JSON.parse(localStorage.getItem('carrito'));
        return carrito;
    }
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

const pintarCarrito = () => {


    items.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        
        templateCarrito.querySelectorAll('p')[0].textContent = producto.id
        templateCarrito.querySelector('h3').textContent = producto.title
        templateCarrito.querySelectorAll('p')[1].textContent = `${producto.quantity} x ${formatter.format(producto.price)}`
        templateCarrito.querySelectorAll('p')[3].textContent = formatter.format(producto.price * producto.quantity);
  
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter();
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío </th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { quantity }) => acc + quantity, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {quantity, price}) => acc + quantity * price ,0)
    // console.log(nPrecio)
  
    //templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('#subtotal').textContent = formatter.format(nPrecio);
    templateFooter.querySelector('#total').textContent = formatter.format(nPrecio);
  
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
  
    footer.appendChild(fragment)
  
    // const boton = document.querySelector('#vaciar-carrito')
    // boton.addEventListener('click', () => {
    //     carrito = {}
    //     pintarCarrito()
    // })
  
  }


let carrito = Carrito.getLocalCarrito();

console.log(carrito);
pintarCarrito();