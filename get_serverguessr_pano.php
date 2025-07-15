<?php
// Validate that the correct secret key is used
$secret = $_GET["secret"] ?? "";
if ($secret !== "cow4215") {
	http_response_code(403);
	exit("Forbidden");
}

// Get requested or random pano
$requested_pano = $_GET["request"] ?? "";
// Random pano
if ($requested_pano == "") {
	// Get all panorama folders
	$folders = glob("minecraft/serverguessr_panos/*", GLOB_ONLYDIR);
	if (!$folders) {
		http_response_code(500);
		exit("No panoramas found");
	}

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

	$pano = $folders[array_rand($folders)];
}
// Verify that requested pano exists
elseif (!file_exists("minecraft/serverguessr_panos/$requested_pano")) {
	http_response_code(500);
	exit("Cannot find pano $requested_pano");
}
// Get requested pano
else {
	$pano = "minecraft/serverguessr_panos/$requested_pano";
}

// Read coords.txt
$coords_file = "$pano/coords.txt";
if (!file_exists($coords_file)) {
	http_response_code(500);
	exit("Missing coords.txt for $pano");
}
$coords_text = trim(file_get_contents($coords_file));
$coords_values = explode(",", $coords_text);

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