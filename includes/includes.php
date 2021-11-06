<?php
global $noIncludes;
// Notificar todos los errores de PHP (ver el registro de cambios)

if($noIncludes != 1){

include 'db_connect.php';

}

#include 'events.php';
include 'blogpost.php';
#include 'Section.php';
include 'Person.php';
include 'Products.php';
include 'tools.php';
include 'navigation.php';
require_once 'htmlpurifier460/library/HTMLPurifier.auto.php';

function GetPortadaPosts()
{
global $mysqli;
 
    $sqlQuery = $mysqli->query("SELECT 
products.id, 
products.name,
products.price
FROM products, portada_posts
WHERE portada_posts.post_id = products.id
AND products.id != 0
GROUP BY portada_posts.id;");

    $list = array();
    $otrocnt = 0;
    $cnt = 0;
        while ($row = $sqlQuery->fetch_assoc()){
        $id_producto = $row['id'];
        $picture = $mysqli->query("SELECT picture FROM products_pictures WHERE product_id = '$id_producto' LIMIT 0,1;")->fetch_object()->picture;  

        $url = "/productos/".seoUrl($row["id"]."-".$row["name"]);

            $list[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "price" => $row['price'],
                         "picture" => $picture,
                         "url" => $url
                         ); $cnt++;$otrocnt++;
        }

 
    return $list;

}

function GetPageInfo()
{
global $mysqli;
 
    $result = $mysqli->query("SELECT name, descrip, phone, email, address, googleplus, twitter, facebook, city FROM web_info;");

    $row = array();

    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    return ($row);
}

function GetPageTitle($mode,$pageid)
{
global $mysqli;

$mode = $mysqli->real_escape_string($mode);
$pageid = $mysqli->real_escape_string($pageid);


    $result = $mysqli->query("SELECT name FROM web_info;");

    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $webname = $row["name"];
    if (!$mode && !$pageid){return $row["name"];}
    if ($mode == 'contact'){return "Contacto - ".$row["name"];}


    else if($mode == 'inEventCatId'){
        $result = $mysqli->query("SELECT name FROM events_categories WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = 'Eventos en "'.$row["name"].'"';
            }

        }

    else if($mode == 'inSectionCategoryId'){
        $result = $mysqli->query("SELECT name FROM sections_categories WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = $row["name"];
            }

        }

    else if($mode == 'inSectionId'){
        if ($pageid == 'all'){
        $pageTitle = 'Secciones';        
        } else {

        $result = $mysqli->query("SELECT title FROM sections WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["title"]){
            $pageTitle = $row["title"];
            }

        }
    } else if($mode == 'q'){

        $pageTitle = 'Resultados para b&uacute;squeda "'. $_POST["q"].'"';

    } else if($mode == 'inEventId'){
    
        if ($pageid == 'all'){
            $pageTitle = 'Agenda';        
        } else {

        $result = $mysqli->query("SELECT title FROM events WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["title"]){
            $pageTitle = $row["title"];
            }
        }
    } else if($mode == 'authorProfileId'){
    
        if ($pageid == 'all'){
            $pageTitle = 'Autores';        
        } else {

        $result = $mysqli->query("SELECT CONCAT(first_name, ' ', last_name) as name FROM people WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = 'Bio de '.$row["name"];
            }
        }
    } else if($mode == 'inProdId'){

        if($pageid == 'all'){
        $pageTitle = "Nuestro catálogo";
        } else {
        $result = $mysqli->query("SELECT name FROM products WHERE id=" . $pageid .";");
#         echo "SELECT name FROM products WHERE id=" . $pageid .";";

        $row = $result->fetch_assoc();

#        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){

            $pageTitle = $row["name"];
            } 
        }
    } else if($mode == 'authorId'){
    
        $result = $mysqli->query("SELECT CONCAT(first_name, ' ', last_name) as name FROM people WHERE id=" . $pageid .";");
         
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = 'Entradas de '.$row["name"];
            } 
    } else if($mode == 'inTagId'){
    
        $result = $mysqli->query("SELECT name FROM tags WHERE id=" . $pageid .";");
         
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = 'Entradas con la etiqueta '.$row["name"];
            } 
    } else if($mode == 'contacto'){

        $pageTitle = 'Contactanos';

    } else if($mode == 'home'){

        $pageTitle = 'Home';

    } else if($mode == 'not_found'){

        $pageTitle = 'Oops!!!';

    } else if($mode == 'inCategoryId'){
    
        $result = $mysqli->query("SELECT name FROM categories WHERE id=" . $pageid .";");
         
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = 'Artículos en '.$row["name"];
            } 
    } else if($mode == 'inId'){
    
        if ($pageid == 'all'){
            $pageTitle = 'Home';
        } else {

        $result = $mysqli->query("SELECT title FROM blog_posts WHERE id=" . $pageid .";");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["title"]){
            $pageTitle = $row["title"];
            }
        }
    } else if($mode == 'inProdCategoryId'){
    
        $result = $mysqli->query("SELECT name FROM products_categories WHERE id=" . $pageid .";");

        $subtype = '';
        $type = '';

        if($_GET["subtype"]){

            $sub_type_id = $mysqli->real_escape_string($_GET["subtype"]);
            $query = "SELECT p_sub_types.desc FROM p_sub_types WHERE id='" . $sub_type_id ."';";
            $subtype = $mysqli->query($query)->fetch_object()->desc;

        }else if($_GET["type"]){

            $type_id = $mysqli->real_escape_string($_GET["type"]);
            $query = "SELECT p_types.desc FROM p_types WHERE id='" . $type_id ."';";
            $type = $mysqli->query($query)->fetch_object()->desc;

        }

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = $row["name"]." ".$subtype.$type;
            }
    } else if($mode == 'inProdSubCategoryId'){

        $subtype = '';
        $type = '';

        if($_GET["subtype"]){

            $sub_type_id = $mysqli->real_escape_string($_GET["subtype"]);
            $query = "SELECT p_sub_types.desc FROM p_sub_types WHERE id='" . $sub_type_id ."';";

            $subtype = $mysqli->query($query)->fetch_object()->desc;

        }else if($_GET["type"]){

            $type_id = $mysqli->real_escape_string($_GET["type"]);
            $query = "SELECT p_types.desc FROM p_types WHERE id='" . $type_id ."';";

            $type = $mysqli->query($query)->fetch_object()->desc;

        }

        $result = $mysqli->query("SELECT name FROM products_subcategories WHERE id='" . $pageid ."';");

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($row["name"]){
            $pageTitle = $row["name"]. " ".$subtype.$type;
            }
    }
    else if($_GET["subtype"] || $_GET["type"]){

        if($_GET["subtype"]){

            $sub_type_id = $mysqli->real_escape_string($_GET["subtype"]);
            $query = "SELECT p_sub_types.desc FROM p_sub_types WHERE id='" . $sub_type_id ."';";

            $subtype = $mysqli->query($query)->fetch_object()->desc;

        }else if($_GET["type"]){

            $type_id = $mysqli->real_escape_string($_GET["type"]);
            $query = "SELECT p_types.desc FROM p_types WHERE id='" . $type_id ."';";

            $type = $mysqli->query($query)->fetch_object()->desc;

        }

        if (strlen($type) > 0){$pageTitle = $type;}
        if (strlen($subtype) > 0){$pageTitle = $subtype;}
    }
