const links = [
    {
        name: "Fortify",
        description: "A base defense game created as my grade 12 computer science final project.",
        icon: "fortify",
        url: "https://github.com/hw2007/Fortify",
    },
    {
        name: "Downloads Cleaner (Swift)",
        description: "A mac app to help clean up your downloads folder! It was created as a way for me to learn Swift, but it can be a useful tool too!",
        icon: "downloadscleaner-swift",
        url: "https://github.com/hw2007/Downloads-Cleaner",
    },
    {
        name: "Fireworks",
        description: "A neat little fireworks simulation written with processing java.",
        icon: "fireworks",
        url: "https://github.com/hw2007/Fireworks",
    },
    {
        name: "Übersicht NASA Image",
        description: "An Übersicht widget to display NASA's Astronomy Picture of the Day (APOD) on your mac desktop.",
        icon: "apod",
        url: "https://github.com/hw2007/ubersicht-nasa-image",
    },
    {
        name: "Übersicht Neofetch",
        description: "An Übersicht widget to display neofetch results on your mac desktop.",
        icon: "neofetch",
        url: "https://github.com/hw2007/ubersicht-neofetch",
    },
    {
        name: "Easycraft",
        description: "A simple CLI-based Minecraft: Java Edition server manager for mac & linux!",
        icon: "easycraft",
        url: "https://github.com/hw2007/Easycraft",
    },
    {
        name: "Stomp",
        description: "A game where you can experience what it's like to be a bug getting squashed!",
        icon: "stomp",
        url: "https://github.com/hw2007/Stomp"
    },
    {
        name: "Downloads Cleaner (Python)",
        description: "A simple app to clean up your downloads folder, for mac or windows!",
        icon: "downloadscleaner",
        url: "https://github.com/hw2007/DownloadsCleaner",
    },
    {
        name: "Tick-oaT-Two",
        description: "A CLI version of a tic-tac-toe variation created by Oats Jenkins on YouTube.",
        icon: "tick-oat-two",
        url: "https://github.com/hw2007/Tick-oaT-Two",
    }
]

links.forEach(link => {
    const mainLinkElement = document.createElement("a");
    mainLinkElement.className = "glowing fancy-link";
    mainLinkElement.href = link.url;
    mainLinkElement.target = "_blank"
    mainLinkElement.innerHTML = `
        <img src="assets/project-thumbnails/${link.icon}.png" style="width: 128px; height: 128px; margin-top: auto; margin-bottom: auto;">
		<p style="margin-top: 0px; margin-bottom: auto; padding-left: 8px;"><b>${link.name} ↗︎<br></b>
			<span style="color: var(--fg-color);">
                ${link.description}
            </span>
		</p>
    `;

    const linkContainer = document.getElementById("container");
    linkContainer.appendChild(mainLinkElement);
});