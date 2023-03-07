import { postUsuario, postPerfil } from "../usuario/apiUsuario.js"

let usuario;

let perfil;



// =========== Ejecutar Funciones ===========



// =========== Alterta de campos vacios ===========

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    numero: /^[0-9]{6,7}$/, // numeros
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,20}$/, // 4 a 20 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

let $formulario = document.getElementById("form")

let $inputs = document.querySelectorAll('#form input')
let $submit = document.getElementById("submit")

let $nacimiento = document.getElementById("nacimiento")
let $fname = document.getElementById("fname")
let $lname = document.getElementById("lname")
let $ci = document.getElementById("ci")
let $sexo = document.getElementById("sexo")
let $nick = document.getElementById("nick")
let $email = document.getElementById("email")
let $password = document.getElementById("password")
let $pais = document.getElementById("pais")
let $departamento = document.getElementById("departamento")
let $ciudad = document.getElementById("ciudad")
let $plataforma_uno = document.getElementById("plataforma_uno")
let $plataforma_dos = document.getElementById("plataforma_dos")
let $plataforma_tres = document.getElementById("plataforma_tres")
let $juego_uno = document.getElementById("juego_uno")
let $juego_dos = document.getElementById("juego_dos")
let $juego_tres = document.getElementById("juego_tres")
let $terminos = document.getElementById("terminos")

let nacimiento = $nacimiento.value
let lname = $lname.value
let fname = $fname.value
let ci = $ci.value
let sexo = $sexo.value
let nick = $nick.value
let email = $email.value
let password = $password.value
let pais = $pais.value
let departamento = $departamento.value
let ciudad = $ciudad.value
let plataforma_uno = $plataforma_uno.value
let plataforma_dos = null
let plataforma_tres = null
let juego_uno = $juego_uno.value
let juego_dos = null
let juego_tres = null
let edad = null
let fechaNacimiento = null
const campos = {
    fechaNacimiento: false,
    fname: false,
    lname: false,
    ci: false,
    sexo: false,
    nick: false,
    email: false,
    password: false,
    pais: false,
    departamento: false,
    ciudad: false,
    plataforma_uno: false,
    juego_uno: false
}
let games = []

let logoutURL = "/dev/views/RegistroHecho.html"

function logout() {
    window.location.href = logoutURL;
}

const validarForm = (e) => {

    switch (e.target.name) {
        case 'fname':
            fname = $fname.value
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('div-fname').classList.remove('form__alert-invalido');
                campos['fname'] = true;
            } else {
                campos['fname'] = false;
                document.getElementById('div-fname').classList.add('form__alert-invalido');
                document.getElementById("fname").focus()
            }
            if (e.target.value != "") {
                document.getElementById('div-fname').classList.remove('form__alert');
            } else {
                document.getElementById('div-fname').classList.add('form__alert');
            }
            break;
        case 'lname':
            lname = $lname.value
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('div-lname').classList.remove('form__alert-invalido');
                campos['lname'] = true;
            } else {
                campos['lname'] = false;
                document.getElementById('div-lname').classList.add('form__alert-invalido');
                document.getElementById("lname").focus()
            }
            if (e.target.value != "") {
                document.getElementById('div-lname').classList.remove('form__alert');
            } else {
                document.getElementById('div-lname').classList.add('form__alert');
            }
            break;

        case 'ci':
            ci = $ci.value
            if (expresiones.numero.test(e.target.value)) {
                document.getElementById('div-ci').classList.remove('form__alert-invalido');
                campos['ci'] = true;
            } else {
                campos['ci'] = false;
                document.getElementById('div-ci').classList.add('form__alert-invalido');
                document.getElementById("ci").focus()
            }
            if (e.target.value != "") {
                document.getElementById('div-ci').classList.remove('form__alert');
            } else {
                document.getElementById('div-ci').classList.add('form__alert');
            }
            break;

        case 'ussername':
            nick = $nick.value
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById('div-nick').classList.remove('form__alert-invalido');
                campos['nick'] = true;
            } else {
                campos['nick'] = false;
                document.getElementById('div-nick').classList.add('form__alert-invalido');
                document.getElementById("nick").focus()
            }
            if (e.target.value != "") {
                document.getElementById('div-nick').classList.remove('form__alert');
            } else {
                document.getElementById('div-nick').classList.add('form__alert');
            }
            break;
        case 'email':
            email = $email.value
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('div-email').classList.remove('form__alert-invalido');
                document.getElementById("email").focus()
                campos['email'] = true;
            } else {
                campos['email'] = false;
                document.getElementById('div-email').classList.add('form__alert-invalido');
            }
            if (e.target.value != "") {
                document.getElementById('div-email').classList.remove('form__alert');
            } else {
                document.getElementById('div-email').classList.add('form__alert');
            }
            break;
        case 'password':
            password = $password.value
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('div-password').classList.remove('form__alert-invalido');
                document.getElementById("password").focus()
                campos['password'] = true;
            } else {
                campos['password'] = false;
                document.getElementById('div-password').classList.add('form__alert-invalido');
            }
            if (e.target.value != "") {
                document.getElementById('div-password').classList.remove('form__alert');
            } else {
                document.getElementById('div-password').classList.add('form__alert');
            }
            break;
    }
}