return $pageTitle;

}




function GetSections($inSectionId,$inSectionCategoryId)
{

global $mysqli;
 
    if(!empty($inSectionCategoryId))
    {
        $result = $mysqli->query("SELECT id, title, descrip, content, sectionPict FROM sections WHERE published = 1 AND sections.category = '$inSectionCategoryId' ORDER BY date_posted DESC;");
    }
    
    if (!empty($inSectionId))
    {
        if ($inSectionId == 'all'){
        $result = $mysqli->query("SELECT id, title, descrip, content, sectionPict FROM sections WHERE published = 1 ORDER BY date_posted DESC;");
        } else {
        $result = $mysqli->query("SELECT id, title, descrip, content, sectionPict FROM sections WHERE id = " . $inSectionId . ";");
        }
    }

    $profileArray = array();

    while ($row = $result->fetch_assoc())
    {

       $content = $row['content'];

        $htmlPconfig = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($htmlPconfig);
        $content = $purifier->purify($content);


        $myProfile = new Section($row["id"], $row['title'], $row['descrip'], $content, $row['sectionPict']);
        array_push($profileArray, $myProfile);
    }
    return $profileArray;

}







function GetPersonProfile($inId=null)
{
global $mysqli;
     
    if (!empty($inId))
    {
        if ($inId == 'all'){
        $result = $mysqli->query("SELECT id, first_name, last_name, url, email, avatar, self_description  FROM people;");
        } else {
        $result = $mysqli->query("SELECT id, first_name, last_name, url, email, avatar, self_description  FROM people WHERE id = " . $inId . ';');
        }
    }
    $profileArray = array();

    while ($row = $result->fetch_assoc())
    {
        $myProfile = new Person($row["id"], $row['first_name'], $row['last_name'], $row['url'], $row["email"], $row['avatar'], $row['self_description']);
        array_push($profileArray, $myProfile);
    }
    return $profileArray;
}



