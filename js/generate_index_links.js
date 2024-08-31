const links = [
    {
        name: "Arcade",
        emoji: "🕹️",
        html: "arcade"
    },
    {
        name: "Minecraft Server Map",
        emoji: "🌎",
        html: "map"
    },
    {
        name: "Minecraft Server Downloads",
        emoji: "📁",
        html: "downloads"
    },
    {
        name: "Internet Speed Test",
        emoji: "⚡️",
        html: "speedtest"
    },
    {
        name: "Site Changelogs",
        emoji: "📄",
        html: "changelogs"
    }
]

const linkContainer = document.getElementById("link-container");

links.forEach(link => {
    const mainLinkElement = document.createElement("a");
    mainLinkElement.href = link.html + ".html";
    mainLinkElement.innerText = ">> " + link.emoji + " " + link.name + " <<";

    const linkParagraph = document.createElement("p");
    linkParagraph.appendChild(mainLinkElement);

    linkContainer.appendChild(linkParagraph);
});