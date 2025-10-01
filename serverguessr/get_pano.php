<?php
require_once "utils.php";

// Validate the shared secret
validate_secret();

// Get requested or random pano
$requested_pano = $_GET["request"] ?? "";
// Random pano
if ($requested_pano == "") {
	// Get all panorama folders
	$folders = get_all_panos();

	// Get excluded panos (panos are never shown twice in one game)
	$exclude_string = $_GET["exclude"] ?? "";
	$exclude_array = explode(",", $exclude_string);

	// Remove excluded panos from $folders
	$folders = array_filter($folders, function($folder) use ($exclude_array) {
		$pano_name = basename($folder);
		return !in_array($pano_name, $exclude_array);
	});

	if (empty($folders)) {
		http_response_code(500);
		exit("No valid panoramas available");
	}
	// Pick random pano
	$pano = $folders[array_rand($folders)];
}
// Verify that requested pano exists
elseif (!file_exists("../minecraft/serverguessr_panos/$requested_pano")) {
	http_response_code(500);
	exit("Cannot find pano $requested_pano");
}
// Get requested pano
else {
	$pano = "../minecraft/serverguessr_panos/$requested_pano";
}

// Read coords.txt
$coords_values = get_pano_coords($pano);

// Separate coords into x & y
$x = intval($coords_values[0]);
$y = intval($coords_values[1]);

// Read images and encode them in base64
$images = [];
for ($i = 0; $i < 6; $i++) {
	$img_path = "$pano/panorama_$i.png";
	if (!file_exists($img_path)) {
		http_response_code(500);
		exit("Missing image: $img_path");
	}
	$img_data = file_get_contents($img_path);
	$images[$i] = base64_encode($img_data);
}

// Send response as JSON
header("Content-Type: application/json");
echo json_encode([
	"x" => $x,
	"y" => $y,
	"name" => basename($pano),
	"images" => $images
]);