function GetBlogPosts($inId=null, $inTagId =null, $inAuthorId =null, $limit =null, $inCategoryId =null,$blic =null,$qString =null,$inStart =null)
{
global $mysqli;
$inQuery = '';

    if(!empty($inStart)){
    $start = $inStart - 1;
    $start = $start * $limit;
    }else{
    $start = 0;
    } 
    if (!empty($limit)){$nLimit = $limit; $limit = 'LIMIT '.$start.','.$limit;} else {$limit = '';}

    if (!empty($onlyPublic)){$onlyPublic = " AND blog_posts.published = '1'";} else {$onlyPublic = '';}
    if (!empty($qString))
    {

        $inQuery = $qString;

        $parts = preg_split('/[\s,]+/',$qString);
        $sql=array();
        foreach($parts as $part) {

            $part = $mysqli->real_escape_string($part);

            $sql[]="(blog_posts.title LIKE '%$part%' OR blog_posts.post LIKE '%$part%' OR categories.name LIKE '%$part%')";

        }

        $sql=implode(' AND ', $sql);

        $sql = ' AND '.$sql;

    } else {

        $sql= '';

    }
        

    if (!empty($inId) && is_numeric($inId) )
    {

        $sqlStatement = "SELECT SQL_CALC_FOUND_ROWS * FROM blog_posts WHERE id = " . $inId . $onlyPublic . ';';
        $query = $mysqli->query($sqlStatement);

    }
    else if (!empty($inTagId))
    {
        $query =  $mysqli->query("SELECT SQL_CALC_FOUND_ROWS blog_posts.* FROM blog_post_tags LEFT JOIN (blog_posts) ON (blog_post_tags.blog_post_id = blog_posts.id) WHERE blog_post_tags.tag_id =" . $inTagId . $onlyPublic . " ORDER BY blog_posts.date_posted DESC " . $limit . ';');
$result = $mysqli->query("SELECT COUNT(*) FROM blog_post_tags LEFT JOIN (blog_posts) ON (blog_post_tags.blog_post_id = blog_posts.id) WHERE blog_post_tags.tag_id = $inTagId $onlyPublic");
$row = $result->fetch_row();
$foundRows = $row[0];

    }
    else if (!empty($inAuthorId))
    {
        $query =  $mysqli->query("SELECT SQL_CALC_FOUND_ROWS blog_posts.* FROM blog_posts, people WHERE blog_posts.author_id = people.id AND blog_posts.author_id = '$inAuthorId' " . $onlyPublic . " ORDER BY date_posted DESC " . $limit . ';');
        $result = $mysqli->query("SELECT COUNT(*) FROM blog_posts, people WHERE blog_posts.author_id = people.id AND blog_posts.author_id = '$inAuthorId' $onlyPublic;");
        $row = $result->fetch_row();
        $foundRows = $row[0];

    }
    else if (!empty($inCategoryId))
    {
        $query =  $mysqli->query("SELECT SQL_CALC_FOUND_ROWS blog_posts.* FROM blog_posts, categories WHERE blog_posts.category = categories.id AND blog_posts.category = '$inCategoryId' " . $onlyPublic ." ORDER BY date_posted DESC " . $limit . ';');
        $result = $mysqli->query("SELECT COUNT(*) FROM blog_posts, categories WHERE blog_posts.category = categories.id AND blog_posts.category = '$inCategoryId' $onlyPublic;");
        $row = $result->fetch_row();
        $foundRows = $row[0];
    }
    else
    {

        $sqlStatement = "SELECT SQL_CALC_FOUND_ROWS blog_posts.* FROM blog_posts, categories WHERE blog_posts.category=categories.id " . $sql .  $onlyPublic. " ORDER BY blog_posts.date_posted DESC " . $limit . ';';
        $query =  $mysqli->query($sqlStatement);
        $result = $mysqli->query("SELECT COUNT(*) FROM blog_posts, categories WHERE blog_posts.category=categories.id  $sql  $onlyPublic;");
        $row = $result->fetch_row();
        $foundRows = $row[0];

    }             
 
if(!$foundRows){$foundRows = 0;}

    $postArray = array();

$totalpages = ceil($foundRows / $nLimit);


if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
   // cast var as int
   $currentpage = (int) $_GET['currentpage'];


} else {
   // default page num
   $currentpage = 1;
} // end if


