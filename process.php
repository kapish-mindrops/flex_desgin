<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone = $_POST['number'];
$message= $_POST['message'];
$to = "kapish@mindrops.com";
$subject = "Mail From Edge Leadger";
$txt =" Name : ". $name . "\r\n Email : ". $email . "\r\n Mobile number : ". $phone . "\r\n Message : ". $message;
$headers = "From: $email";

if($email!=NULL){
  mail($to,$subject,$txt,$headers);
}
//redirect
header('Location: http://kapishsharma.com/success.html');
?>