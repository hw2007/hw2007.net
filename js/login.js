function getUrlParam(url) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(url);
}

const pswd_status = getUrlParam("status");
const status_element = document.getElementById("pwd_status");

if (pswd_status) {
    if (pswd_status == "bad") {
        status_element.innerText = "❌ Incorrect password!";
    }
} else {
    status_element.innerText = "";
}

const handler = getUrlParam("handler");
const form_element = document.getElementById("form");

if (handler) {
    form_element.action = "/" + handler;
} else {
    form_element.innerHTML = "<p>❌ No handler set! What page are you trying to access?</p>";
}