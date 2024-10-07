<?php

require_once "../functions/database.php";
require_once "../functions/authJwt.php";


$user_jwt = JWT($_POST["user_jwt"])->data->user_type;

if (boolval($user_jwt) && $user_jwt == "admin") {
    echo json_encode(API("DELETE FROM comments WHERE post_id = ?;", [$_POST["post_id"]]));
}
