<?php

require_once "../functions/database.php";

echo json_encode(API("SELECT * FROM `about`")[0]);
