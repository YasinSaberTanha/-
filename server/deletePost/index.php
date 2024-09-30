<?php

require_once "../functions/database.php";
require_once "../functions/authJwt.php";


$user_jwt = JWT($_POST["user_jwt"])->data->user_type;


if (boolval($user_jwt) && $user_jwt == "admin") {

    $file = dirname(dirname(__DIR__)) . "\public\\files\\" . $_POST["file"];
    if (file_exists($file)) {
        unlink($file);
    }
    API("DELETE FROM `posts` WHERE post_id = ?;", [$_POST["post_id"]]);
}
