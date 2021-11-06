<?php

function GetProdNavPath($inProdSubCategoryId,$inProdCategoryId,$inQuery,$inType,$inSubType){

global $mysqli;


    $type = '';
    $subtype = '';
    if($inType && $inType != '0'){
        $type = " and products.type = '$inType' ";
    }
    if($inSubType && $inSubType != '0'){
        $subtype = " and products.sub_type = '$inSubType' ";
    }


//QUERY global:
    if (!empty($inQuery))
    {
$parts = preg_split('/[\s,]+/',$inQuery);
$sql=array();
foreach($parts as $part) {

$part = $mysqli->real_escape_string($part);

  $sql[]="(products.name LIKE '%$part%' OR products.long_desc LIKE '%$part%' OR products_categories.name LIKE '%$part%' OR products_subcategories.name LIKE '%$part%' )";
}
$sql=implode(' AND ', $sql);

$sql = ' AND '.$sql;

     } else {
     $sql= '';
     }



$filters = array();
$subcatDescrip = '';
$catDescrip = '';
$subcat_catid = '';

if($inProdSubCategoryId > 0){

    $sqlQuery = "SELECT name,cat_id FROM products_subcategories WHERE id='$inProdSubCategoryId'";
    $result = $mysqli->query($sqlQuery);
    $row = $result->fetch_assoc();

    $subcatDescrip = $row['name'];
    $subcat_catid = $row['cat_id'];
    #$subcatDescrip = "SELECT name FROM products_subcategories WHERE id='$inProdSubCategoryId'";
}


if($inProdCategoryId > 0){

    $sqlQuery = "SELECT name FROM products_categories WHERE id='$inProdCategoryId'";
    $result = $mysqli->query($sqlQuery);
    $row = $result->fetch_assoc();

    $catDescrip = $row['name'];
    #$catDescrip = "SELECT name FROM products_categories WHERE id='$inProdCategoryId'";

    $sqlStatement = "
SELECT products_subcategories.id,products_subcategories.name FROM 
products,products_categories, products_subcategories 
WHERE products_subcategories.cat_id = '$inProdCategoryId' ". $sql . $type . $subtype."
AND products.category = products_categories.id 
AND products.subcategory = products_subcategories.id 
AND products_subcategories.id != '0'
GROUP BY products_subcategories.id
ORDER BY products_subcategories.menu_order ASC ;
";

    $query =  $mysqli->query($sqlStatement);

    $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $filters[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }



} else if($inProdSubCategoryId > 0){

    $sql = "SELECT name FROM products_categories WHERE id='$subcat_catid'";
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    $catDescrip = $row['name'];


} else{

#allProducts

#faltan parametros

  #  $query =  $mysqli->query("SELECT * FROM products_categories = '$inProdCategoryId' ORDER BY menu_order ASC ;");
    $sqlQuery = "SELECT products.category id,products_categories.name name 
    FROM products,products_categories,products_subcategories  
    WHERE 
    products.published = 'Y' 
    AND products.category = products_categories.id  
    AND products.subcategory = products_subcategories.id ".$type.$subtype.$sql."  
    GROUP BY products.category;" ;


    $query = $mysqli->query($sqlQuery);

        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $sqlStatement = "SELECT products.subcategory id,
                             products_subcategories.name name 
                             FROM products,products_subcategories,products_categories  
                             WHERE products.published = 'Y' 
                             AND products.category = products_categories.id 
                             AND products.category = '".$row['id']."' 
                             AND products_subcategories.id != '0' 
                             AND products.subcategory = products_subcategories.id ".$type.$subtype.$sql."  
                             GROUP BY products.subcategory 
                             ORDER BY products_subcategories.name ASC;";

            $statement = $mysqli->query($sqlStatement);
            $subcatArray = array();
            $otrocnt = 0;
            while ($data = $statement->fetch_assoc()){
                    $subcatArray[$otrocnt] = array (
                             "id" => $data['id'],
                             "name" => $data['name'],
                        ); $otrocnt++;
            }

            $filters[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "subcatArray"=> $subcatArray

                    ); $cnt++;
        }


}

if($inProdCategoryId){


$level = 2;

    $descs = array($catDescrip,$subcatDescrip,$inProdCategoryId,$filters,$level);

} else if($inProdSubCategoryId){

$level = 3;

    $descs = array($catDescrip,$subcatDescrip,$subcat_catid,$filters,$level);

} else {

$level = 1;

    $descs = array($catDescrip,$subcatDescrip,$subcat_catid,$filters,$level);


}

return $descs;

}


function getSliderPictures($id,$mode){

global $mysqli;
 

if ($mode == 'cat'){

$sqlQuery = $mysqli->query("SELECT picture FROM sections_pictures WHERE section_cat_id = '$id';");

} else {


$sql = "SELECT category FROM sections WHERE id='$id'";
$result = $mysqli->query($sql);
$row = $result->fetch_assoc();

$idCategory = $row['category'];

    if ($idCategory){
$sqlQuery = $mysqli->query("SELECT picture FROM sections_pictures WHERE section_cat_id = '$idCategory';");
    }else{
    echo '';exit(0);
    }


}



$picturesArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $picturesArray[$cnt] = array (
                     "pict" => $row['picture'],
                ); $cnt++;
    }


    return $picturesArray;


}




