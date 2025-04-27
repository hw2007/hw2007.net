<?php include "php/visitor_counter.php";?>

<!doctype html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<html>
	<head>
		<!-- THEMING SCRIPT -->
		<script src="js/sitewide-theme-manager.js" defer></script>
		<!-- Use style.css as our default stylesheet -->
		<link rel="stylesheet" type="text/css" href="styles/style.css" />
		<link rel="stylesheet" type="text/css" href="styles/index.css" />
		<!-- Link to javascript files -->
		<script src="js/motd.js"></script>
		<!-- Set the page title to appear in the browser tab -->
		<title>hw2007.net</title>
		<link rel="icon" href="assets/favicon.png" type="image/x-icon">
		<!-- We use javascript to tell PHP to increment the visitor counter, as a bot prevention measure.
		(Most bots don't have JS enabled) -->
		<script>
			// Make a request to increment the counter
			fetch("php/visitor_counter.php?increment=1") // increment=1 is so that bots crawling the site won't load that file & increment the counter.
				.catch((error) => console.error("Failed to increment visitor counter: ", error));
		</script>
	</head>
	<body>
		<!-- Title & welcome message at the top of the site -->
		<!-- The "&zwnj;" represents a zero-width character, meant to stop some browsers from turning hw2007.net into a link -->
		<p class="rainbow header large-view">Welcome to <span>h</span><span>w</span>2007&zwnj;.net!</p>
		<p class="rainbow header small-view"><span>h</span><span>w</span>2007&zwnj;.net</p>
		<p><i id="motd">if you're seeing this, you might want to enable javascript...</i></p>
		
		<!-- Links are filled out by generate_index_links.js -->
		<div class="grid" style="padding-top: calc(var(--pad3) - 5px);">
			<div id="public">
				<p><b>All the pages!</b></p>
			</div>
			<div id="socials">
				<p><b>More from me on...</b></p>
			</div>
		</div>

		<!-- Site stats section -->
		<div>
			<p><b>
				Site stats!
			</b></p>
			<div class="grid">
				<div class="fancy-link" style="transform: translate(0px, 0px); border-color: var(--gray)">
					<img src="assets/icons/green_light.png" style="width: 24px; height: 24px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
					<?php echo "<p style='margin-top: auto; margin-bottom: auto; padding-left: 8px;'>Visited <span style='color: var(--green)'>$visit_count</span> times in total</p>"; ?>
				</div>
				<div class="fancy-link" style="transform: translate(0px, 0px); border-color: var(--gray)">
					<img src="assets/icons/green_light.png" style="width: 24px; height: 24px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
					<p style='margin-top: auto; margin-bottom: auto; padding-left: 8px;'>Updated last on <span style='color: var(--green)'>Apr 26 2025</span></p>
				</div>
			</div>
		</div>

		<p id="show-on-vip-hover" style="padding-top: var(--pad4); color: var(--lightgray)">
			*Password required!
		</p>

		<script src="js/generate_index_links.js"></script>
		<script src="js/vip_mouseover.js"></script>
	</body>
</html>