$inputs.forEach((input) => {
    input.addEventListener(`change`, validarForm)
})



$nacimiento.addEventListener(`change`, function () {
    nacimiento = $nacimiento.value

    let anoNacimiento = parseInt(String(nacimiento).substring(0, 4))
    let mesNacimiento = parseInt(String(nacimiento).substring(5, 7))
    let diaNacimiento = parseInt(String(nacimiento).substring(8, 10))

    if (anoNacimiento < 2011 && anoNacimiento > 1949) {
        document.getElementById('div-nacimiento').classList.remove('form__alert');
        document.getElementById('div-nacimiento').classList.remove('form__alert-invalido');

        fechaNacimiento = new Date(anoNacimiento.toString() + "-" + mesNacimiento.toString() + "-" + diaNacimiento.toString()).toISOString()

        let fechaActual = new Date()
        let anoActual = parseInt(fechaActual.getFullYear())
        let mesActual = parseInt(fechaActual.getMonth() + 1)
        let diaActual = parseInt(fechaActual.getDate())

        edad = anoActual - anoNacimiento
        if (mesActual < mesNacimiento) {
            edad--
        } else if (mesActual == mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--
            }
        }
        campos['fechaNacimiento'] = true;


    } else {
        campos['fechaNacimiento'] = false;
        document.getElementById('div-nacimiento').classList.add('form__alert-invalido');
    }

})

$email.addEventListener(`keyup`, function () {
    campos['email'] = true;
    email = $email.value
    document.getElementById('div-email').classList.remove('form__alert-existente');
})

$sexo.addEventListener(`change`, function () {
    campos['sexo'] = true;
    sexo = $sexo.value
    document.getElementById('div-sexo').classList.remove('form__alert');
})

$pais.addEventListener(`change`, function () {
    campos['pais'] = true;
    pais = $pais.value
    document.getElementById('div-pais').classList.remove('form__alert');
})

$departamento.addEventListener(`change`, function () {
    campos['departamento'] = true;
    departamento = $departamento.value
    document.getElementById('div-departamento').classList.remove('form__alert');
})

$ciudad.addEventListener(`change`, function () {
    campos['ciudad'] = true;
    ciudad = $ciudad.value
    document.getElementById('div-ciudad').classList.remove('form__alert');
})

$plataforma_uno.addEventListener(`change`, function () {
    campos['plataforma_uno'] = true;
    plataforma_uno = $plataforma_uno.value
    document.getElementById('div-plataforma_uno').classList.remove('form__alert');
})

$juego_uno.addEventListener(`change`, function () {
    campos['juego_uno'] = true;

    juego_uno = $juego_uno.value

    document.getElementById('div-juego_uno').classList.remove('form__alert');
})

$plataforma_dos.addEventListener(`change`, function () {
    plataforma_dos = $plataforma_dos.value
})

$plataforma_tres.addEventListener(`change`, function () {
    plataforma_tres = $plataforma_tres.value
})