// Select de categorías que quieren verse en el menú principal:

function getCategoryNav(){

global $mysqli;


$sqlStatement = "SELECT 
                 blog_posts.category id,
                 categories.name name 
                 FROM blog_posts,categories  
                 WHERE blog_posts.published = '1' 
                 AND blog_posts.category = categories.id 
                 GROUP BY blog_posts.category
                 ORDER BY categories.menu_order, 
                 categories.name ASC;";


    $sqlQuery = $mysqli->query($sqlStatement);

$categoryArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $categoryArray[$cnt] = array (
                     "id" => $row['id'],
                     "name" => $row['name'],
                ); $cnt++;
    }


    return $categoryArray;

}

function getProductsCatNav(){

global $mysqli;

 
#$sqlQuery = $mysqli->query("SELECT id, name FROM products_categories WHERE in_menu = 1 AND id != 0 ORDER BY menu_order ASC;");
#$sqlQuery = $mysqli->query("SELECT id, name FROM products_categories WHERE in_menu = 1 AND id != 0;");
#$sqlQuery = $mysqli->query("SELECT products.category id,products_categories.name name FROM products,products_categories  WHERE products.stock > 0 AND products.published = 'Y' AND products.category = products_categories.id GROUP BY products.category;");
$sqlQuery = $mysqli->query("SELECT products.category id,products_categories.name name FROM products,products_categories  WHERE products.published = 'Y' AND products.category = products_categories.id GROUP BY products.category ORDER BY products_categories.menu_order, products_categories.name ASC;");

$categoryArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       
       $otherSqlQuery = $mysqli->query("SELECT products.subcategory id, products_subcategories.name name FROM products,products_subcategories  WHERE products.published = 'Y' AND products.subcategory = products_subcategories.id AND products_subcategories.cat_id ='". $row['id'] ."' GROUP BY products.subcategory ORDER BY products_subcategories.menu_order, products_subcategories.name ASC;");

       $subcategoryArray = array();

       $subcnt = 0;

       while ($otherRow = $otherSqlQuery->fetch_assoc()){
       $subcategoryArray[$subcnt] = array (
                     "idsubcat" => $otherRow['id'],
                     "namesubcat" => $otherRow['name']
                ); $subcnt++;

       }       
$size = count($subcategoryArray);

       $categoryArray[$cnt] = array (
                     "id" => $row['id'],
                     "name" => $row['name'],
                     "subcategoryArray" => $subcategoryArray,
                     "subcnt" => $size 
                ); $cnt++;
    }


    return $categoryArray;

}


function getSectionsCatNav($id,$categoryId){

global $mysqli;

if($categoryId){$sqlQuery = $mysqli->query("SELECT * FROM sections WHERE sections.published = 1 AND sections.category = '$categoryId' ORDER BY date_posted DESC;");}
else if ($id){$sqlQuery = $mysqli->query("SELECT * FROM sections WHERE sections.published = 1 AND sections.category = (SELECT sections.category FROM sections WHERE id='$id') ORDER BY date_posted DESC;");}

$sectionsArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $sectionsArray[$cnt] = array (
                     "id" => $row['id'],
                     "title" => $row['title'],
                ); $cnt++;
    }


    return $sectionsArray;

}




function getEventsNav(){

global $mysqli;

 
$sqlQuery = $mysqli->query("SELECT events_categories.id,events_categories.name FROM events, events_categories WHERE events.published = 1 AND events.category = events_categories.id GROUP BY events_categories.id ORDER BY menu_order ASC;");

$sectionsArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $sectionsArray[$cnt] = array (
                     "id" => $row['id'],
                     "name" => $row['name'],
                ); $cnt++;
    }


    return $sectionsArray;

}



function getSectionsNav(){

global $mysqli;

 
$sqlQuery = $mysqli->query("SELECT sections.category id, sections_categories.name name FROM sections, sections_categories  WHERE sections.published = 1 AND sections.category = sections_categories.id AND sections_categories.id != 0 GROUP BY id ORDER BY menu_order ASC;");

$sectionsArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $sectionsArray[$cnt] = array (
                     "id" => $row['id'],
                     "name" => $row['name'],
                ); $cnt++;
    }


    return $sectionsArray;

}



##new Tag cloud:


#function getCategoryNav(){
function getTagCloud(){

global $mysqli;

 
$sqlQuery = $mysqli->query("SELECT blog_post_tags.tag_id, tags.name FROM blog_post_tags, tags,blog_posts WHERE blog_post_tags.tag_id = tags.id AND blog_post_tags.blog_post_id = blog_posts.id AND blog_posts.published = '1' GROUP BY blog_post_tags.tag_id;");

$tagsArray = array();

$cnt = 0;
    while ($row = $sqlQuery->fetch_assoc()){

       $tagsArray[$cnt] = array (
                     "id" => $row['tag_id'],
                     "name" => $row['name'],
                ); $cnt++;
    }


    return $tagsArray;

}
