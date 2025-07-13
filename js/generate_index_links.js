const links = [
	{
		name: "Arcade",
		icon: "arcade",
		html: "arcade.html",
		catagory: "public",
		is_vip: false,
	},
	{
		name: "Projects",
		icon: "projects",
		html: "projects.html",
		catagory: "public",
		is_vip: false,
	},
	{
		name: "Internet Speed Test",
		icon: "speedtest",
		html: "speedtest.html",
		catagory: "public",
		is_vip: false,
	},
	{
		name: "Site Themer",
		icon: "themer",
		html: "themer.html",
		catagory: "public",
		is_vip: false,
	},
	{
		name: "Site Changelogs",
		icon: "changelogs",
		html: "changelogs.html",
		catagory: "public",
		is_vip: false,
	},
	{
		name: "Minecraft Server",
		icon: "minecraftserver",
		html: "/minecraft",
		catagory: "public",
		is_vip: true,
	},
	{
		name: "Itch.io",
		icon: "itchio",
		html: "https://hw2007.itch.io/",
		catagory: "socials",
		is_vip: false,
	},
	{
		name: "Scratch",
		icon: "scratch",
		html: "https://scratch.mit.edu/users/hotwheel2007/",
		catagory: "socials",
		is_vip: false,
	},
	{
		name: "YouTube",
		icon: "youtube",
		html: "https://www.youtube.com/@hw2007",
		catagory: "socials",
		is_vip: false,
	},
	{
		name: "GitHub",
		icon: "github",
		html: "https://github.com/hw2007",
		catagory: "socials",
		is_vip: false,
	},
];

links.forEach((link) => {
	const mainLinkElement = document.createElement("a");
	mainLinkElement.classList = "fancy-link";
	if (link.is_vip) {
		mainLinkElement.id = "vip";
		link.name += "*";
	}
	mainLinkElement.href = link.html;
	if (link.catagory == "socials") {
		mainLinkElement.target = "_blank";
		link.name += " ↗︎";
	}
	mainLinkElement.innerHTML = `
        <img ${link.is_vip ? "id=vip " : ""}src="assets/icons/${link.icon}.png" style="width: 32px; height: 32px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
		<p ${link.is_vip ? "id=vip " : ""}style="margin-top: auto; margin-bottom: auto; padding-left: 8px;">${link.name}</p>
    `;

	const linkContainer = document.getElementById(link.catagory);
	linkContainer.appendChild(mainLinkElement);
});
