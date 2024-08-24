function enterFullscreen() {
    const iframe = document.getElementById("map");

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
    else {
        document.getElementById("container").style.top = "0px";
        document.getElementById("expand").style.display = "none";
        document.getElementById("shrink").style.display = "inline-block";
    }
}

function expand() {
    enterFullscreen();
}

function shrink() {
    document.getElementById("container").style.top = "60px";
    document.getElementById("expand").style.display = "inline-block";
    document.getElementById("shrink").style.display = "none";
}

document.getElementById("expand").addEventListener("click", expand);
document.getElementById("shrink").addEventListener("click", shrink);