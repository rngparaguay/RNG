
import { getStates, getCities } from "../city/apicallcities.js"

let departamentos;

let ciudades;


// =========== Ejecutar Funciones ===========

document.addEventListener("DOMContentLoaded", async function (event) {

    departamentos = await getStates()

    ciudades = await getCities()

    mostrarDatosNoSQL(allSexo, $sexo)

    mostrarDatosNoSQL(allPais, $pais)

})


// =========== Agregar Sexo Select ===========

let $sexo = document.getElementById("sexo")

let allSexo = [
    "Masculino",
    "Femenino",
    "Prefiero no decirlo"
]


// =========== Agregar Departameto y Ciudad al Select ===========

let $pais = document.getElementById("pais")
let $departamento = document.getElementById("departamento")
let $ciudad = document.getElementById("ciudad")

let allPais = [
    "Paraguay"
]


function mostrarDatosNoSQL(arreglo, lugar) {

    let elementos = `<option selected disabled>--Seleccionar--</option>`

    for (let i = 0; i < arreglo.length; i++) {
        elementos += ` <option value="${arreglo[i]}">${arreglo[i]}</option>`
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


$pais.addEventListener(`change`, function () {
    document.getElementById('div-pais').classList.remove('form__alert');
    mostrarJuegos(departamentos, $departamento)
})


$departamento.addEventListener(`change`, function () {

    let departamento = $departamento.value
    document.getElementById('div-departamento').classList.remove('form__alert');

    const ciudadFiltrados = ciudades.filter(ciudades => ciudades.state.id==Number(departamento))

    switch (departamento) {
        case '1':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '2':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '3':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '4':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '5':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '6':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '7':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '8':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '9':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '10':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '11':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '12':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '13':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '14':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '15':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '16':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        case '17':
            mostrarJuegos(ciudadFiltrados, $ciudad)
            break
        default:
    }
})
