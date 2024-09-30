<?php

require_once '../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function JWT($jwt)
{
    $key = 'yasin';
    $decode = JWT::decode($jwt, new Key($key, 'HS256'));
    return $decode;
}
