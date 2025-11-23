<?php
// Path to the downloads folder
$downloads = $_SERVER['DOCUMENT_ROOT'] . "/minecraft/downloads";
$latest = $_SERVER['DOCUMENT_ROOT'] . "/minecraft/latest_download";

// Scan for zip & tar.gz files in the downloads folder
$files = array_merge(
    glob($latest . "/*.zip"),
    glob($latest . "/*.tar.gz"),
	glob($downloads . "/*.zip"),
	glob($downloads . "/*.tar.gz")
);
$files = array_map("basename", $files);

// Return the files as JSON (readable by javascript)
header("Content-Type: application/json");
echo json_encode($files);
?>
