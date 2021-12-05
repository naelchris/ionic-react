<?php
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

//array for JSON response
$response = array();

//check for required fields
if(isset($_POST['id']) && isset($_POST['image_path']) && isset($_POST['title']) && isset($_POST['type']) && isset($_POST['base64url']) && isset($_POST['lat']) && isset($_POST['long'])) {

    $id = $_POST['id'];
    $image_path = $_POST['image_path'];
    $title = $_POST['title'];
    $type = $_POST['type'];
    $base64url = $_POST['base64url'];
    $lat = $_POST['lat'];
    $long = $_POST['long'];

    require_once __DIR__ . '/dbconfig2.php';

    //connecting to db
    $db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

    // mysql inserting a new row
    $result = mysqli_query($db, "INSERT INTO memories(id, image_path, title, base64url, type, lat, lng) VALUES('$id','$image_path','$title','$base64url','$type', '$lat','$long')");

    // check if row inserted or not
    if ($result) {
        $response["success"] = 1;
        $response["message"] = "Data mahasiswa berhasil dimasukkan";
    } else {
        $response["success"] = 0;
        $response["message"] = "Ada kesalahan";
    }

    // echoing JSON response
    echo json_encode($response);
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "data tidak lengkap";

    // echoing JSON response
    echo json_encode($response);
}

?>