<?php

// Validate the shared secret
function validate_secret($correct_secret = "cow4215") {
    $secret = $_GET["secret"] ?? "";
    if ($secret !== "cow4215") {
        http_response_code(403);
        exit("Forbidden");
    }
}

// Get all panorama folders
function get_all_panos() {
	$folders = glob("../minecraft/serverguessr_panos/*", GLOB_ONLYDIR);
	if (!$folders) {
		http_response_code(500);
		exit("No panoramas found");
	}

    return $folders;
}

// Read the coords.txt file of a pano
function get_pano_coords($pano_directory) {
    $coords_file = "$pano_directory/coords.txt";
    if (!file_exists($coords_file)) {
        http_response_code(500);
        exit("Missing coords.txt for $pano");
    }
    $coords_text = trim(file_get_contents($coords_file));
    $coords_values = explode(",", $coords_text);

    return $coords_values;
}