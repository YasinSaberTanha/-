<?php

require_once "../functions/database.php";





echo json_encode(API("SELECT * FROM `settings`")[0], JSON_UNESCAPED_UNICODE);
