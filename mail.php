

<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$email = $_POST['Email'];
$phone = $_POST['Phone'];

$token = "";
$chat_id = "";
$arr = array(
  'Телефон: ' => $phone,
  'E-mail: ' => $email,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'digitalskycity@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'AKAPULka999'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('digitalskycity@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('digitalskycity@gmail.com');     // Кому будет уходить письмо 
$mail->addAddress('kornev.agency@mail.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта ceilingstyle.com.ua';
$mail->Body    = ''. $name . ' оставил заявку, его телефон ' .$phone. ", его почта " .$email;
$mail->AltBody = '';


if (empty($_POST) === false) {
    
    if (empty($phone) === true) {
        $errors[] = 'Вы должны ввести номер телефона';
    }
    
    
    if (empty($email) === true) {
        $errors[] = 'Вы должны ввести email';
    }
    
 /*   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    && !$sendToTelegram */

    if(!$mail->send()) {
                echo 'Error';
            } else {
                exit("<meta http-equiv='refresh' content='0; url= /thank-you.html'>");
            }

    }

/* https://api.telegram.org/bot1069376285:AAGZFblRJnsiTY9Qoe-LEMjYuFOJKae1ovY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

?>