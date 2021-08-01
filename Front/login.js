


//let response = await fetch(link);

function signIn() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;


    //let datForm = new FormData(document.getElementById('idForm'))
    //console.log(datForm);

    const userAction = async () => {
      const res = await fetch(`http://localhost:3000/api/productos/${myProduct.id} `, {
      method: "PUT", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
        
         //'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(myProduct)
    });
    }
    console.log(myJson);
    };
    userAction();

}

