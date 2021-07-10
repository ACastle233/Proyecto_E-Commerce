
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



}