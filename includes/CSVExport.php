<?php

include 'includes.php';

global $mysqli;
        $query = $mysqli->query("SELECT id,email FROM newsletters_contacts ORDER BY id DESC;");

#    $sql_csv = mysql_query($query) or die("Error: " . mysql_error()); //Replace this line with what is appropriate for your DB abstraction layer

    header("Content-type:text/octect-stream");
    header("Content-Disposition:attachment;filename=data.csv");
#    while($row = mysql_fetch_row($sql_csv)) {
    while ($row = $query->fetch_assoc()){

        print '"' . stripslashes(implode('","',$row)) . "\"\n";
    }
    exit;
?>
