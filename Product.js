class Product{
    constructor(idProducto, nameProduct, prizeProduct){
        this._idProducto = idProducto;
        this._nameProduct = nameProduct;
        this._prizeProduct = prizeProduct;
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

    get prizeProduct(){
        return this._prizeProduct;
    }

    set prizeProduct(prizeProduct){
        this._prizeProduct = prizeProduct;
    }

}