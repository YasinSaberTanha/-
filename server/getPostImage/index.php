<?php

require_once "../functions/database.php";

$image = API(
    "SELECT * FROM `posts` WHERE post_id = ? OR post_id = ? OR post_id = ?;",
    [$_POST["image_id_1"], $_POST["image_id_2"], $_POST["image_id_3"]]
);

$video = API(
    "SELECT * FROM `posts` WHERE post_id = ? OR post_id = ? OR post_id = ?;",
    [$_POST["video_id_1"], $_POST["video_id_2"], $_POST["video_id_3"]]
);

$data = ["video" => $video, "image" => $image];

echo json_encode($data);
