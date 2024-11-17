<?php
require 'vendor/autoload.php';
use Jaybizzle\CrawlerDetect\CrawlerDetect;

$CrawlerDetect = new CrawlerDetect;
$isCrawler = false;
// Reads true if the user is a bot/crawler
if ($CrawlerDetect -> isCrawler()) {
	$isCrawler = true;
	error_log("The user is a crawler!");
}

// Start the session
ini_set("session.gc_maxlifetime", 3600); // Set session lifetime to 1 hour before browser can delete it during garbage collection
session_start();

// Define the file path where the visit count will be stored
$file = "data/visit_counter.txt";

// Check if the file exists, if not, create it and initialize the count
if (!file_exists($file)) {
	file_put_contents($file, 0); // Initialize the visit count to 0
}

// Read the current visit count from the file
$visit_count = (int) file_get_contents($file);

// Check if the user has already been counted this session
// Also make sure the user isn't a crawler
if (!isset($_SESSION["visited"]) and !$isCrawler) {
	// If not, increment the visit count
	$visit_count++;

	// Save the updated visit count back to the file
	file_put_contents($file, $visit_count);

	if (isset($_SERVER["HTTP_USER_AGENT"])) {
		file_put_contents(
			"data/useragents/" . rand(0, 100000) . ".txt",
			$_SERVER["HTTP_USER_AGENT"]
		);
	}
	// Set the session variable to mark this user as visited
	$_SESSION["visited"] = true;
}
?>

<!doctype html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<html>
	<head>
		<!-- Use style.css as our default stylesheet -->
		<link rel="stylesheet" type="text/css" href="styles/style.css" />
		<link rel="stylesheet" type="text/css" href="styles/index.css" />
		<!-- Link to javascript files -->
		<script src="js/motd.js"></script>
		<!-- Set the page title to appear in the browser tab -->
		<title>hw2007.net</title>
		<link rel="icon" href="assets/favicon.png" type="image/x-icon">
	</head>
	<body>
		<!-- Title & welcome message at the top of the site -->
		<!-- The "&zwnj;" represents a zero-width character, meant to stop some browsers from turning hw2007.net into a link -->
		<p class="rainbow header large-view">Welcome to hw2007&zwnj;.<span>n</span><span>e</span><span>t</span>!</p>
		<p class="rainbow header small-view">hw2007&zwnj;.<span>n</span><span>e</span><span>t</span></p>
		<p><i id="motd">if you're seeing this, you might want to enable javascript...</i></p>

		<!-- Links -->
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
					<?php echo 
						"<p style='margin-top: auto; margin-bottom: auto; padding-left: 8px;'>Visited <span style='color: var(--green)'>$visit_count</span> times in total</p>";
					?>
				</div>
				<div class="fancy-link" style="transform: translate(0px, 0px); border-color: var(--gray)">
					<img src="assets/icons/green_light.png" style="width: 24px; height: 24px; margin-top: auto; margin-bottom: auto; image-rendering: pixelated;">
					<p style='margin-top: auto; margin-bottom: auto; padding-left: 8px;'>Updated last on <span style='color: var(--green)'>Nov 16 2024</span></p>
				</div>
			</div>
		</div>

		<p id="show-on-vip-hover" style="padding-top: var(--pad4); color: gray">
			*VIP access only!
		</p>

		<script src="js/generate_index_links.js"></script>
		<script src="js/vip_mouseover.js"></script>
	</body>
</html>
