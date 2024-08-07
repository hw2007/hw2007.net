function getUrlParam(url) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(url);
}

const gameUrl = getUrlParam("url");

if (gameUrl) {
    document.getElementById("game").src = gameUrl;
} else {
    document.getElementById("game-container").innerHTML = "<p>❌ Please supply a turbowarp embed URL!</p>"
}

function resizeIframe() {
    var iframe = document.getElementById("game");
    var aspectRatio = 480 / 360;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight - 47;

    if (windowWidth / windowHeight < aspectRatio) {
        iframe.style.width = windowWidth + "px";
        iframe.style.height = (windowWidth / aspectRatio) + 47 + "px";
    } else {
        iframe.style.width = (windowHeight * aspectRatio) + "px";
        iframe.style.height = windowHeight + 47 + "px";
    }
}

window.addEventListener("resize", resizeIframe);
window.addEventListener("load", resizeIframe);