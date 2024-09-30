<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

require_once "../functions/database.php";
// require_once "../../vendor/autoload.php";


$json = file_get_contents("php://input");
$data = json_decode($json);


// try {

//     $mail = new PHPMailer(true);

//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;
//     $mail->CharSet = "UTF-8";
//     $mail->isSMTP();
//     $mail->Host = "smtp.gmail.com";
//     $mail->SMTPAuth = true;
//     $mail->Username = "yasinsabertt369@gmail.com";
//     $mail->Password = "yasinsaber369";
//     $mail->SMTPSecure = "tls";
//     $mail->Port = 587;

//     $mail->setFrom("yasinsabertt369@gmail.com", "payam");

//     $mail->addAddress("yasinsabertt369@gmail.com");

//     $mail->isHTML(true);

//     $mail->Subject = "Mailing ";
//     $mail->Body = "<b>Congratulation</b>";

//     $mail->send();
//     echo "Message has been sent successfully";
// } catch (Exception $e) {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// }





if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $data->name;
    $gmail = $data->gmail;
    $password = $data->password;
    if (!empty($name) && !empty($gmail) && !empty($password)) {
        if (filter_var($gmail, FILTER_VALIDATE_EMAIL)) {
            $password = password_hash($password, PASSWORD_DEFAULT);
            API(
                "INSERT INTO `users` (name, gmail, password, date_lagin, validition_code)  VALUES (?,?,?,?,?)",
                [$name, $gmail, $password, date("Y-n-j"), rand(100000, 999999)]
            );
            echo "OK";
        }
    } else {
        echo "filde empty";
    }
} else {
    echo "not metod post";
}