$pagesLinks = GetTotalPages($totalpages,$currentpage,'',$inQuery,'');


    while ($row = $query->fetch_assoc())

    {
        if (empty($inId) || $inId == 'all'){
//            $newPost = (strlen($row['post']) > 300) ? substr($row['post'], 0, 300)  : $row['post'];
$newPost = $row['post_descrip'];
        } else {$newPost = $row['post'];}


#requiere purifier, permite normalizar tags incompletos de html para que no entre en conflicto con el contenido del blog.
        $htmlPconfig = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($htmlPconfig);
        $newPost = $purifier->purify($newPost);
       
        $myPost = new BlogPost($row["id"], $row['title'], $newPost, $row['post'], $row["author_id"], $row['date_posted'],$row['category'],$row['published'],$row['postPict'],$row['post_descrip']);
        array_push($postArray, $myPost);
    }
    return array($postArray,$foundRows,$pagesLinks);
}











function GetEvents($inId=null,$onlyPublic=null,$inCategory)
{
global $mysqli;
 

    if($inCategory){$inCategory = " AND events.category = '" . $inCategory ."'"; }else{$inCategory = '';}
 #   if (!empty($limit)){$limit = 'LIMIT 0,'.$limit;} else {$limit = '';}
    if (!empty($onlyPublic)){$onlyPublic = " AND events.published = '1'";} else {$onlyPublic = '';}
/*    if (!empty($qString))
    {

$parts = preg_split('/[\s,]+/',$qString);
$sql=array();
foreach($parts as $part) {

$part = $mysqli->real_escape_string($part);
  $sql[]="(blog_posts.title LIKE '%$part%' OR blog_posts.post LIKE '%$part%' OR categories.name LIKE '%$part%')";
}
$sql=implode(' AND ', $sql);

$sql = ' AND '.$sql;

     } else {
     $sql= '';
     }
        
*/
    if ($inId > 0)
    {
        $query = $mysqli->query("SELECT * FROM events WHERE id = " . $inId . $onlyPublic . ';');

    }
    else
    {
        $query = $mysqli->query("SELECT * FROM events WHERE 1=1 " . $inCategory .  $onlyPublic . " ORDER BY date_posted DESC;");


    }

/*
    else if (!empty($inTagId))
    {
        $query =  $mysqli->query("SELECT blog_posts.* FROM blog_post_tags LEFT JOIN (blog_posts) ON (blog_post_tags.blog_post_id = blog_posts.id) WHERE blog_post_tags.tag_id =" . $inTagId . $onlyPublic . " ORDER BY blog_posts.id DESC " . $limit . ';');

    }
    else if (!empty($inAuthorId))
    {
        $query =  $mysqli->query("SELECT blog_posts.* FROM blog_posts, people WHERE blog_posts.author_id = people.id AND blog_posts.author_id = '$inAuthorId' " . $onlyPublic . " ORDER BY blog_posts.id DESC " . $limit . ';');
    }
    else if (!empty($inCategoryId))
    {
        $query =  $mysqli->query("SELECT blog_posts.* FROM blog_posts, categories WHERE blog_posts.category = categories.id AND blog_posts.category = '$inCategoryId' " . $onlyPublic ." ORDER BY blog_posts.id DESC " . $limit . ';');
    }
    else
    {
$w = "SELECT * FROM blog_posts, categories WHERE blog_posts.category=categories.id " . $sql .  $onlyPublic. " ORDER BY blog_posts.id DESC " . $limit . ';'; 


        $query =  $mysqli->query("SELECT blog_posts.* FROM blog_posts, categories WHERE blog_posts.category=categories.id " . $sql .  $onlyPublic. " ORDER BY blog_posts.id DESC " . $limit . ';');
    }             
 */

    $eventsArray = array();

    while ($row = $query->fetch_assoc())

    {
        if ($inId == 'all' || $inCategory){
            $newEvent = (strlen($row['event']) > 300) ? substr($row['event'], 0, 300)  : $row['event'];
        } else {$newEvent = $row['event'];}

        $htmlPconfig = HTMLPurifier_Config::createDefault();
        $purifier = new HTMLPurifier($htmlPconfig);
        $newEvent = $purifier->purify($newEvent);
        $eventContent = $row['event'];
        $myEvent = new Event($row["id"], $row['title'], $newEvent, $eventContent, $row['marker'], $row['category'],$row['published'],$row['initdate'],$row['eventPict'],$row['eventDescrip']);
        array_push($eventsArray, $myEvent);
    }
    return $eventsArray;
}





/*
 * Si tiene $inQuery tiene que limpiarse la búsquda y no generar filters.
 * Si tiene tipo de producto limpia la búsqueda.
 *
 *
 *
 * */


