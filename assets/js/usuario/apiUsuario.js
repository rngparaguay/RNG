export function postUsuario(datos) {

    let result = new Promise((resolve, reject) => {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datos);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/profile/create", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}


export function userUpdate(token, idPerfil, datos) {

    let result = new Promise((resolve, reject) => {


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datos);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let url = "https://rngapi.up.railway.app/profile/update/"+idPerfil

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}


export function postPerfil(datosPerfil) {

    let result = new Promise((resolve, reject) => {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(datosPerfil);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/user/create", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}


export function getUsuario(token, idUser) {

    let result = new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let url = "https://rngapi.up.railway.app/user/getone/"+idUser

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}


export function getPerfil(token, idPerfil) {

    let result = new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let url = "https://rngapi.up.railway.app/profile/getone/"+idPerfil

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}




