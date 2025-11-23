document.addEventListener("mouseover", function(event) {
	if (event.target.id === "vip") {
		document.getElementById('show-on-vip-hover').style.color = "var(--fg-color)";
	}
});

document.addEventListener("mouseout", function(event) {
	if (event.target.id === "vip") {
		document.getElementById("show-on-vip-hover").style.color = "#ffffff00";
	}
});