function GetProducts(
                    $inId=null,
                    $inProdCategoryId=null,
                    $inProdSubCategoryId=null,
                    $inLimit=null,
                    $start=null,
                    $inQuery=null,
                    $admin=null,
                    $inType=null,
                    $inSubType=null,
                    $priceFrom=null,
                    $priceTo=null)
{

    global $mysqli;

    $type = '';
    $subtype = '';

    if($inType && $inType != '0'){
        $type = " and products.type = '$inType' ";
    }
    if($inSubType && $inSubType != '0'){
        $subtype = " and products.sub_type = '$inSubType' ";
    }

    if(!$start){$start = 0;}else if($start >= 1 ){$start = $start - 1;$start = $start * 9;}
    $limit = " LIMIT $start,9 ";
    if ($admin > 0){$limit = '';}
    $onlyPublic = '';
    if ($admin <= 0 ){ $onlyPublic = " AND p.published = 'Y' ";}
    $real_query = '';


    if(isset($priceFrom)){$priceFrom = "AND p.price >= '".$mysqli->real_escape_string($priceFrom)."'";}
    if(isset($priceTo)){$priceTo = "AND p.price <= '".$mysqli->real_escape_string($priceTo)."'";}

    if (!empty($inQuery))
    {

        $real_query = $inQuery;

        $parts = preg_split('/[\s,]+/',$inQuery);
        $sql=array();
        foreach($parts as $part) {

            $part = $mysqli->real_escape_string($part);

            $sql[]="(p.name LIKE '%$part%' OR p.long_desc LIKE '%$part%' OR B.name LIKE '%$part%' OR C.name LIKE '%$part%')";
        }
        $sql=implode(' AND ', $sql);

        $sql = ' AND '.$sql;

    } else {

        $sql= '';

    }

    #si es un id de producto unico
    if (!empty($inId) && is_numeric($inId) )
    {

        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS p.* ,B.name product_category, C.name product_subcategory,D.desc product_type,
                      E.desc product_subtype, B.has_waists
                     FROM products p,  products_categories B,products_subcategories C,  p_types D, p_sub_types E
                     WHERE 
                     p.category=B.id
                     " . $onlyPublic . " 
                     AND p.subcategory=C.id 
                     AND p.id = " . $inId.'
                     
                     limit 1
                     ;';

        $query = $mysqli->query($sqlQuery);

        #si tengo id de subcategoría
    } else if($inProdSubCategoryId > 0 && is_numeric($inProdSubCategoryId)){


        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS p.* ,B.name product_category,
                    C.name product_subcategory ,B.has_waists
                     FROM products p,  products_categories B,products_subcategories C
                     WHERE 
                     p.category=B.id 
                     AND p.subcategory=C.id 
                     AND subcategory = " . $inProdSubCategoryId .
                    $type .
                    $subtype .
                    $onlyPublic .
                    $priceFrom .
                    $priceTo .
                    $sql . ' GROUP BY p.id
                    ' .
                    $limit .';';

        $query = $mysqli->query($sqlQuery);

        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];

        #si tengo id de categoría
    } else if($inProdCategoryId > 0 && is_numeric($inProdCategoryId)){

        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS p.* ,
                    B.name product_category, 
                    C.name product_subcategory ,
                       B.has_waists
                     FROM products  p,  products_categories B,products_subcategories C
                    WHERE 
                    p.category=B.id 
                    AND p.subcategory=C.id 
                    AND category = " .
                    $inProdCategoryId .
                    $type .
                    $subtype .
                    $onlyPublic .
                    $priceFrom .
                    $priceTo .
                    $sql . ' group by p.id '.
                    $limit .'
                    
                    ;';

        $query = $mysqli->query($sqlQuery);
        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];

        #No filtra x id de cat, id subcat ni id de producto. Puede tener busqueda de texto, type, subtype, published y limite.
    } else {

        $sqlQuery = "
        SELECT SQL_CALC_FOUND_ROWS p.*, 
        B.`name` product_category, 
        C.`name` product_subcategory, 
        B.has_waists 
        FROM products p 
            LEFT JOIN ( products_categories B, products_subcategories C ) 
            
                ON (B.id = p.category AND C.id = p.subcategory) 
                WHERE 1 = 1
         ".  $priceFrom .
                    $priceTo .
            $onlyPublic .

            $sql . " 
                     " .
                    $limit . ';';

        $query =  $mysqli->query($sqlQuery);
        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];
    }


    $nLimit = 9;

    if(!$foundRows){$foundRows = 0;}

    $productsArray = array();

    $totalpages = ceil($foundRows / $nLimit);
    $pagesLinks = '';

    if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
        $currentpage = (int) $_GET['currentpage'];
    } else {
        $currentpage = 1;
    }

    $pagesLinks = GetTotalPages($totalpages,$currentpage,$inType,$real_query,$inSubType);


    while ($row = $query->fetch_assoc())
    {
        $myProduct = new Product(
            $row["id"],
            $row['name'],
            $row['short_desc'],
            $row['long_desc'],
            '',
            $row['category'],
            $row['price'],
            $row['strikethrough_price'],
            $row['has_strikethrough_price'],
            $row['stock'],
            $row['shows_stock'],
            $row['published'],
            $row['size'],
            $row['measures'],
            $row['material'],
            $row['colors'],
            $row["code"],
            $row["subcategory"],
            $row["price2"],
            $row["sub_type"],
            $row["price3"],
            $row["type"],
            $row["product_category"],
            $row["product_subcategory"],
            $row["product_type"],
            $row["product_subtype"],
            $row["has_waists"]
        );

        $myProduct->setProductImages();
            $myProduct->setWaists();
            $myProduct->setMainPicture();

        array_push($productsArray, $myProduct);
    }


    return array($productsArray,$foundRows,$pagesLinks);
}





