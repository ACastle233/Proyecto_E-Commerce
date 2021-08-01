

function payMethod() {
  
  const userAction = async () => {

    let carrito = Carrito.getLocalCarrito();

    const response = await fetch("http://localhost:3000/api/productos", {
      method: "GET", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
        
         //'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    
    let productsArray = Object.values(carrito);
    for (let i = 0; i < productsArray.length; i++) {
      //myJson[0].stock =- productsArray[i]._cantProduct;
      const myProduct = myJson.find((data) =>{
        return data.id == productsArray[i]._idProduct;
      })
      myProduct.stock = myProduct.stock - productsArray[i]._cantProduct;
      console.log(myProduct)
      const res = await fetch(`http://localhost:3000/api/productos/${myProduct.id}`, {
      method: "PUT", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
        
         //'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(myProduct)
    });
    }
    console.log(myJson);

    alert("Compra ejecutada con exito");
    Carrito.vaciarCarrito();

  };
  userAction();

//   var req = new XMLHttpRequest();   // new HttpRequest instance 
//   var theUrl = "http://localhost:3000/api/productos";
//   req.open("GET", theUrl, true);
//   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   req.onload  = function() {
//     let jsonResponse = req.response;
//     // do something with jsonResponse
//     console.log(jsonResponse)
//  };
//  req.send(null);
}
