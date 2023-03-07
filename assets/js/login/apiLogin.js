export function userLogin(datos) {

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

        fetch("https://rngapi.up.railway.app/user/login", requestOptions)
            .then(response => response.text())
            .then(result => resolve(JSON.parse(result)))

            .catch(error => console.log('error', error));
    });

    return result;

}