$juego_dos.addEventListener(`change`, function () {
    juego_dos = $juego_dos.value
})


$juego_tres.addEventListener(`change`, function () {
    juego_tres = $juego_tres.value
})



$terminos.addEventListener(`change`, function () {

    if ($terminos.checked == false) {
        $terminos.classList.add('terminos_alert')
        $terminos.focus()
    } else {
        $terminos.classList.remove('terminos_alert');
    }
})



$submit.addEventListener('click', async function (e) {

    e.preventDefault()


    if (nacimiento == "") {
        $nacimiento.focus()
        document.getElementById('div-nacimiento').classList.add('form__alert');

    } else {
        document.getElementById('div-fname').classList.remove('form__alert');
    }

    if (fname == "") {
        document.getElementById('div-fname').classList.remove('form__alert-invalido');
        document.getElementById('div-fname').classList.add('form__alert');
        $fname.focus()
    }

    if (ci == "") {
        document.getElementById('div-ci').classList.remove('form__alert-invalido');
        document.getElementById('div-ci').classList.add('form__alert');
        $ci.focus()
    }

    if (lname == "") {
        document.getElementById('div-lname').classList.add('form__alert');
        document.getElementById("lname").focus()
    }

    if (sexo == "--Seleccionar--" || sexo == "") {
        document.getElementById('div-sexo').classList.add('form__alert');
        document.getElementById("sexo").focus()
    }

    if (nick == "") {
        document.getElementById('div-nick').classList.add('form__alert');
        document.getElementById("nick").focus()
    }

    if (email == "") {
        document.getElementById('div-email').classList.add('form__alert');
        document.getElementById("email").focus()
    }

    if (password == "") {
        document.getElementById('div-password').classList.add('form__alert');
        document.getElementById("password").focus()
    }

    if (pais == "--Seleccionar--" || pais == "") {
        document.getElementById('div-pais').classList.add('form__alert');
        document.getElementById("pais").focus()
    }

    if (departamento == "--Seleccionar--" || departamento == "") {
        document.getElementById('div-departamento').classList.add('form__alert');
        document.getElementById("departamento").focus()
    }

    if (ciudad == "--Seleccionar--" || ciudad == "") {
        document.getElementById('div-ciudad').classList.add('form__alert');
        document.getElementById("ciudad").focus()
    }

    if (plataforma_uno == "--Seleccionar--" || plataforma_uno == "") {
        document.getElementById('div-plataforma_uno').classList.add('form__alert');
        document.getElementById("plataforma_uno").focus()
    }

    if (juego_uno == "--Seleccionar--" || juego_uno == "") {
        document.getElementById('div-juego_uno').classList.add('form__alert');
        document.getElementById("juego_uno").focus()
    }

    if ($terminos.checked == false) {
        $terminos.classList.add('terminos_alert')
    } else {
        $terminos.classList.remove('terminos_alert')
    }



    if (campos.fechaNacimiento && campos.fname && campos.lname && campos.ci && campos.sexo && campos.nick &&
        campos.email && campos.password && campos.pais && campos.departamento && campos.ciudad &&
        campos.plataforma_uno && campos.juego_uno && $terminos.checked) {


        games.push({ id: parseInt(juego_uno) })

        if (juego_dos) {
            games.push({ id: parseInt(juego_dos) })
        }
        if (juego_tres) {
            games.push({ id: parseInt(juego_tres) })
        }

        let datos = {
            name: fname,
            surname: lname,
            age: edad,
            bornDate: fechaNacimiento,
            city_id: ciudad,
            games: games,
            document: ci,
            nick: nick,
            gender: sexo
        }

        usuario = await postUsuario(datos)

        let datosPerfil = {
            email: email,
            password: password,
            profile_id: parseInt(usuario.id),
            type_user_id: 1
        }


        perfil = await postPerfil(datosPerfil)

        if (perfil.message == 'User Already Exists') {
            document.getElementById('div-email').classList.add('form__alert-existente');
            document.getElementById("email").focus()
        } else {
            setCookie("token", 1)
            logout();
        }


    }

})

// =========== editar Cookie ===========
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path/; max-age=" + 60 * 60
}


