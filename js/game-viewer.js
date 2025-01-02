const backButtonModes = {
	arcade: ["arcade.html", "arcade"],
	index: ["/", "hw2007.net"],
};

// Get value of a given URL param
function getUrlParam(url) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(url);
}

// URL to display
const gameUrl = getUrlParam("url");

if (gameUrl) {
	document.getElementById("game").src = gameUrl;
} else {
	document.getElementById("game-container").innerHTML =
		"<p>❌ You need to provide a game URL, silly!</p>";
}

// Name of the game, displayed at top of page & used as page title
const gameName = getUrlParam("name");

if (gameName) {
	document.getElementById("name").textContent = gameName;
	document.getElementById("title").textContent = gameName + " - hw2007.net";
} else {
	document.getElementById("name").textContent = "Game";
	document.getElementById("title").textContent = "Game - hw2007.net";
}

const backButtonMode = getUrlParam("backButtonMode");

if (backButtonMode) {
	document.getElementById("back_button_link").href =
		backButtonModes[backButtonMode][0];
	document.getElementById("back_button_text").textContent =
		"<< Back to " + backButtonModes[backButtonMode][1];
}

// Fullscreen handling
function enterFullscreen() {
	const iframe = document.getElementById("game");

	if (iframe.requestFullscreen) {
		iframe.requestFullscreen();
	} else if (iframe.mozRequestFullScreen) {
		// Firefox
		iframe.mozRequestFullScreen();
	} else if (iframe.webkitRequestFullscreen) {
		// Chrome, Safari, and Opera
		iframe.webkitRequestFullscreen();
	} else if (iframe.msRequestFullscreen) {
		// IE/Edge
		iframe.msRequestFullscreen();
	} else {
		console.log("Browser does not support fullscreen!");
	}
}

// Check if fullscreen is supported
function isFullscreenSupported() {
	return (
		document.fullscreenEnabled ||
		document.webkitFullscreenEnabled ||
		document.mozFullScreenEnabled ||
		document.msFullscreenEnabled
	);
}

if (!isFullscreenSupported()) {
	document.getElementById("expand").style.display = "none";
}

document.getElementById("expand").addEventListener("click", enterFullscreen);
