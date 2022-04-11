var email = document.getElementById('email');
var password = document.getElementById('password');
var pic = document.getElementById('foto');

function entrar(e){
    e.preventDefault();

    var index = usersList.findIndex(
        user => user.email === email.value ||
            user.login.username === email.value);

    if(index < 0){
        alert('Usuário não encontrado');
        return;
    }

    var usuario = usersList[index];

    if(usuario.login.password !== password.value){
        alert("Senha incorreta");
        return;
    }

    console.log(usuario);

    alert('Login efetuado com sucesso');

}

function trocaFoto(){

    pic.src='./images/user.jpg';

    if(email.value === ""){
        return;
    }

    var index = usersList.findIndex(
        user => user.email === email.value ||
            user.login.username === email.value);

    if(index < 0){
        alert('Usuário não encontrado');
        return;
    }

    var usuario = usersList[index];
    email.value = usuario.email;
    pic.src = usuario.picture.large;

}