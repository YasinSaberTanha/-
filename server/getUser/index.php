<?php

require_once "../functions/database.php";

require_once '../../vendor/autoload.php';

use Firebase\JWT\JWT;

$json = file_get_contents("php://input");
$data = json_decode($json);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gmail = $data->gmail;
    $password = $data->password;
    if ($dataUser = API("SELECT * FROM `users` WHERE validition = ? AND gmail = ?", [1, $gmail])) {
        if (password_verify($password, $dataUser[0]->password)) {
            echo json_encode(JWT(['name' => $dataUser[0]->name, 'user_type' => $dataUser[0]->user_type]));
        } else {
            echo json_encode("Not pass or gmail");
        }
    } else {
        echo json_encode("Not user");
    }
} else {
    echo json_encode("Not metod post");
}

function JWT($array)
{
    $key = 'yasin';
    $payload = [
        'data' => $array
    ];

    $jwt = JWT::encode($payload, $key, 'HS256');
    return $jwt;
}
