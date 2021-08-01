export default class Product{
    constructor(idProduct, nameProduct, priceProduct,cantProduct, stockProduct){
        this._idProduct = idProduct;
        this._nameProduct = nameProduct;
        this._priceProduct = priceProduct;
        this._cantProduct = cantProduct;
        this._stockProduct = stockProduct;
    }

    get idProducto(){
        return this._idProducto;
    }

    set idProducto(id){
        this._idProducto = id;
    }

    get nameProduct(){
        return this._nameProduct;
    }

    set nameProduct(updateName){
        this._nameProduct = updateName;
    }

    get priceProduct(){
        return this._priceProduct;
    }

    set priceProduct(priceProduct){
        this._priceProduct = priceProduct;
    }

    get cantProduct(){
        this._cantProduct=cantProduct;
    }
}
