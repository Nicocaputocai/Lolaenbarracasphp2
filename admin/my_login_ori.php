<?php

session_start();
$message="";
if(count($_POST)>0) {

if(isset($_POST['user_name']) && isset($_POST["password"])){

    if ($_POST['user_name'] != '' && $_POST["password"] != ''){
        $conn = mysql_connect("localhost","cristian","linux");
        mysql_select_db("blog",$conn);

        $user_name = mysql_real_escape_string($_POST['user_name']);$user_name = str_replace(" ","",$user_name);
        $password = mysql_real_escape_string($_POST['password']);$password = str_replace(" ","",$password);
 
        if($user_name && $password){

            $result = mysql_query("SELECT * FROM people WHERE username='" . $user_name . "' and password = '". $password."'");

            $row  = mysql_fetch_array($result);
            if(is_array($row)) {
            $_SESSION["user_id"] = $row["id"];
            $_SESSION["user_name"] = $row["first_name"];
            } else {
            $message = "El usuario y/o contraseña no son correctos.";
            }
        }
    }
}
}
if(isset($_SESSION["user_id"])) {
header("Location: /admin/index.php");
}

?>
<html>
<head>
<title>Acceso a la plataforma</title>
<link rel="stylesheet" type="text/css" href="styles.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<form name="frmUser" method="post" action="">
<div class="message"><?php if($message!="") { echo $message; } ?></div>
<table border="0" cellpadding="10" cellspacing="1" width="500" align="center">
<tr class="tableheader">
<td align="center" colspan="2">Acceso a Plataforma</td>

</tr>
<tr class="tablerow">
<td align="right">Usuario</td>
<td><input type="text" name="user_name"></td>
</tr>
<tr class="tablerow">
<td align="right">Contraseña</td>
<td><input type="password" name="password"></td>
</tr>
<tr class="tableheader">
<td align="center" colspan="2"><input type="submit" name="submit" value="Submit"></td>
</tr>
</table>
</form>
</body></html>
