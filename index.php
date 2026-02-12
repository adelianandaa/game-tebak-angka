<?php
// kasih izin CORS biar bisa dipanggil Flutter Web / browser
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

// ambil parameter min & max dari URL
$min = isset($_GET['min']) ? intval($_GET['min']) : 1;
$max = isset($_GET['max']) ? intval($_GET['max']) : 100;

// validasi biar ga error
if ($min > $max) {
    echo json_encode([
        "status" => false,
        "message" => "min tidak boleh lebih besar dari max"
    ]);
    exit;
}

// generate angka random
$random = rand($min, $max);

// response JSON
echo json_encode([
    "status" => true,
    "random" => $random,
    "min" => $min,
    "max" => $max
]);
