<?php

require_once "../functions/database.php";
require_once "../functions/authJwt.php";


$user_jwt = JWT($_POST["user_jwt"])->data->user_type;

if (boolval($user_jwt) && $user_jwt == "admin") {
    if (boolval($_POST["descriptions_about"])) {
        API("UPDATE `about` SET descriptions_about = ?;",[$_POST["descriptions_about"]]);
    }
}
