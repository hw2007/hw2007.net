function getUrlParam(url) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(url);
}

const gameUrl = getUrlParam("url");

if (gameUrl) {
    document.getElementById("game-frame").src = gameUrl;
} else {
    document.getElementById("game-container").innerHTML = "<p>❌ Please supply a turbowarp embed URL!</p>"
}

function resizeIframe() {
    var iframe = document.getElementById("game-div");
    var aspectRatio = 478 / 360;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if (windowWidth / windowHeight < aspectRatio) {
        iframe.style.width = windowWidth + "px";
        iframe.style.height = (windowWidth / aspectRatio) + 42 + "px";
    } else {
        iframe.style.width = (windowHeight * aspectRatio) + "px";
        iframe.style.height = windowHeight + 42 + "px";
    }
}

window.addEventListener("resize", resizeIframe);
window.addEventListener("load", resizeIframe);