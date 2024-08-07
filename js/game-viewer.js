function getUrlParam(url) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(url);
}

const gameUrl = getUrlParam("url");

if (gameUrl) {
    document.getElementById("game").src = gameUrl;
} else {
    document.getElementById("game-container").innerHTML = "<p>❌ You need to provide a game URL, silly!</p>"
}

const gameName = getUrlParam("name");

if (gameName) {
    document.getElementById("name").textContent = gameName;
    document.getElementById("title").textContent = "hw2007 | " + gameName;
} else {
    document.getElementById("name").textContent = "Game";
    document.getElementById("title").textContent = "hw2007 | Game";
}