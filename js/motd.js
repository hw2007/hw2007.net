// Used for one specific MOTD which displays the user's OS
function getOS() {
    let userAgent = navigator.userAgent;
    let platform = navigator.platform;
    let os = "computer";

    if (platform.startsWith("Win")) {
        os = "windows";
    } else if (platform.startsWith("Mac")) {
        os = "macOS";
    } else if (platform.startsWith("Linux")) {
        os = "linux";
    } else if (/Android/.test(userAgent)) {
        os = "android";
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = "iOS";
    }

    return os;
}

console.log("The user's operating system is: " + getOS());

// List of MOTDs to display on load
const messages = [
	"the finest corner of the internet.",
	"error 404. (just kidding, you're in the right place)",
	"enjoy your stay.",
	"the only site you'll ever need.",
	"beam me up, scotty!",
	"it's a bird! it's a plane!",
	"hello there.",
	"general kenobi.",
	"held together by duct tape.",
	"brought to you by hw2007 and chatgpt!",
	"engage!",
	"welcome, traveller!",
	"there are four lights!",
	`hello, ${getOS()} user! :)`
];

// Function to display a random message
function displayRandomMessage() {
	// Generate a random index
	const randomIndex = Math.floor(Math.random() * messages.length);

	// Get the message element
	const messageElement = document.getElementById("motd");

	// Set the random message
	messageElement.textContent = messages[randomIndex];
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayRandomMessage);
