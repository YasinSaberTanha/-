<?php
require_once "../functions/database.php";
require_once "../functions/authJwt.php";







$user_jwt = JWT($_POST["user_jwt"])->data->user_type;


if (boolval($user_jwt) && $user_jwt == "admin") {
    if (boolval($_POST["title"]) && boolval($_POST["description"]) && boolval($_POST["type"]) && boolval($_POST["mode"]) && boolval($_FILES["file"])) {

        $namefaile = date("Y-n-d-") . rand() . $_FILES["file"]["name"];

        $path = dirname(dirname(__DIR__)) . "\public\\files\\" . $namefaile;
        move_uploaded_file($_FILES["file"]["tmp_name"], $path);

        API(
            "INSERT INTO `posts` (title, description, date_create, type, mode, file)  VALUES (?,?,?,?,?,?);",
            [$_POST["title"], $_POST["description"], date("Y-n-j"), $_POST["type"], $_POST["mode"], $namefaile,]
        );
    } else {
        echo json_encode("Data empty");
    }
} else {
    echo json_encode("Not admin");
}
