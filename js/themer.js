const root = document.documentElement
const bg_color_element = document.getElementById("bg-color")
const fg_color_element = document.getElementById("fg-color")
const gray_element = document.getElementById("gray")
const lightgray_element = document.getElementById("lightgray")

function isValidHex(hex) {
    return /^#[0-9A-F]{6}$/i.test(hex);
}

function addHashtagToHex(hex) {
    return hex.startsWith("#") ? hex : "#" + hex;
}

function applyTheme(theme) {
    var bg_color;
    var fg_color;
    var gray;
    var lightgray;

    if (theme == "custom") {
        bg_color = bg_color_element.value;
        fg_color = fg_color_element.value;
        gray = gray_element.value;
        lightgray = lightgray_element.value;
    }
    else {
        theme_data = themes[theme]

        bg_color = theme_data["bg-color"];
        fg_color = theme_data["fg-color"];
        gray = theme_data["gray"];
        lightgray = theme_data["lightgray"];
    }

    bg_color = addHashtagToHex(bg_color)
    fg_color = addHashtagToHex(fg_color)
    gray = addHashtagToHex(gray)
    lightgray = addHashtagToHex(lightgray)

    if (!(isValidHex(bg_color))) {
        bg_color = getComputedStyle(root).getPropertyValue("--bg-color");
    }
    if (!(isValidHex(fg_color))) {
        fg_color = getComputedStyle(root).getPropertyValue("--fg-color");
    }
    if (!(isValidHex(gray))) {
        gray = getComputedStyle(root).getPropertyValue("--gray");
    }
    if (!(isValidHex(lightgray))) {
        lightgray = getComputedStyle(root).getPropertyValue("--lightgray");
    }
        
    root.style.setProperty("--bg-color", bg_color);
    root.style.setProperty("--fg-color", fg_color);
    root.style.setProperty("--gray", gray);
    root.style.setProperty("--lightgray", lightgray);

    localStorage.setItem("bg-color", bg_color);
    localStorage.setItem("fg-color", fg_color);
    localStorage.setItem("gray", gray);
    localStorage.setItem("lightgray", lightgray);

    updateInputFields();
}

// Updating the custom color fields to show the actual colors
function updateInputFields() {
    var bg_color = localStorage.getItem("bg-color")
    var fg_color = localStorage.getItem("fg-color");
    var gray = localStorage.getItem("gray");
    var lightgray = localStorage.getItem("lightgray");

    if (!(bg_color && fg_color && gray && lightgray)) {
        bg_color = getComputedStyle(root).getPropertyValue("--bg-color");
        fg_color = getComputedStyle(root).getPropertyValue("--fg-color");
        gray = getComputedStyle(root).getPropertyValue("--gray");
        lightgray = getComputedStyle(root).getPropertyValue("--lightgray");
    }

    bg_color_element.value = bg_color;
    fg_color_element.value = fg_color;
    gray_element.value = gray;
    lightgray_element.value = lightgray;
}

updateInputFields();


const themes = {
    "Classic Dark": {
        "bg-color": "#000000",
        "fg-color": "#ffffff",
        "gray": "#1c1c1c",
        "lightgray": "#606060"
    },
    "Light Mode": {
        "bg-color": "#ffffff",
        "fg-color": "#000000",
        "gray": "#dbdbdb",
        "lightgray": "#b7b7b7"
    },
    "Forest Green": {
        "bg-color": "#001304",
        "fg-color": "#f7ffda",
        "gray": "#0d230f",
        "lightgray": "#4b574b"
    },
    "Navy Blue": {
        "bg-color": "#040126",
        "fg-color": "#d8e2ff",
        "gray": "#1b1f49",
        "lightgray": "#444a89"
    },
    "Royal Purple": {
        "bg-color": "#170023",
        "fg-color": "#ffd789",
        "gray": "#2f1147",
        "lightgray": "#623687"
    }
}

Object.keys(themes).forEach((theme) => {
	const themeButton = document.createElement("button");

    themeButton.classList = "fancy-link";
    themeButton.style = "width: 100%;"
    themeButton.innerText = theme;
    themeButton.onclick = applyTheme.bind(null, theme)

    document.getElementById("premade-themes").appendChild(themeButton)
});