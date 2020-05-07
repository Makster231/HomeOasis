<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$phone = trim($_POST['phone']);
$name = htmlspecialchars($_POST['name']);


$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Заявка С Моего Сайта";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";

$message1 ="\n\nИмя: ".$name."\n\nE-mail: " .$phone;	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <example@gmail.com>\n\n";	
$mail = mail("example@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));


}
?>