function GetProducts2($inId=null,$inProdCategoryId=null,$inProdSubCategoryId=null,$inLimit=null,$start=null,$inQuery=null,$admin=null,$inType=null,$inSubType=null)
{

    global $mysqli;

    $type = '';
    $subtype = '';

    if($inType && $inType != '0'){
        $type = " and products.type = '$inType' ";
    }
    if($inSubType && $inSubType != '0'){
        $subtype = " and products.sub_type = '$inSubType' ";
    }

    if(!$start){$start = 0;}else if($start >= 1 ){$start = $start - 1;$start = $start * 9;}
    $limit = " LIMIT $start,9 ";
    if ($admin > 0){$limit = '';}

    $real_query = '';

    if (!empty($inQuery))
    {

        $real_query = $inQuery;

        $parts = preg_split('/[\s,]+/',$inQuery);
        $sql=array();
        foreach($parts as $part) {

            $part = $mysqli->real_escape_string($part);

            $sql[]="(products.name LIKE '%$part%' OR products.long_desc LIKE '%$part%' OR products_categories.name LIKE '%$part%' OR products_subcategories.name LIKE '%$part%')";
        }
        $sql=implode(' AND ', $sql);

        $sql = ' AND '.$sql;

    } else {

        $sql= '';

    }


    #si es un id de producto unico
    if (!empty($inId) && is_numeric($inId) )
    {

        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS products.* FROM products WHERE id = " . $inId.';';
        $query = $mysqli->query($sqlQuery);

        #si tengo id de subcategoría
    } else if($inProdSubCategoryId > 0 && is_numeric($inProdSubCategoryId)){


        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS products.* FROM products,products_categories,products_subcategories WHERE subcategory = " . $inProdSubCategoryId . $type . $subtype . $sql . ' GROUP BY products.id' . $limit .';';
        $query = $mysqli->query($sqlQuery);

        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];

        #si tengo id de categoría
    } else if($inProdCategoryId > 0 && is_numeric($inProdCategoryId)){

        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS products.* FROM products,products_categories,products_subcategories WHERE category = " . $inProdCategoryId . $type . $subtype . $sql . ' GROUP BY products.id '. $limit .';';
        $query = $mysqli->query($sqlQuery);
        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];

        #No filtra x id de cat, id subcat ni id de producto. Puede tener busqueda de texto, type, subtype, published y limite.
    } else {

        $sqlQuery = "SELECT SQL_CALC_FOUND_ROWS products.* FROM products, products_categories, products_subcategories WHERE products.category=products_categories.id AND products.subcategory=products_subcategories.id ". $type . $subtype . $sql .  $onlyPublic. " GROUP BY products.id " . $limit . ';';
        $query =  $mysqli->query($sqlQuery);
        $counterResult = $mysqli->query("SELECT FOUND_ROWS() as counter");
        $counterResult_assoc = $counterResult->fetch_assoc();//here I opted to use "fetch_assoc()" instead
        $foundRows = $counterResult_assoc['counter'];

    }

    $nLimit = 9;

    if(!$foundRows){$foundRows = 0;}

    $productsArray= array();

    $totalpages = ceil($foundRows / $nLimit);
    $pagesLinks = '';

    if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
        $currentpage = (int) $_GET['currentpage'];
    } else {
        $currentpage = 1;
    }

    $pagesLinks = GetTotalPages($totalpages,$currentpage,$inType,$real_query,$inSubType);

    $cnt = 0;
    while ($row = $query->fetch_assoc())
    {

        $myProduct = new Product(
            $row["id"],
            $row['name'],
            $row['short_desc'],
            $row['long_desc'],
            '',
            $row['category'],
            $row['price'],
            $row['strikethrough_price'],
            $row['has_strikethrough_price'],
            $row['stock'],
            $row['shows_stock'],
            $row['published'],
            $row['size'],
            $row['measures'],
            $row['material'],
            $row['colors'],
            $row["code"],
            $row["subcategory"],
            $row["price2"],
            $row["sub_type"],
            $row["price3"],
            $row["type"]);
        $cnt++;
        array_push($productsArray, $myProduct);
    }

    return array($productsArray,$foundRows,$pagesLinks);
}





