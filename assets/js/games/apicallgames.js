export function getJuegos() {

    let result = new Promise((resolve, reject) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/game/getAll", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    });

    return result;

}

export function getPlataformas() {

    let result = new Promise((resolve, reject) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/platform/getall", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    });

    return result;

}

export function getGeneros() {

    let result = new Promise((resolve, reject) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3000/gameGenre/getall", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    });

    return result;

}