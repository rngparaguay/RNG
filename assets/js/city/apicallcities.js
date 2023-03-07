export function getStates() {

    let result = new Promise((resolve, reject) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/state/getAll", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    });

    return result;

}

export function getCities() {

    let result = new Promise((resolve, reject) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://rngapi.up.railway.app/city/getAll", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    });

    return result;

}
