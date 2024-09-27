const links = [
    {
        name: "Arcade",
        emoji: "🕹️",
        html: "arcade.html",
        catagory: "public"
    },
    {
        name: "Internet Speed Test",
        emoji: "⚡️",
        html: "speedtest.html",
        catagory: "public"
    },
    {
        name: "Site Changelogs",
        emoji: "📄",
        html: "changelogs.html",
        catagory: "public"
    },
    {
        name: "Minecraft Server Map",
        emoji: "🌎",
        html: "game.html?name=Server%20Map&backButtonMode=index&url=map/",
        catagory: "private"
    },
    {
        name: "Minecraft Server Downloads",
        emoji: "📁",
        html: "downloads.html",
        catagory: "private"
    },
    {
        name: "Itch.io ↗︎",
        emoji: "🎮",
        html: "https://hw2007.itch.io/",
        catagory: "socials"
    },
    {
        name: "Scratch ↗︎",
        emoji: "🐱",
        html: "https://scratch.mit.edu/users/hotwheel2007/",
        catagory: "socials"
    },
    {
        name: "YouTube ↗︎",
        emoji: "📺",
        html: "https://www.youtube.com/@hw2007",
        catagory: "socials"
    },
    {
        name: "GitHub ↗︎",
        emoji: "🧑‍💻",
        html: "https://github.com/hw2007",
        catagory: "socials"
    }
]

links.forEach(link => {
    const mainLinkElement = document.createElement("a");
    mainLinkElement.href = link.html;
    if (link.catagory == "socials") {
        mainLinkElement.target = "_blank";
    }
    mainLinkElement.innerText = link.emoji + " " + link.name;

    const linkParagraph = document.createElement("p");
    linkParagraph.appendChild(mainLinkElement);

    const linkContainer = document.getElementById(link.catagory);
    linkContainer.appendChild(linkParagraph);
});