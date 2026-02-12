<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$min = 1;
$max = 100;

echo json_encode([
    "random" => rand($min, $max)
]);
