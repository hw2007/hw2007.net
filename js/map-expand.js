function expand() {
    document.getElementById("map").style.top = "0px";
    document.getElementById("expand").style.display = "none";
    document.getElementById("shrink").style.display = "inline-block";
}

function shrink() {
    document.getElementById("map").style.top = "60px";
    document.getElementById("expand").style.display = "inline-block";
    document.getElementById("shrink").style.display = "none";
}

document.getElementById("expand").addEventListener("click", expand);
document.getElementById("shrink").addEventListener("click", shrink);