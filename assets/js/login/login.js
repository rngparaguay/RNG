import { userLogin } from "./apiLogin.js"
import { getUsuario } from "../usuario/apiUsuario.js"

let login;

let usuario;

let $email = document.getElementById("email")
let $password = document.getElementById("password")
let $submit = document.getElementById("submit")
let $formulario = document.getElementById("form")

let email = $email.value
let password = $password.value
let campos = {
    email: false,
    password: false
}

$formulario.reset()

setCookie("token", 0)


let logoutURL= "https://www.rng.com.py/login.html"
let loginURL= "https://www.rng.com.py/inicio.html"

function logout(){
    window.location.href = logoutURL;
}

function log_in(){
    window.location.href = loginURL;
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path/; max-age=" + 60 * 60
}


$submit.addEventListener('click', async function (e) {

    e.preventDefault()


    if (email == "") {
        document.getElementById('div-email').classList.add('form__alert');
        document.getElementById("email").focus()
    }

    if (password == "") {
        document.getElementById('div-password').classList.add('form__alert');
        document.getElementById("password").focus()
    }


    let datos = {
        email: email,
        password: password
    }

    login = await userLogin(datos)


    if (login.error == 'Token not provider') {
        $email.value.remove()
        $email.focus()

    }

    if (login.error == 'Invalid Password') {
        document.getElementById('div-password').classList.add('form__alert-invalido');
        $password.focus()
        campos['password'] = false;
    } else {
        campos['password'] = true;
    }

    if (login.error == 'User not found') {
        document.getElementById('div-email').classList.add('form__alert-invalido');
        $password.focus()
        campos['email'] = false;
    } else {
        campos['email'] = true;
    }






    if (campos.email && campos.password) {

        let token = login.token;
        let idUser = login.user.id;

        usuario = await getUsuario(token, idUser)


        setCookie("token", token)
        setCookie("idUser", idUser)

        log_in();
    }

})


$email.addEventListener(`change`, function () {
    email = $email.value
    if (email == "") {
        document.getElementById('div-email').classList.add('form__alert');
        document.getElementById("email").focus()
    } else {
        document.getElementById('div-email').classList.remove('form__alert');
    }

})

$password.addEventListener(`change`, function () {
    password = $password.value
    if (password == "") {
        document.getElementById('div-password').classList.add('form__alert');
        document.getElementById("password").focus()
    } else {
        document.getElementById('div-password').classList.remove('form__alert');
    }
})

$password.addEventListener('keyup', () => {
    document.getElementById('div-password').classList.remove('form__alert-invalido');
})

$email.addEventListener('keyup', () => {
    document.getElementById('div-email').classList.remove('form__alert-invalido');
})


