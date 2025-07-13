const links = [
    {
        name: "Server Map",
        description: "A 3D map of the server, useful for exploring the world.",
        icon: "map",
        url: "/map-embed/",
    },
    {
        name: "World Downloads",
        description: "Archives of the server's world from various dates.",
        icon: "downloads",
        url: "downloads.html",
    }
]

links.forEach(link => {
    const mainLinkElement = document.createElement("a");
    mainLinkElement.classList = "fancy-link";
    mainLinkElement.style.maxWidth = "var(--std-page-width)"
    mainLinkElement.href = link.url;
    mainLinkElement.innerHTML = `
        <img src="/assets/minecraft-icons/${link.icon}.png" style="width: 64px; height: 64px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
		<p style="margin-top: 0px; margin-bottom: auto; padding-left: 8px;"><b>${link.name}<br></b>
			<span style="color: var(--fg-color);">
                ${link.description}
            </span>
		</p>
    `;

    const linkContainer = document.getElementById("container");
    linkContainer.appendChild(mainLinkElement);
});