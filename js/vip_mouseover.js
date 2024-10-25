document.addEventListener("mouseover", function(event) {
	if (event.target.id === "vip") {
		document.getElementById('show-on-vip-hover').style.color = "white";
	}
});

document.addEventListener("mouseout", function(event) {
	if (event.target.id === "vip") {
		document.getElementById("show-on-vip-hover").style.color = "var(--lightgray)";
	}
});