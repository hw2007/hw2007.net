const updates = [
	{
		date: "April 26, 2025",
		changes: [
			"Added catppuccin latte and mocha themes.",
			"Changed some wording in the custom theme maker to be more clear.",
			"Dark mode and light mode themes will now change the website's color-scheme property, meaning system UI elements such as scrollbars will be light or dark depending on the theme.",
			"Dark mode can now be toggled on or off when making a custom theme.",
			"'Incorrect Password' on the login page now uses the default text color instead of disabled color, for better contrast.",
			"'VIP access only' has been changed to 'Password required' on the homepage.",
			"The game 'Exploding Physics' now uses it's full name, 'Exploding Physics Playground', on the arcade page."
		]
	},
	{
		date: "April 18, 2025",
		changes: [
			"Added the 'macOS' theme, which uses the colors of the macOS dark mode.",
			"Added my fireworks simulator to the projects page."
		]
	},
	{
		date: "April 3, 2025",
		changes: [
			"Tweaked the default purple color.",
			"Fixed an incorrect year on the changelog directly below this one."
		]
	},
	{
		date: "February 15, 2025",
		changes: [
			"You can now alter the button and button hover colors in the site themer.",
			"Colors now have proper names in the site themer, rather than just their CSS variable names.",
			"Added 8 new themes using palettes from <a href='https://www.colormagic.art/palette/explore'>colormagic.art</a>!",
			"Added a link to colormagic in the site themer.",
			"Themes now have a preview of their colors within their button. Each color is also now specified to be a light or dark theme.",
			"On the homepage, the 'net' part of 'hw2007.net' used to be colored. Now, the 'hw' part is colored instead."
		]
	},
	{
		date: "February 13, 2025",
		changes: [
			"The arcade page is now limited to 3 columns, instead of 4.",
			"Various internal changes, such as unifying all colors with variables, and creating a standard grid class for pages like the homepage, arcade, projects, and downloads which all use similar layouts.",
			"Fixed the 'Go Home?' button on error pages being left-aligned instead of center on Safari.",
			"Added themes to the website!",
			"By clicking the new 'Site Themer' open on the homepage, you can customize the color scheme of the site.",
			"There are 5 premade themes, but you can also use custom colors.",
			"The speedtest page has been updated slightly. The speedtest widget now has a border, and isn't as large.",
			"Resizing also works better on the speedtest page now."
		]
	},
	{
		date: "January 1, 2025",
		changes: [
			"Slightly updated error pages to use the new fancy button style.",
			"Replaced the old generic login system with a new custom login system!",
			"The new login only requires a password (the old one needed a username too) and has a custom login page instead of the old browser popup.",
			"The login page opens whenever you try to access the Server Map or Server Downloads pages.",
			"This login system makes use of Apache's form authentication, in case anybody wants to recreate it. :)"
		]
	},
	{
		date: "November 19, 2024",
		changes: [
			"My war with webcrawlers continues! I now have a two stage filter for bots: First, you need to not be on the bot list. Then, you need to have javascript enabled, as a lot of bots run without it.",
			"Reset the visitor counter, which was most certainly 90% filled by bots.",
			"Removed the version number at the bottom of the changelogs page."
		]
	},
	{
		date: "November 16, 2024",
		changes: [
			"Attempted to filter out bots from the visitor counter.",
			"Moved the site stats section to the bottom of the homepage.",
		],
	},
	{
		date: "November 15, 2024",
		changes: [
			"The download & home pages now scale to fill the screen width on smaller devices.",
			"Most pages now use the same maximum width, for consistancy.",
			"Added a 'Site stats' section to the homepage, which includes the total number of visits (since the feature has been added) and the last update date.",
			"The downloads page is now populated partially using PHP.",
		],
	},
	{
		date: "October 25, 2024",
		changes: [
			"Redesigned homepage! The public & private pages have been collapsed into one catagory, and a new button fancy button style with custom icons has been used on the links!",
			"Updated the arcade page to use the same buttons as the new homepage.",
			"The arcade page now tells you the controls for each game.",
			"Added a new 'Projects' page, which gives you a list of some of the open-source apps & tools I have created.",
			"Updated the server downloads page to use the new fancy link style.",
		],
	},
	{
		date: "September 26, 2024",
		changes: [
			"Many backend changes, including the following 2 points:",
			"Home & changelogs pages are now dynamically generated with javascript.",
			"Unified server map & game viewer pages, meaning they both use the same code and so will always look consistant with each other.",
			"The game viewer & map pages now both have a native fullscreen button, which has been moved to the top-right.",
			"You can no longer use the fullscreen button to hide the navbar on browsers which do not support fullscreen.",
			"Changed the fullscreen button icon.",
			"Changed padding sitewide to make things line up better & take up less space.",
			"The 'Welcome to hw2007.net!' message on the home page now changes to just 'hw2007.net' on small screens.",
			"Added custom 404, 403, & 401 error pages.",
			"Added a link to the server resource pack in the server downloads page.",
			"The arcade page now shows a max of 5 columns at a time.",
			"Added some credits at the bottom of the changelogs page.",
			"Updated the layout of the home page. Links are now catagorized, and my various social media links have been added.",
		],
	},
	{
		date: "August 21, 2024",
		changes: ["Added Pixel Studio to the arcade."],
	},
	{
		date: "August 14, 2024",
		changes: [
			"Added a new server world download for August 13th.",
			"Added a password requirment to the downloads page.",
			"Added an exact site version number at the bottom of the changelogs page.",
			"Added 'live long and prosper!' as a possible splash text.",
			"Updated colors on the speedtest to match the new colors added in the last update.",
		],
	},
	{
		date: "August 7, 2024",
		changes: [
			"Fixed a bug with arcade machines where if upon hovering one for the first time, the machine's image would briefly disappear.",
			"Made the joystick & buttons of arcade machines red instead of purple & blue, and added shading to joystick & buttons.",
			"Other small tweaks to arcade machines such as removing gray border on thumbnail, and adding a purple hover on the game title.",
			"Tweaked sitewide light blue, blue, purple color scheme to be more contrasting & bright.",
			"Replaced the enter/leave expanded view text in the map page with an expand/shrink icon.",
			"Added 'Thanks for visiting! :-)' text at bottom of changelogs page",
			"Added a bunch of my scratch games to the arcade page, such as Exploding Physics Playground, Sky High, SwipeCars, and more!",
		],
	},
	{
		date: "July 31, 2024",
		changes: [
			"Added the brand new ARCADE page!",
			"The arcade page contains every web game I have made (five in total), with more to come every time I make a game!",
			"The page is styled like an actual arcade, with each game being a clickable arcade machine.",
			"Every machine has a title, thumbnail, and short description for the game.",
		],
	},
	{
		date: "July 28, 2024",
		changes: [
			"Made the expanded view on the map page more intuitive. Instead of redirecting to a new page and reloading the map, it now nicely hides the top bar without needing to reload, and you can stay in the exact same place on the map as you were before reloading.",
			"Moved the 'Exit expanded view' button to the bottom-center of the page, and gave it rounded borders.",
		],
	},
	{
		date: "July 24, 2024",
		changes: [
			"Removed some padding on the top of the page for better viewing on mobile.",
			"Replaced the server map with something new! Previously, I was using <a href='https://modrinth.com/plugin/dynmap'>Dynmap</a> for the map, but now I have switched to <a href='https://bluemap.bluecolored.de/'>BlueMap</a>, which gives a fancy 3D view of the server, rather than a 2D image.",
			"NOTE: You may need to clear your browser cache to get the new map working initially!",
			"Added the 'Enter expanded view' button in the map page which allows you to open the map without the top UI bar.",
		],
	},
	{
		date: "July 15, 2024",
		changes: [
			"Added changelogs page.",
			"Change internet speed test button icon from 🛜 to ⚡️.",
			"Fixed title of speed test page in browser tab being 'Server Downloads.' It has now been changed to 'Speed Test.'",
			"Added another splash text :)",
			"Changed the padding an the bottom of most pages. The main page now has a lot more, and other pages just have slightly more.",
		],
	},
	{
		date: "July 14, 2024",
		changes: [
			"Added speed test page using <a href='https://openspeedtest.com/'>OpenSpeedTest</a>! You can now test the speed of your connection to my server using that page.",
			"Changed server downloads page to include a small subtitle to match the main page better.",
			"Added a few more splash texts :)",
		],
	},
];

const updateContainer = document.getElementById("update-container");

var isTopUpdate = true;
updates.forEach((update) => {
	const date = document.createElement("b");
	date.innerText = update.date;

	const dateParagraph = document.createElement("p");
	dateParagraph.className = "date";
	if (isTopUpdate) {
		dateParagraph.style.paddingTop = "var(--pad4)";
	}

	dateParagraph.appendChild(date);

	const changes = document.createElement("p");
	update.changes.forEach((change) => {
		changes.innerHTML = changes.innerHTML + "-> " + change + "<br>";
	});

	updateContainer.appendChild(dateParagraph);
	updateContainer.appendChild(changes);

	isTopUpdate = false;
});
