<?php

require_once "../functions/database.php";

echo json_encode(array_reverse(API("SELECT posts.*, COUNT(comments.post_id) AS comment FROM posts LEFT JOIN comments ON posts.post_id = comments.post_id GROUP BY posts.post_id;
")));