/*
 * devuelve false si la venta está vencida, finalizada o no existe, true si está activa.
 * */
function checkSaleStatus($id){

    if($id == NULL || $id == ''){
        return false;
    }

    global $mysqli;

    $id = $mysqli->real_escape_string($id);
    $query = "SELECT sales_info.s_status, 
              CASE
              WHEN sales_info.initdate < NOW() - INTERVAL 1 WEEK THEN 'OLD'
              ELSE 'ACTUAL'
              END AS age
              FROM sales_info WHERE sales_info.id = '$id' LIMIT 1;";

    $result = $mysqli->query($query);

    $row = $result->fetch_assoc();

    if(!$row){return false;}

    if($row["age"] == 'OLD' || $row["s_status"] != 1){
        return false;
    } else {
        return true;
    }

}


function bringCartList($sales_id,$random_cookie){

global $mysqli;

$envio = 50.00;

        $totalPrice = 0;
        $query = "SELECT 
        sales_data.prod_id,
        sales_data.qty,
        sales_data.price,
        sales_data.waist_id,
        sales_data.color_id,
        products.name
        FROM sales_data
        inner join products on sales_data.prod_id = products.id
        WHERE sales_data.sales_id  = $sales_id  
        AND sales_data.qty > 0 ;";


        $sales_products = array();
        $isUpdate = 0;
        $cnt = 0;
        $result = mysqli_query($mysqli, $query);

        while ($row = $result->fetch_assoc()){

            $temp_id = $row['prod_id'];

            $sqlStatement = "SELECT p_sub_types.has_waists FROM products,p_sub_types WHERE products.id = '$temp_id' AND p_sub_types.id = products.sub_type LIMIT 0,1;";
            $has_waists = $mysqli->query($sqlStatement)->fetch_object()->has_waists;

            $picture = $mysqli->query("SELECT picture FROM products_pictures WHERE product_id = '$temp_id' LIMIT 0,1;")->fetch_object()->picture;
            if($row['color_id']){
                $color_desc = $mysqli->query("SELECT p_colors.desc FROM p_colors WHERE id = '".$row['color_id']."' LIMIT 0,1;")->fetch_object()->desc;
            }
            if($row['waist_id'] && $row['waist_id'] != '0'){
                $waist_desc = $mysqli->query("SELECT p_waists.desc FROM p_waists WHERE id = '".$row['waist_id']."' LIMIT 0,1;")->fetch_object()->desc;
            }else{
                $waist_desc = '';
            }
            $estampa = '';
            if($row['print_type'] == '1'){$estampa = 'Vinilo Termotransferible';}else if($row['print_type'] == '2'){$estampa = 'Impresión digital';}else{$estampa = "Sin Estampa";}
            $sales_products[$cnt] = array (
                         "id" => $row['prod_id'],
                         "qty" => $row['qty'],
                         "price" => $row['price'],
                         "name" => $row['name'],
                         "type_desc" => $type_desc,
                         "color_desc" => $color_desc,
                         "waist_desc" => $waist_desc,
                         "picture" => $picture,
                         "estampa" => $estampa,
                         "has_waists" => $has_waists
            ); $cnt++;
            $totalPrice = $totalPrice + ($row['qty'] * $row['price'] );
        }

return array($sales_products,$totalPrice,$envio);

}


function getProvinciasSelect($mode){

    global $mysqli;

    $sqlquery = $mysqli->query("select id, name from provincia ORDER BY orden ASC;");
            $provinciasArray = array();

    $cnt = 0;
            while ($row = $sqlquery->fetch_assoc()){

                $provinciasArray[$cnt] = array (
                             "id" => $row['id'],
                             "name" => $row['name'],
                        ); $cnt++;
            }

    if($mode == 'json'){
        echo $json = json_encode( (array)$provinciasArray);
    }else{
        return $provinciasArray;
    }

}



