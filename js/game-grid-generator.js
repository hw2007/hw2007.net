const games = [
	{
		name: "Market Miner",
		info: "An ore-themed clicker game, with a fluctuating ore stock market!",
		img: "marketminer",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/13344785?color=000000"),
		controls: "Click/Enter, P",
	},
	{
		name: "Pixel Studio",
		info: "A simple pixel art editor.",
		img: "pixelstudio",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/979801800/embed?autoplay&fullscreen-background=black",
			),
		controls: "Point & Click",
	},
	{
		name: "Over Yonder",
		info: "Find your friends who got lost in the forest!",
		img: "overyonder",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/7207524?color=000000"),
		controls: "WASD/Arrows/Space, E, Q, 1-4",
	},
	{
		name: "Chaos Airlines 2",
		info: "A mind-bending puzzler about managing overlapping flight paths!",
		img: "chaosairlines",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/7181508?color=000000"),
		controls: "Space, Click, Tab, Z/Right Click",
	},
	{
		name: "Chaos Airlines",
		info: "Original Chaos Airlines, made for a 72-hour game jam.",
		img: "chaosairlinesold",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/5298948?color=000000"),
		controls: "Space, Click, Tab, Z",
	},
	{
		name: "Exploding Physics",
		info: "Spawn characters and watch them explode!",
		img: "explodingphysics",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/484255329/embed?autoplay&fullscreen-background=black&fps=60&hqpen&clones=Infinity",
			),
		controls: "Point & Click",
	},
	{
		name: "Kim Vs King",
		info: "Can one lone peasant destroy a corrupt king?",
		img: "kimvsking",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/8858301?color=000000"),
		controls: "WASD/Arrows, Space/Click",
	},
	{
		name: "Pong",
		info: "Literally just pong.",
		img: "pong",
		url:
			"itchembed.html?url=" +
			encodeURIComponent("https://itch.io/embed-upload/5158841?color=000000"),
		controls: "WASD/Arrows",
	},
	{
		name: "Spaceship",
		info: "Fly around in a spaceship and shoot incoming asteroids!",
		img: "spaceship",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/494880134/embed?fullscreen-background=black&hqpen&clones=Infinity",
			),
		controls: "Point & Click",
	},
	{
		name: "Sky High",
		info: "Flap through the city to collect coins!",
		img: "skyhigh",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/450656664/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity",
			),
		controls: "Space/Click",
	},
	{
		name: "SwipeCars",
		info: "Reckless driving. Collect coins while avoiding oncoming traffic!",
		img: "swipecars",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/318216494/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity",
			),
		controls: "Space/Click, Mouse",
	},
	{
		name: "Darkness",
		info: "Survive waves of zombies with nothing but a flashlight!",
		img: "darkness",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/406517701/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity",
			),
		controls: "Mouse",
	},
	{
		name: "Slam!",
		info: "Don't get slammed by the falling obstacles!",
		img: "slam",
		url:
			"turboembed.html?url=" +
			encodeURIComponent(
				"https://turbowarp.org/364436674/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity",
			),
		controls: "WASD/Arrows",
	},
];

const grid = document.getElementById("game-container");

games.forEach((game) => {
	const gridItem = document.createElement("a");
	gridItem.className = "fancy-link";
	gridItem.href =
		"/game.html?name=" +
		game.name +
		"&backButtonMode=" +
		"arcade" +
		"&url=" +
		encodeURIComponent(game.url);

	gridItem.innerHTML = `
        <img src="assets/thumbnails/${game.img}.png" style="width: 192px; height: 150px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
		<p style="margin-top: 0px; margin-bottom: auto; padding-left: 8px; word-break: normal; overflow-wrap: anywhere;"><b>${game.name}<br></b>
			<span style="color: var(--fg-color);">
                ${game.info}<br>
            </span>
            <span style="color: var(--lightgray);">
                Controls: ${game.controls}
            </span>
		</p>
    `;

	grid.appendChild(gridItem);
});
