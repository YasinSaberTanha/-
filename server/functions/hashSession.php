<?php


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methode: GET , POST , PUT DELETE");
header("Access-Control-Allow-Headers: Content-Type");


function tokenAPI()
{
    session_start([
        'cookie_path' => '/',
        'cookie_secure' => true,
        'cookie_httponly' => true,
    ]);
    session_regenerate_id(true);

    $_SESSION['tokenAPI'] = bin2hex(random_bytes(32));
    echo json_encode($_SESSION['tokenAPI']);
}
