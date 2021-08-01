
function signIn() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    const userAction = async () => {
      
      const res = await fetch(`http://localhost:3000/api/usuarios/login`, {
        method: "POST", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({email: user, password: pass})
      });
      const myJson = await res.json(); //extract JSON from the http response
      console.log(myJson);
    };
    userAction();

}

