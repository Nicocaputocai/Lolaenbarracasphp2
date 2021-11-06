<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';



function SendMail( $ToEmail, $MessageHTML, $MessageTEXT,$subject='' ) {


  $Mail = new PHPMailer();
  $Mail->IsSMTP(); // Use SMTP
  $Mail->Host        = "c1380471.ferozo.com "; // Sets SMTP server
  $Mail->SMTPAuth    = TRUE; // enable SMTP authentication
  $Mail->Username    = 'sendmail@lolaenbarracas.com.ar'; // SMTP account username
  $Mail->Password    = 'kqpnsE59aF'; // SMTP account password
  $Mail->Priority    = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
  $Mail->CharSet     = 'UTF-8';
      $Mail->Port        = 587; // set the SMTP port
    #

$Mail->SMTPOptions = array(

      'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
      )
  );
  $Mail->Encoding    = '8bit';
    $Mail->AuthType = 'LOGIN';
  $Mail->Subject     = 'Recibimos un nuevo mensaje';
  if($subject){
      $Mail->Subject     = $subject;
  }

  $Mail->ContentType = 'text/html; charset=utf-8\r\n';
  $Mail->From        = 'sendmail@lolaenbarracas.com.ar';
  $Mail->FromName    = '';
  $Mail->WordWrap    = 900; // RFC 2822 Compliant for Max 998 characters per line

  $Mail->AddAddress( $ToEmail ); // To:
  $Mail->isHTML( TRUE );
  $Mail->Body    = $MessageHTML;
  $Mail->AltBody = $MessageTEXT;
  $Mail->Send();
  $Mail->SmtpClose();

  if ( $Mail->IsError() ) { // ADDED - This error checking was missing
    return FALSE;
  }
  else {
    return TRUE;
  }
}


function SendMail2($ToEmail, $MessageHTML, $MessageTEXT){

  $Mail = new PHPMailer();
  $Mail->IsSMTP(); // Use SMTP
  $Mail->SMTPAuth    = TRUE; // enable SMTP authentication
$Mail->AuthType = 'LOGIN';


 # $Mail->Host        = "50.28.15.203"; // Sets SMTP server
    $Mail->Host        = "c1380471.ferozo.com"; // Sets SMTP server
  $Mail->Username    = 'sendmail@lolaenbarracas.com.ar'; // SMTP account username
  $Mail->Password    = 'kqpnsE59aF'; // SMTP account password
  $Mail->Priority    = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
  $Mail->CharSet     = 'UTF-8';
      $Mail->Port        = 587; // set the SMTP port
$Mail->Encoding    = '8bit';
  $Mail->Subject     = 'Recibimos tu pedido - ';
  $Mail->ContentType = 'text/html; charset=utf-8\r\n';
  $Mail->From        = 'sendmail@lolaenbarracas.com.ar';
  $Mail->FromName    = '';
  $Mail->WordWrap    = 900; // RFC 2822 Compliant for Max 998 characters per line
  $Mail->SMTPOptions = array(
      'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
      )
  );

  $Mail->AddAddress( $ToEmail ); // To:
  $Mail->isHTML( TRUE );
  $Mail->Body    = $MessageHTML;
  $Mail->AltBody = $MessageTEXT;
  $Mail->Send();
  $Mail->SmtpClose();

  if ( $Mail->IsError() ) { // ADDED - This error checking was missing
    return FALSE;
  }
  else {
    return TRUE;
  }
}


//thanks.html
//thanks_mp.html

function SendHtmlMailTemplate($ToEmail, $subject, $body, $template,$paymentButton='',$cartDetails=''){

    $message = file_get_contents( '../templates/emails/'.$template );
    $message = str_replace('%title%', $subject, $message);
    $message = str_replace('%body%', $body, $message);
    $message = str_replace('%cartDetails%', $cartDetails, $message);
    $message = str_replace('%paymentButton%', $paymentButton, $message);

    $Mail = new PHPMailer();
    $Mail->IsSMTP(); // Use SMTP
    $Mail->Host        = "c1380471.ferozo.com"; // Sets SMTP server
$Mail->SMTPAuth = true;
$Mail->AuthType = 'LOGIN';


    $Mail->Port        = 587; // set the SMTP port
    $Mail->Username    = 'sendmail@lolaenbarracas.com.ar'; // SMTP account username
    $Mail->Password    = 'kqpnsE59aF'; // SMTP account password
    $Mail->Priority    = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
    $Mail->CharSet     = 'UTF-8';
    $Mail->Encoding    = '8bit';
    $Mail->Subject     = 'Recibimos tu pedido - Lola en Barracas';
    $Mail->ContentType = 'text/html; charset=utf-8\r\n';
    $Mail->From        = 'sendmail@lolaenbarracas.com.ar';
    $Mail->FromName    = '';
    $Mail->WordWrap    = 900; // RFC 2822 Compliant for Max 998 characters per line
  $Mail->SMTPOptions = array(
      'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
      )
  );

    $Mail->AddAddress( $ToEmail ); // To:
    $Mail->isHTML( TRUE );
    $Mail->Body    = $message;
    $Mail->Send();
    $Mail->SmtpClose();

    if ( $Mail->IsError() ) { // ADDED - This error checking was missing
        return FALSE;
    }
    else {
        return TRUE;
    }



}


?>
