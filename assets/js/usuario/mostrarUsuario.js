import { getUsuario, getPerfil, userUpdate } from "./apiUsuario.js"

let usuario
let perfil

let logoutURL= "https://www.rng.com.py/login.html"

let CidUser
let Ctoken
let idPerfil
let $salir = document.getElementById("salir")
let $nickNumber = document.getElementById("nickNumber")
let $nick = document.getElementById("nick")
let $name = document.getElementById("name")
let $nacimiento = document.getElementById("nacimiento")
let $juego = document.getElementById("juego")
let $fnameDiv = document.getElementById("div-fname")
let $lnameDiv = document.getElementById("div-lname")
let $nickDiv = document.getElementById("div-nick")
let $nombreHome = document.getElementById("nombreHome")
let $submitModal = document.getElementById("submit-modal")

const campos = {
    fname: false,
    lname: false,
    nick: false
}


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

let monthArrayNames = [];
monthArrayNames[0] = "Enero";
monthArrayNames[1] = "Febrero";
monthArrayNames[2] = "Marzo";
monthArrayNames[3] = "Abril";
monthArrayNames[4] = "Mayo";
monthArrayNames[5] = "Junio";
monthArrayNames[6] = "Julio";
monthArrayNames[7] = "Agosto";
monthArrayNames[8] = "Septiembre";
monthArrayNames[9] = "Octubre";
monthArrayNames[10] = "Noviembre";
monthArrayNames[11] = "Diciembre";


// =========== cerrar sesion ===========
function logout(){
    window.location.href = logoutURL;
}

// =========== editar Cookie ===========
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path/; max-age=" + 60 * 60
}

// =========== Ejecutar Funciones ===========

document.addEventListener("DOMContentLoaded", async function (event) {

    if (document.cookie.split(';') == '') {
        logout();
    }

    function getCookie(cname) {
        let name = cname + "="
        let ca = document.cookie.split(';')
        for (let i = 0; ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == ' ') c = c.substring(1)
            if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length))
        }
        return "";
    }



    Ctoken = getCookie("token")
    if (Ctoken == '0') {
        logout();
    }
    CidUser = getCookie("idUser")

    

    usuario = await getUsuario(Ctoken, CidUser)

    if (usuario.error == 'Token expired') {
        logout();
    }

    idPerfil = usuario.profile.id

    perfil = await getPerfil(Ctoken, idPerfil)

    $nick.innerHTML = `${usuario.profile.nick}`

    $nickNumber.innerHTML = `${usuario.profile.nickNumber}`

    $name.innerHTML = `${usuario.profile.surname}, ${usuario.profile.name} `

    let dateDB = new Date(usuario.profile.bornDate);

    let day = dateDB.getDate();
    let month = monthArrayNames[dateDB.getMonth()];
    let year = dateDB.getFullYear();

    var fullDate = `${day} - ${month} - ${year}`;

    $nacimiento.innerHTML = `${fullDate}`

    $juego.innerHTML = `${perfil.games[0].name}`

    $nombreHome.innerHTML = `<span>Bienvenido ${usuario.profile.name}</span>`


})



$salir.addEventListener('click', () => {

    Swal.fire({
        title: 'Seguro quieres cerrar Sesión?',
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Salir',
        showCloseButton: true,
        background: '#121212',

        customClass: {
            popup: "popup-class",
        }
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Cerrando Sesión...',
                icon: 'success',
                background: '#121212',
                timer: 3000,
                timerProgressBar:true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                customClass: {
                    popup: "popup-class",
                }
            })
            setCookie("token", 0)
            setCookie("idUser", 0)
            window.setTimeout(logout,3000)
        }
    })


})



// =========== Open and close modal ===========
const $open = document.getElementById('open-modal')
const $open_a = document.getElementById('open-modal-a')
const $close = document.getElementById('close-modal')
const $modal_section = document.getElementById('modal-section')


$open.addEventListener('click', () => {
    $modal_section.classList.add('modal-back')
    $modal_section.classList.remove('modal-back-hidden')




    mostrarDatosEditar($fnameDiv, usuario.profile.name, "fnameForm", "Nombre")
    mostrarDatosEditar($lnameDiv, usuario.profile.surname, "lnameForm", "Apellido")
    mostrarDatosEditar($nickDiv, usuario.profile.nick, "nickForm", "Nick")

    function mostrarDatosEditar(lugar, value, nombreId, nombre) {
        lugar.innerHTML = ` <input type="text" value="${value}" id="${nombreId}" class="form__input"></input>
                            <label for="${nombreId}" class="form__label">${nombre} <span>*</span></label>`
    }

    let $fnameForm = document.getElementById("fnameForm")
    let $lnameForm = document.getElementById("lnameForm")
    let $nickForm = document.getElementById("nickForm")

    let fnameForm = $fnameForm.value
    let lnameForm = $lnameForm.value
    let nickForm = $nickForm.value

    $fnameForm.addEventListener('keyup', () => {
        fnameForm = $fnameForm.value
        datos['name'] = fnameForm
        if (expresiones.nombre.test(fnameForm)) {
            $fnameDiv.classList.remove('form__alert-invalido');
            campos['fname'] = true;
        } else {
            campos['fname'] = false;
            document.getElementById('div-fname').classList.add('form__alert-invalido');
            document.getElementById("fnameForm").focus()
        }
        if (fnameForm) {
            $fnameDiv.classList.remove('form__alert');
        } else {
            $fnameDiv.classList.add('form__alert');
        }

    })

    $lnameForm.addEventListener('keyup', () => {
        lnameForm = $lnameForm.value
        datos['surname'] = lnameForm
        if (expresiones.nombre.test(lnameForm)) {
            $lnameDiv.classList.remove('form__alert-invalido');
            campos['lname'] = true;
        } else {
            campos['lname'] = false;
            document.getElementById('div-lname').classList.add('form__alert-invalido');
            document.getElementById("lnameForm").focus()
        }
        if (lnameForm) {
            $fnameDiv.classList.remove('form__alert');
        } else {
            $fnameDiv.classList.add('form__alert');
        }
    })

    $nickForm.addEventListener('keyup', () => {
        nickForm = $nickForm.value
        datos['nick'] = nickForm
        if (expresiones.usuario.test(nickForm)) {
            $nickDiv.classList.remove('form__alert-invalido');
            campos['lname'] = true;
        } else {
            campos['lname'] = false;
            document.getElementById('div-nick').classList.add('form__alert-invalido');
            document.getElementById("nickForm").focus()
        }
        if (nickForm) {
            $nickDiv.classList.remove('form__alert');
        } else {
            $nickDiv.classList.add('form__alert');
        }
    })

    let datos = {
        name: fnameForm,
        surname: lnameForm,
        age: perfil.age,
        bornDate: perfil.bornDate,
        city_id: perfil.city.id,
        games: perfil.games[0].name,
        document: 0,
        nick: nickForm,
        gender: perfil.gender
    }



    $submitModal.addEventListener('click', () => {
        userUpdate(Ctoken, idPerfil, datos)
    })



})

const close_modal = () => {
    $modal_section.classList.remove('modal-back')
    $modal_section.classList.add('modal-back-hidden')
}

$close.addEventListener('click', () => close_modal())

$open_a.addEventListener('click', () => {

    if ($modal_section.classList.contains('modal-back-hidden')) {
        $modal_section.classList.add('modal-back')
        $modal_section.classList.remove('modal-back-hidden')
    } else {
        $modal_section.classList.add('modal-back-hidden')
        $modal_section.classList.remove('modal-back')
    }
})

window.addEventListener('click', e => e.target == $modal_section && close_modal())