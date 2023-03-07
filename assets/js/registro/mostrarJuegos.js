
import { getJuegos, getPlataformas} from "../games/apicallgames.js"

let juegos;

let plataformas;


// =========== Ejecutar Funciones ===========

document.addEventListener("DOMContentLoaded", async function (event) {

    juegos = await getJuegos()

    plataformas = await getPlataformas()

    mostrarDatos(plataformas, $plataforma_uno)
    mostrarDatos(plataformas, $plataforma_dos)
    mostrarDatos(plataformas, $plataforma_tres)

})


function mostrarDatos(arreglo, lugar) {

    let elementos = `<option selected disabled>--Seleccionar--</option>`

    for (let i = 0; i < arreglo.length; i++) {
        elementos += ` <option value="${arreglo[i].id}">${arreglo[i].description}</option>`
    }

    lugar.innerHTML = elementos
}

function mostrarJuegos(arreglo, lugar) {

    let elementos = `<option selected disabled>--Seleccionar--</option>`

    for (let i = 0; i < arreglo.length; i++) {
        elementos += ` <option value="${arreglo[i].id}">${arreglo[i].name}</option>`
    }

    lugar.innerHTML = elementos
}


// =========== Agregar plataforma y Juegos al Select ===========

let $plataforma_uno = document.getElementById("plataforma_uno")
let $plataforma_dos = document.getElementById("plataforma_dos")
let $plataforma_tres = document.getElementById("plataforma_tres")
let $juego_uno = document.getElementById("juego_uno")
let $juego_dos = document.getElementById("juego_dos")
let $juego_tres = document.getElementById("juego_tres")



$plataforma_uno.addEventListener(`change`, function () {

    let plataforma_uno = $plataforma_uno.value
    document.getElementById('div-plataforma_uno').classList.remove('form__alert');

    const juegosFiltrados = juegos.filter(juego => juego.platform.id==Number(plataforma_uno))

    switch (plataforma_uno) {
        case '1':
            mostrarJuegos(juegosFiltrados, $juego_uno)
            break
        case '2':
            mostrarJuegos(juegosFiltrados, $juego_uno)
            break
        case '3':
            mostrarJuegos(juegosFiltrados, $juego_uno)
            break
        case '4':
            mostrarJuegos(juegosFiltrados, $juego_uno)
            break
        case '5':
            mostrarJuegos(juegosFiltrados, $juego_uno)
            break
        default:
    }

})


$plataforma_dos.addEventListener(`change`, function () {

    let plataforma_dos = $plataforma_dos.value

    const juegosFiltrados = juegos.filter(juego => juego.platform.id==Number(plataforma_dos))

    switch (plataforma_dos) {
        case '1':
            mostrarJuegos(juegosFiltrados, $juego_dos)
            break
        case '2':
            mostrarJuegos(juegosFiltrados, $juego_dos)
            break
        case '3':
            mostrarJuegos(juegosFiltrados, $juego_dos)
            break
        case '4':
            mostrarJuegos(juegosFiltrados, $juego_dos)
            break
        case '5':
            mostrarJuegos(juegosFiltrados, $juego_dos)
            break
        default:
    }
})

$plataforma_tres.addEventListener(`change`, function () {

    let plataforma_tres = $plataforma_tres.value

    const juegosFiltrados = juegos.filter(juego => juego.platform.id==Number(plataforma_tres))

    switch (plataforma_tres) {
        case '1':
            mostrarJuegos(juegosFiltrados, $juego_tres)
            break
        case '2':
            mostrarJuegos(juegosFiltrados, $juego_tres)
            break
        case '3':
            mostrarJuegos(juegosFiltrados, $juego_tres)
            break
        case '4':
            mostrarJuegos(juegosFiltrados, $juego_tres)
            break
        case '5':
            mostrarJuegos(juegosFiltrados, $juego_tres)
            break
        default:
    }

})


