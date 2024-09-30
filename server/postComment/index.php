<?php

require_once "../functions/database.php";

API(
    "INSERT INTO `comments` (post_id , comment, replay_comment)  VALUES (?,?,?)",
    [$_POST["post_id"], $_POST["comment"], $_POST["replay"]]
);