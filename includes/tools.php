<?php
//from http://stackoverflow.com/questions/11330480/strip-php-variable-replace-white-spaces-with-dashes
function seoUrl($string) {
    //Lower case everything
    $string = strtolower($string);

$unwanted_array = array('Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E','Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U','Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c','è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o','ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
$string = strtr( $string, $unwanted_array );

    //Make alphanumeric (removes all other characters)
    $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
    //Clean up multiple dashes or whitespaces
    $string = preg_replace("/[\s-]+/", " ", $string);
    //Convert whitespaces and underscore to dash
    $string = preg_replace("/[\s_]/", "-", $string);
    return $string;
}

function GetTotalPages($totalpages,$currentpage,$inType,$inQuery,$inSubType){
// if current page is greater than total pages...
if ($currentpage > $totalpages) {
   // set current page to last page
   $currentpage = $totalpages;
} // end if
// if current page is less than first page...
if ($currentpage < 1) {
   // set current page to first page
   $currentpage = 1;
} // end if

// range of num links to show
$range = 10;


// if not on page 1, don't show back links
if ($currentpage > 1) {
   // show << link to go back to page 1
   //echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=1'><<</a> ";
#   $pagesLinks = "<li> <a href='?currentpage=1'><i class='fa fa-caret-left'></i></a></li> ";
   // get previous page num
   $prevpage = $currentpage - 1;
   // show < link to go back to 1 page
   //echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'><</a> ";
   $type_text= '';
   if($inType){$type_text = '&type='.$inType;}
    if($inSubType){$type_text .= '&subtype='.$inSubType;}
   $query_text= '';
   if($inQuery){$query_text = '&query='.$inQuery;}

   $pagesLinks .= "<li> <a  href='?currentpage=".$prevpage.$type_text.$query_text."'><i class='fa fa-caret-left'></i></a></li> ";
} // end if 

// loop to show links to range of pages around current page
for ($x = ($currentpage - $range); $x < (($currentpage + $range) + 1); $x++) {
   // if it's a valid page number...
   if (($x > 0) && ($x <= $totalpages)) {
      // if we're on current page...
      if ($x == $currentpage) {
         // 'highlight' it but don't make a link
         //echo " [<b>$x</b>] ";
       
         $pagesLinks .= "<li ><a class='active_page' href='#'>$x</a> </li>";
      // if not current page...
      } else {
         // make it a link
         //echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$x'>$x</a> ";
   $type_text= '';
   if($inType){$type_text = '&type='.$inType;}
          if($inSubType){$type_text .= '&subtype='.$inSubType;}

   $query_text= '';
   if($inQuery){$query_text = '&query='.$inQuery;}
         $pagesLinks .= "<li> <a href='?currentpage=".$x.$type_text.$query_text."'>$x</a></li> ";
      } // end else
   } // end if 
} // end for
                 
// if not on last page, show forward and last page links        
if ($currentpage != $totalpages) {
   // get next page
   $nextpage = $currentpage + 1;
    // echo forward link for next page 
   $type_text= '';
   if($inType){$type_text = '&type='.$inType;}
    if($inSubType){$type_text .= '&subtype='.$inSubType;}

    $query_text= '';
   if($inQuery){$query_text = '&query='.$inQuery;}
   $pagesLinks .= " <li><a href='?currentpage=".$nextpage.$type_text.$query_text."'><i class='fa fa-caret-right'></i></a></li> ";
   // echo forward link for lastpage
# $pagesLinks .= "<li> <a href='?currentpage=$totalpages'><i class='fa fa-caret-right'></i></a> </li>";
} // end if
/****** end build pagination links ******/
if ($pagesLinks){return $pagesLinks;} else {return "<li class='active'><a>1</a></li>";}
}
