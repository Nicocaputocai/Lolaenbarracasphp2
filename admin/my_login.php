<?php
session_start();
include('../includes/includes.php');
include('../includes/configs.php');


global $todook;
global $message;
$todook = 0;
validate_session();
function validate_session(){
    global $todook;
    global $message;
    global $mysqli;
    $message="";
    if(count($_POST)>0) {
        if(isset($_POST['user_name']) && isset($_POST["password"])){
            $user_name = mysqli_escape_string($mysqli,$_POST['user_name']);
            $password = mysqli_escape_string($mysqli,$_POST['password']);
            if ($user_name != '' && $password != ''){
                $id = $mysqli->query("SELECT id FROM people WHERE username ='$user_name' AND password='$password'  LIMIT 0,1;")->fetch_object()->id;

                if($id > 0){
                    $_SESSION["user_id"] = $id;
                    $_SESSION["user_name"] = $user_name;
                    $todook = 1;

                } else{

                    $message = "El usuario y/o contraseña no son correctos.";
                }

            }
        }
    }
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

    <?php
    if($todook > 0) {
        ?>
        <script>
            window.location.replace("/admin/index.php");
        </script>
        <?php
    }
    ?>
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
