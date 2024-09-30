<?php

require_once "../functions/database.php";

echo json_encode(API("UPDATE `posts` SET likes = ? WHERE post_id = ?;", [$_POST["likes"] + 1, $_POST["post_id"]]));
