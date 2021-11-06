
<?php 

require (dirname (__FILE__) . "/Classes/PHPExcel.php");
#require  "/class-excel-xml.inc.php");
$myarray =  array (
       1 => array ("Oliver", "Peter", "Paul"),
            array ("Marlene", "Mica", "Lina")
    );

$xls = new Excel_XML;
$xls->addArray ( $myarray );
$xls->generateXML ( "testfile" );

?>
