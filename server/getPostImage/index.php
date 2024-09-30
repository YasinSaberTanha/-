<?php

require_once "../functions/database.php";

echo json_encode(API("SELECT * FROM `posts` WHERE post_id = ? OR post_id = ? OR post_id = ?;", [$_POST["image_id_1"], $_POST["image_id_2"], $_POST["image_id_3"]]));
