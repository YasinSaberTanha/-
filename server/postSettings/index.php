<?php

require_once "../functions/database.php";
require_once "../functions/authJwt.php";


$user_jwt = JWT($_POST["user_jwt"])->data->user_type;



if (boolval($user_jwt) && $user_jwt == "admin") {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (boolval($_POST)) {
            $file_past = API("SELECT favicon, image FROM `settings`")[0];


            if (boolval($_FILES["favicon"]["name"])) {
                if (file_exists(dirname(dirname(__DIR__)) . "\public\setting\\" . $file_past->favicon)) {
                    unlink(dirname(dirname(__DIR__)) . "\public\setting\\" . $file_past->favicon);
                }
                $faviconName = date("Y-n-d-") . rand() . $_FILES["favicon"]["name"];
                $path = dirname(dirname(__DIR__)) . "\public\setting\\" . $faviconName;

                move_uploaded_file($_FILES["favicon"]["tmp_name"], $path);
            } else {
                $faviconName = $file_past->favicon;
            }

            if (boolval($_FILES["image"]["name"])) {
                if (file_exists(dirname(dirname(__DIR__)) . "\public\setting\\" . $file_past->image)) {
                    unlink(dirname(dirname(__DIR__)) . "\public\setting\\" . $file_past->image);
                }
                $imageName = date("Y-n-d-") . rand() . $_FILES["image"]["name"];
                $path = dirname(dirname(__DIR__)) . "\public\setting\\" . $imageName;

                move_uploaded_file($_FILES["image"]["tmp_name"], $path);
            } else {
                $imageName = $file_past->image;
            }


            API(
                "UPDATE `settings` SET favicon = ?, logo = ?, image_id = ?, video_id = ?, title = ?, description = ?, footer = ?, title_web = ?, description_web = ?, keywords = ?, image = ?, instagram = ?, telegram = ?, phone = ?;",
                [$faviconName, $_POST["logo"], $_POST["image_id"], $_POST["video_id"], $_POST["title"], $_POST["description"], $_POST["footer"], $_POST["title_web"], $_POST["description_web"], $_POST["keywords"], $imageName, $_POST["instagram"], $_POST["telegram"], $_POST["phone"]]
            );
        } else {
            echo json_encode("Empty data");
        }
    } else {
        echo json_encode("Not metod post");
    }
} else {
    echo json_encode("Not admin");
}
