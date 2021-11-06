<?php
 
global $mysqli;
$mysqli = new mysqli("localhost", "c1380471_masta", 'asd1indSHdsj', "c1380471_barraca");

if ($mysqli->connect_errno) {
    echo "Fallo al contenctar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

?>
