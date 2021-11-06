<?php
// Establishing Connection with Server by passing server_name, user_id and password as a parameter
$connection = mysql_connect("localhost", "cristian", "linux");
// Selecting Database
$db = mysql_select_db("blog", $connection);
session_start();// Starting Session
// Storing Session
$user_check=$_SESSION['user_name'];
// SQL Query To Fetch Complete Information Of User
$ses_sql=mysql_query("select username from people where username='$user_check'", $connection);
$row = mysql_fetch_assoc($ses_sql);
$login_session =$row['username'];
if(!isset($login_session)){
mysql_close($connection); // Closing Connection
header('Location: /admin/admin.php'); // Redirecting To Home Page
}

?>
