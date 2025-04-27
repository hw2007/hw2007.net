const root = document.documentElement;
const bg_color_element = document.getElementById("bg-color");
const fg_color_element = document.getElementById("fg-color");
const gray_element = document.getElementById("gray");
const lightgray_element = document.getElementById("lightgray");
const link_element = document.getElementById("link");
const link_hover_element = document.getElementById("link-hover");
const color_scheme_element = document.getElementById("color-scheme");

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
	var link;
	var link_hover;
	var color_scheme;

	if (theme == "custom") {
		bg_color = bg_color_element.value;
		fg_color = fg_color_element.value;
		gray = gray_element.value;
		lightgray = lightgray_element.value;
		link = link_element.value;
		link_hover = link_hover_element.value;
		color_scheme = color_scheme_element.checked ? "dark" : "light";
	} else {
		theme_data = themes[theme];

		bg_color = theme_data["bg-color"];
		fg_color = theme_data["fg-color"];
		gray = theme_data["gray"];
		lightgray = theme_data["lightgray"];
		link = theme_data["link"];
		link_hover = theme_data["link-hover"];
		color_scheme = theme_data["mode"].toLowerCase();
	}

	bg_color = addHashtagToHex(bg_color);
	fg_color = addHashtagToHex(fg_color);
	gray = addHashtagToHex(gray);
	lightgray = addHashtagToHex(lightgray);
	link = addHashtagToHex(link);
	link_hover = addHashtagToHex(link_hover);

	if (!isValidHex(bg_color)) {
		bg_color = getComputedStyle(root).getPropertyValue("--bg-color");
	}
	if (!isValidHex(fg_color)) {
		fg_color = getComputedStyle(root).getPropertyValue("--fg-color");
	}
	if (!isValidHex(gray)) {
		gray = getComputedStyle(root).getPropertyValue("--gray");
	}
	if (!isValidHex(lightgray)) {
		lightgray = getComputedStyle(root).getPropertyValue("--lightgray");
	}
	if (!isValidHex(link)) {
		link = getComputedStyle(root).getPropertyValue("--link");
	}
	if (!isValidHex(link_hover)) {
		link_hover = getComputedStyle(root).getPropertyValue("--link-hover");
	}

	root.style.setProperty("--bg-color", bg_color);
	root.style.setProperty("--fg-color", fg_color);
	root.style.setProperty("--gray", gray);
	root.style.setProperty("--lightgray", lightgray);
	root.style.setProperty("--link", link);
	root.style.setProperty("--link-hover", link_hover);
	root.style.setProperty("color-scheme", color_scheme);

	localStorage.setItem("bg-color", bg_color);
	localStorage.setItem("fg-color", fg_color);
	localStorage.setItem("gray", gray);
	localStorage.setItem("lightgray", lightgray);
	localStorage.setItem("link", link);
	localStorage.setItem("link-hover", link_hover);
	localStorage.setItem("color-scheme", color_scheme);

	updateInputFields();
}

// Updating the custom color fields to show the actual colors
function updateInputFields() {
	const bg_color = getComputedStyle(root).getPropertyValue("--bg-color");
	const fg_color = getComputedStyle(root).getPropertyValue("--fg-color");
	const gray = getComputedStyle(root).getPropertyValue("--gray");
	const lightgray = getComputedStyle(root).getPropertyValue("--lightgray");
	const link = getComputedStyle(root).getPropertyValue("--link");
	const link_hover = getComputedStyle(root).getPropertyValue("--link-hover");
	const color_scheme = getComputedStyle(root).getPropertyValue("color-scheme");

	bg_color_element.value = bg_color;
	fg_color_element.value = fg_color;
	gray_element.value = gray;
	lightgray_element.value = lightgray;
	link_element.value = link;
	link_hover_element.value = link_hover;
	color_scheme_element.checked = color_scheme == "dark";
}

updateInputFields();

