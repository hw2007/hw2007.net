<?php
// Path to the downloads folder
$downloads = $_SERVER['DOCUMENT_ROOT'] . "/downloads";

// Scan for files in the downloads folder
$files = glob($downloads . "/*.zip");
$files = array_map("basename", $files);

// Return the files as JSON (readable by javascript)
header("Content-Type: application/json");
echo json_encode($files);
?>
