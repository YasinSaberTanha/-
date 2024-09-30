<?php

require_once "../functions/database.php";

echo json_encode(API("SELECT comment, replay_comment FROM `comments` WHERE post_id = ? ", [$_POST["comment_id"]]));