const themes = {
	"Default Dark": {
		"bg-color": "#000000",
		"fg-color": "#ffffff",
		"gray": "#1f1f1f",
		"lightgray": "#4a4a4a",
		"link": "#0099ff",
		"link-hover": "#8a2ce2",
		"mode": "Dark",
	},
	"Default Light": {
		"bg-color": "#ffffff",
		"fg-color": "#000000",
		"gray": "#dbdbdb",
		"lightgray": "#b7b7b7",
		"link": "#0099ff",
		"link-hover": "#8a2ce2",
		"mode": "Light",
	},
	"Forest Green": {
		"bg-color": "#001304",
		"fg-color": "#f7ffda",
		"gray": "#0e2610",
		"lightgray": "#4b574b",
		"link": "#0099ff",
		"link-hover": "#8a2ce2",
		"mode": "Dark",
	},
	"Navy Blue": {
		"bg-color": "#040126",
		"fg-color": "#d8e2ff",
		"gray": "#1b1f49",
		"lightgray": "#444a89",
		"link": "#0099ff",
		"link-hover": "#8a2ce2",
		"mode": "Dark",
	},
	"Royal Purple": {
		"bg-color": "#170023",
		"fg-color": "#ffd789",
		"gray": "#2f1147",
		"lightgray": "#623687",
		"link": "#0099ff",
		"link-hover": "#8a2ce2",
		"mode": "Dark",
	},
	"Solar Obsidian": {
		"bg-color": "#1d1d2a",
		"fg-color": "#ffffff",
		"gray": "#4e4e5a",
		"lightgray": "#7e7e8b",
		"link": "#f7e9a1",
		"link-hover": "#ff6e61",
		"mode": "Dark",
	},
	"Midnight Elegance": {
		"bg-color": "#1e1e2f",
		"fg-color": "#dedee8",
		"gray": "#29293d",
		"lightgray": "#383856",
		"link": "#a2a2b4",
		"link-hover": "#59596e",
		"mode": "Dark",
	},
	"Ocean Mist": {
		"bg-color": "#0a0a0a",
		"fg-color": "#c8e4e4",
		"gray": "#2b2b2b",
		"lightgray": "#4b4b4b",
		"link": "#509b9b",
		"link-hover": "#f1c84b",
		"mode": "Dark",
	},
	"Low Carbon Life": {
		"bg-color": "#2e8a5c",
		"fg-color": "#d0f7c5",
		"gray": "#5abf73",
		"lightgray": "#8ee6a6",
		"link": "#f9f9b4",
		"link-hover": "#f9c58b",
		"mode": "Light",
	},
	"Cementoss": {
		"bg-color": "#e9f1f2",
		"fg-color": "#1d2021",
		"gray": "#c4d2d4",
		"lightgray": "#a2b2b3",
		"link": "#ff6e61",
		"link-hover": "#ff005d",
		"mode": "Light",
	},
	"Strawberry Muffins": {
		"bg-color": "#ff6b6b",
		"fg-color": "#ffffff",
		"gray": "#ff9a6b",
		"lightgray": "#ffcb6b",
		"link": "#fff1b3",
		"link-hover": "#ffffff",
		"mode": "Light",
	},
	"Ocean Breeze": {
		"bg-color": "#1a1a1f",
		"fg-color": "#d3f3df",
		"gray": "#26262f",
		"lightgray": "#46464f",
		"link": "#007a8a",
		"link-hover": "#5f9b97",
		"mode": "Dark",
	},
	"Academic": {
		"bg-color": "#3b4d6d",
		"fg-color": "#f1f8f7",
		"gray": "#5e7f9c",
		"lightgray": "#9fc1d6",
		"link": "#f9e6a9",
		"link-hover": "#f1a8a2",
		"mode": "Dark",
	},
	"macOS": {
		"bg-color": "#282828",
		"fg-color": "#DFDFDF",
		"gray": "#404040",
		"lightgray": "#555555",
		"link": "#409CFF",
		"link-hover": "#5DE6FF",
		"mode": "Dark",
	},
	"Catppuccin Latte": {
		"bg-color": "#eff1f5",
		"fg-color": "#4c4f69",
		"gray": "#ccd0da",
		"lightgray": "#bcc0cc",
		"link": "#1e66f5",
		"link-hover": "#8839ef",
		"mode": "Light",
	},
	"Catppuccin Mocha": {
		"bg-color": "#1e1e2e",
		"fg-color": "#cdd6f4",
		"gray": "#313244",
		"lightgray": "#45475a",
		"link": "#89b4fa",
		"link-hover": "#cba6f7",
		"mode": "Dark",
	},
};

Object.keys(themes).forEach((theme) => {
	const themeButton = document.createElement("button");
	const theme_data = themes[theme];

	themeButton.classList = "fancy-link";
	themeButton.style = "width: 100%;";
	themeButton.innerHTML = `
            <div style="width: 10px; height: 24px; background-color: ${theme_data["fg-color"]};"></div>
            <div style="width: 10px; height: 24px; background-color: ${theme_data["lightgray"]};"></div>
            <div style="width: 10px; height: 24px; background-color: ${theme_data["gray"]};"></div>
            <div style="width: 10px; height: 24px; background-color: ${theme_data["bg-color"]};"></div>
            <div style="width: 10px; height: 24px; background-color: ${theme_data["link"]};"></div>
            <div style="width: 10px; height: 24px; background-color: ${theme_data["link-hover"]}; margin-right: 8px;"></div>
        ${theme}
        <span style="text-align: right; margin-left: auto; color: var(--lightgray);">
            ${theme_data["mode"]}
        </span>`;
	themeButton.onclick = applyTheme.bind(null, theme);

	document.getElementById("premade-themes").appendChild(themeButton);
});
