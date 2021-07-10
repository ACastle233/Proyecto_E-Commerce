const UsersDb=[]

class User{
    contructor(username,password,email){
    this.username = username;
    this.password = password;
    this.email = email;
}

    checkPassword(password,password2) {
     if(password===password2){
         this.password=password
     } else {
         alert('Las contraseñas no coinciden')
     }  
    }
}



