<?php
require_once "utils.php";

// Validate the shared secret
validate_secret();

// Get all panorama folders
$folders = get_all_panos();

// Get x, y, and radius requested
$x = intval($_GET["x"] ?? "0");
$y = intval($_GET["y"] ?? "0");
$radius = floatval($_GET["radius"] ?? "0");

// Get all panos in radius
$panos_in_radius = [];
$x_values = [];
$y_values = [];

foreach ($folders as $folder) {
    $coords = get_pano_coords($folder);

    $px = intval($coords[0]);
	$py = intval($coords[1]);

    // Calculate distance
	$dist = sqrt(pow($x - $px, 2) + pow($y - $py, 2));

	if ($dist <= $radius) {
		$panos_in_radius[] = basename($folder);
		$x_values[] = $px;
		$y_values[] = $py;
	}
}

// Return JSON list of matching panos
header("Content-Type: application/json");
echo json_encode([
	"names" => $panos_in_radius,
	"x" => $x_values,
	"y" => $y_values
]);