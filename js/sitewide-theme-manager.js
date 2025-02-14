const bg_color = localStorage.getItem("bg-color");
const fg_color = localStorage.getItem("fg-color");
const gray = localStorage.getItem("gray");
const lightgray = localStorage.getItem("lightgray");

if (bg_color && fg_color && gray && lightgray) {
	document.documentElement.style.setProperty("--bg-color", bg_color);
    document.documentElement.style.setProperty("--fg-color", fg_color);
    document.documentElement.style.setProperty("--gray", gray);
    document.documentElement.style.setProperty("--lightgray", lightgray);
}