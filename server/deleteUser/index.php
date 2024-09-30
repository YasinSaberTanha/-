<?php

require_once "../functions/database.php";
require_once "../functions/authJwt.php";


$user_jwt = JWT($_POST["user_jwt"])->data->user_type;


if (boolval($user_jwt) && $user_jwt == "admin") {
    API("DELETE FROM `users` WHERE user_id = ?;", [$_POST["user_id"]]);
}
