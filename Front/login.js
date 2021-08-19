
async function signIn() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;


      
      const res = await fetch(`http://localhost:3000/api/usuarios/login`, {
        method: "POST", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({email: user, password: pass})
      });
      const myJson = await res.json(); //extract JSON from the http response
      console.log(myJson);
      localStorage.setItem('usuario', myJson.usuario)
      window.location.href = 'http://127.0.0.1:5500/Front/index.html';
   

}

function signUp() {

  let user = document.getElementById('userR').value;
  let pass = document.getElementById('passR').value;
  let passR = document.getElementById('confirmPassR').value;
  let email = document.getElementById('emailR').value;

  if(pass === passR){
    const userAction = async () => {
    
      const res = await fetch(`http://localhost:3000/api/usuarios/register`, {
        method: "POST", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({username:user,email: email, password: passR})
      });
      const myJson = await res.json(); //extract JSON from the http response
      console.log(myJson);
      alert('Se ha registrado con exito')
    };
    userAction();

  }else{
    alert('Las contraseñas no coinciden')
  }

  

}

