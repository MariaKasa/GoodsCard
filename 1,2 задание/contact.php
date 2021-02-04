<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$product = $_POST['product'];

$to = "kasmasha07@rambler.ru";
$subject ='Отправлена заявка с сайта ';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email , телейфон $phone товар: $product";
$headers = "From: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

