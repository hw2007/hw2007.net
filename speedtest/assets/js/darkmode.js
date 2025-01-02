var dayMode, nightMode, darkStyle;
window.addEventListener("load", changeSkin);

function changeSkin() {
    dayModeMob = document.getElementById("daymode-Mob");
    nightModeMob = document.getElementById("nightmode-Mob");
    dayMode = document.getElementById("daymode");
    nightMode = document.getElementById("nightmode");

    // Force dark mode on page load
    setSkin("dark");
}

function setSkin(a) {
    if (a === "dark") {
        dayModeMob.style.display = "none";
        nightModeMob.style.display = "inline-block";
        dayMode.style.display = "none";
        nightMode.style.display = "inline-block";
        darkStyle = document.getElementById("darkmode");
        if (darkStyle == null) {
            document.head.innerHTML += '<link id="darkmode" rel="stylesheet" href="assets/css/darkmode.css" type="text/css"/>';
            createCookie("mode", "dark");
        }
    } else if (a === "light") {
        nightModeMob.style.display = "none";
        dayModeMob.style.display = "inline-block";
        nightMode.style.display = "none";
        dayMode.style.display = "inline-block";
        darkStyle = document.getElementById("darkmode");
        if (darkStyle) {
            darkStyle.parentNode.removeChild(darkStyle);
        }
        createCookie("mode", "light");
    }
}

function toggleSkin() {
    darkStyle = document.getElementById("darkmode");
    if (darkStyle) {
        setSkin("light");
    } else {
        setSkin("dark");
    }
}

function createCookie(a, c, b) {
    if (b) {
        var d = new Date();
        d.setTime(d.getTime() + 864E5 * b);
        b = "; expires=" + d.toGMTString();
    } else {
        b = "";
    }
    document.cookie = a + "=" + c + b + "; path=/";
}

function getCookieValue(a, c) {
    return (c = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c.pop() : "";
}