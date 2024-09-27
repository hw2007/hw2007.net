function getUrlParam(url) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(url);
}

const gameUrl = getUrlParam("url");

if (gameUrl) {
    document.getElementById("game-frame").src = gameUrl;
} else {
    document.getElementById("game-container").innerHTML = "<p>❌ Please supply an itch.io embed URL!</p>"
}