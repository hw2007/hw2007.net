const bg_color = localStorage.getItem("bg-color");
const fg_color = localStorage.getItem("fg-color");
const gray = localStorage.getItem("gray");
const lightgray = localStorage.getItem("lightgray");
const link = localStorage.getItem("link");
const link_hover = localStorage.getItem("link-hover");

function applyColor(color, variable) {
    if (color) {
        document.documentElement.style.setProperty("--" + variable, color);
        return true
    } else {
        return false
    }
}

applyColor(bg_color, "bg-color");
applyColor(fg_color, "fg-color");
applyColor(gray, "gray");
applyColor(lightgray, "lightgray");
applyColor(link, "link");
applyColor(link_hover, "link-hover");
