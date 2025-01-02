<?php
require $_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php";
use Jaybizzle\CrawlerDetect\CrawlerDetect;

$CrawlerDetect = new CrawlerDetect();
$isCrawler = false;
// Reads true if the user is a bot/crawler
if ($CrawlerDetect->isCrawler()) {
	$isCrawler = true;
}

// Start the session
session_start();

// Define the file path where the visit count will be stored
$file = $_SERVER["DOCUMENT_ROOT"] . "/data/visit_counter.txt";
// Path where useragent logs are stored
$agents_file = $_SERVER["DOCUMENT_ROOT"] . "/data/useragents.json";

// Check if the file exists, if not, create it and initialize the count
if (!file_exists($file)) {
	file_put_contents($file, 0); // Initialize the visit count to 0
}
// Check if the file exists, if not, create it and initialize the count
if (!file_exists($agents_file)) {
	file_put_contents($agents_file, "{}"); // Initialize the visit count to 0
}

$agents = json_decode(file_get_contents($agents_file), true); // true returns an array instead of an object

// Read the current visit count from the file
$visit_count = (int) file_get_contents($file);

// Check if the user has already been counted this session
// Also make sure the user isn't a crawler
// Also make sure javascript is enabled, to further filter out bots
if (
	!isset($_SESSION["visited"]) and
	!$isCrawler and
	isset($_GET["increment"]) and
	$_GET["increment"] == "1"
) {
	// If not, increment the visit count
	$visit_count++;

	// Save the updated visit count back to the file
	file_put_contents($file, $visit_count);

	// Set the session variable to mark this user as visited
	$_SESSION["visited"] = true;

	// Log the useragent of the user that contributed to the count
	$agents[date("Y-m-d H:i:s")] = $_SERVER["HTTP_USER_AGENT"];
	file_put_contents($agents_file, json_encode($agents));
}
?>
