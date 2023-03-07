let logoutURL= "https://www.rng.com.py"

let $iniciar = document.getElementById("iniciar")


document.addEventListener("DOMContentLoaded", function (event) {

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

})

function logout(){
    window.location.href = logoutURL;
}

// =========== editar Cookie ===========
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path/; max-age=" + 60 * 60
}

$iniciar.addEventListener('click', ()=>{
    setCookie("token", 0)
})