function getPaymentMethods($mode){
global $mysqli;

$sqlquery = $mysqli->query("select id, name from payment_methods;");
$paymentsArray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $paymentsArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
if($mode == 'json'){
echo $json = json_encode((array)$paymentsArray);
}else{
return $paymentsArray;
}

}



function getLocalidades($mode){

global $mysqli;

$provincia_id = $_POST["provincia_id"];

$sqlquery = $mysqli->query("select id, name from ciudad WHERE provincia_id = '$provincia_id';");
$provinciasArray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $localidadesArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
if($mode == 'json'){
echo $json = json_encode((array)$localidadesArray);
}else{
return $localidadesArray;
}





}



function getWaists($group){
global $mysqli;


$cnt = 0;
$sqlquery = $mysqli->query("SELECT * FROM p_waists WHERE p_waists.group = '$group' ORDER BY orden ASC;;");

        while ($row = $sqlquery->fetch_assoc()){

            $localidadesArray[$cnt] = array (
                         "id" => $row['id'],
                         "desc" => $row['desc'],
                    ); $cnt++;
        }

return $localidadesArray;
}



function getProductsOptions($type){
global $mysqli;


$cnt = 0;
$sqlquery = $mysqli->query("SELECT * FROM p_types WHERE p_types.group = '$type' ORDER BY orden ASC;;");

        while ($row = $sqlquery->fetch_assoc()){

            $localidadesArray[$cnt] = array (
                         "id" => $row['id'],
                         "desc" => $row['desc'],
                    ); $cnt++;
        }

return $localidadesArray;
}



function getColors(){
global $mysqli;

$cnt = 0;
$sqlquery = $mysqli->query("
SELECT 
p_colors.id,
p_colors.desc,
p_colors.hex 
FROM p_colors 
ORDER BY orden ASC;
");

        while ($row = $sqlquery->fetch_assoc()){

            $localidadesArray[$cnt] = array (
                         "id" => $row['id'],
                         "desc" => $row['desc'],
                         "hex" => $row['hex']
                    ); $cnt++;
        }

return $localidadesArray;
}


function getAllProductTypes(){

global $mysqli;

$cnt = 0;
$sql ="SELECT * FROM p_types ORDER BY p_types.orden ASC;";

$sqlquery = $mysqli->query($sql);

$typesArray = array();

        while ($row = $sqlquery->fetch_assoc()){
            $typesArray[$cnt] = array (
                         "id" => $row['id'],
                         "desc" => $row['desc'],
                         "order" => $row['order'],
                         "image" => $row["image"]
                    ); $cnt++;
        }

return array($typesArray);

}

function getAllProductSubTypes($type_selected){

    global $mysqli;

    $cnt = 0;

    if($type_selected){

        $sqlquery = $mysqli->query("SELECT * FROM p_sub_types WHERE type_id = '".$type_selected."' ORDER BY p_sub_types.orden ASC;");

    }else{

        $sqlquery = $mysqli->query("SELECT * FROM p_sub_types  ORDER BY p_sub_types.orden ASC;");

    }

    $typesArray = array();

    while ($row = $sqlquery->fetch_assoc()){
        $typesArray[$cnt] = array (
            "id" => $row['id'],
            "desc" => $row['desc'],
            "order" => $row['order'],
            "image" => $row['image'],
        ); $cnt++;
    }

    return array($typesArray);

}



function getTypesInfo($id){

    global $mysqli;
    $sqlquery = $mysqli->query("SELECT * FROM p_types WHERE id = '".$id."' ;");

    $row = $sqlquery->fetch_assoc();

    return $row;
}

function getSubTypesInfo($id){
    global $mysqli;

    $statement = "SELECT A.desc subtipo, B.desc tipo, A.id FROM p_sub_types A, p_types B WHERE A.id = '".$id."' AND A.type_id = B.id ;";
    $sqlquery = $mysqli->query($statement);

    $row = $sqlquery->fetch_assoc();
    return $row;

}



function searchForId($id, $array) {
    foreach ($array as $key => $val) {
        if ($val['group'] === $id) {
            return $key;
        }
    }
    return null;
}


function getAllProductsColors()
{

global $mysqli;

$sql ="SELECT * FROM p_colors ORDER BY p_colors.orden ASC;";

$sqlquery = $mysqli->query($sql);
    $colors = [];

while ($row = $sqlquery->fetch_assoc()){
    $colors[] = $row;
}

return $colors;
}

