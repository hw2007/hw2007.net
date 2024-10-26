const links = [
    {
        file: "Oct 3 2024",
        world: "2"
    },
    {
        file: "Aug 13 2024",
        world: "2"
    },
    {
        file: "June 27 2024",
        world: "2"
    },
    {
        file: "June 13 2024",
        world: "2"
    },
    {
        file: "June 4 2024",
        world: "2"
    },
    {
        file: "April 8 2024",
        world: "2"
    },
    {
        file: "March 5 2024",
        world: "2"
    },
    {
        file: "Feb 25 2024",
        world: "2"
    },
    {
        file: "Aug 15 2023",
        world: "2"
    },
    {
        file: "April 2023",
        world: "2"
    },
    {
        file: "March 27 2023",
        world: "2"
    },
    {
        file: "Oct 26 2022 (BE)",
        world: "2"
    },
    {
        file: "Aug 17 2022 (BE)",
        world: "2"
    },
    {
        file: "Final World (JE)",
        world: "1"
    },
    {
        file: "Final World",
        world: "1"
    },
    {
        file: "June 12 2021",
        world: "1"
    }
]

links.forEach(link => {
    const mainLinkElement = document.createElement("a");
    mainLinkElement.classList = "fancy-link";
    mainLinkElement.href = "downloads/" + link.file + ".zip"
    mainLinkElement.style.padding = "4px";
    mainLinkElement.innerHTML = `
		<p style="margin-top: auto; margin-bottom: auto; padding-left: 4px;">🔗 ${link.file}.zip</p>
    `;

    const linkContainer = document.getElementById(link.world);
    linkContainer.appendChild(mainLinkElement);
});