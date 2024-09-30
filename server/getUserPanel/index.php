<?php

require_once "../functions/database.php";

echo json_encode(API("SELECT user_id, name, user_type, date_lagin, validition FROM `users`"));
