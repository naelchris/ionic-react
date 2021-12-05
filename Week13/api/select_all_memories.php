<?php
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Controll-Allow-Headers: Origin, X-Requested-With,Content-Type, Acccept');
}

$response = array();

require_once __DIR__ . '/dbconfig2.php';

$db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die (mysqli_connect_error());

$result = mysqli_query($db, "SELECT * FROM memories") or die(mysqli_connect_error());

if (mysqli_num_rows($result) > 0) {
    $response["memories"] = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $memory = array();
        $memory["id"] = $row["id"];
        $memory["image_path"] = $row["image_path"];
        $memory["title"] = $row["title"];
        $memory["type"] = $row["type"];
        $memory["base64url"] = $row["base64url"];
        $memory["lat"] = $row["lat"];
        $memory["long"] = $row["lng"];
        array_push($response["memories"], $memory);
    }

    $response["success"] = 1;
    echo json_encode($response);
} else {
    $response["success"] = 0;
    $response["message"] = "Tidak ada Mahasiswa yang ditemukan";
    echo json_encode($response);
}

mysqli_free_result($result);
?>
