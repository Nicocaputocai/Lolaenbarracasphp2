<?php  
header('Content-type: text/html');
include 'includes.php';
include 'PHPMailer/mailer.php';
include 'configs.php';
/* Indicar el tipo de contenido que tendrá la respuesta */



//veo la operacion y decido qué function
$operation = $_POST['operation'];
$getoperation = $_GET['operation'];
if($getoperation){

if($getoperation == 'getProdCatFilter'){    getProdCatFilter('bl');}
if($getoperation == 'getAllProducts'){    getAllProducts();}

}


if ($operation == 'updatePrice'){updatePrice();}
if ($operation == 'CSVExport'){CSVExport();}
if ($operation == 'savePortada'){savePortada();}
if ($operation == 'getPortada'){getPortada();}
if ($operation == 'getPerson'){getPerson();}
if ($operation == 'getEvent'){getEvent();}
if ($operation == 'getPost'){getPost();}
if ($operation == 'getSale'){getSale();}
if ($operation == 'getReservation'){getReservation();}
if ($operation == 'getProduct'){getProduct();}
if ($operation == 'getSection'){getSection();}
if ($operation == 'getTags'){getTags();}
if ($operation == 'getSectionCatSelect'){getSectionCatSelect();}
if ($operation == 'getProductsSubTypes'){getProductsSubTypes();}
if ($operation == 'getAuthorSelect'){getAuthorSelect();}
if ($operation == 'getEventCatSelect'){getEventCatSelect();}
if ($operation == 'getMarkerSelect'){getMarkerSelect();}
if ($operation == 'getProdCatFilter'){getProdCatFilter('bl');}
if ($operation == 'getProdSubCatFilter'){getProdSubCatFilter('','');}
if ($operation == 'getAllPersonalizadas'){getAllPersonalizadas();}
if ($operation == 'getPersonalizada'){getAllPersonalizadas();}
if ($operation == 'getAllPosts'){getAllPosts();}
if ($operation == 'getAllProducts'){getAllProducts();}
if ($operation == 'getAllSales'){getAllSales();}
if ($operation == 'getAllReservations'){getAllReservations();}
if ($operation == 'getAllSections'){getAllSections();}
if ($operation == 'getCategory'){getAllCategories();}
if ($operation == 'getProductCategory'){getAllProductsCategories(0);}
if ($operation == 'getProductSubCategory'){getAllProductsSubCategories();}
if ($operation == 'getPlace' && $_GET['id']){getPlace($_get['id']);}
if ($operation == 'getEventCategory'){getAllEventsCat();}
if ($operation == 'getSectionCategory'){getAllSectionsCat();}
if ($operation == 'getAllCategories'){getAllCategories();}
if ($operation == 'getAllProductsCategories'){getAllProductsCategories(0);}
if ($operation == 'getAllProductsSubCategories'){getAllProductsSubCategories();}
if ($operation == 'getAllSectionsCat'){getAllSectionsCat();}
if ($operation == 'getAllEventsCat'){getAllEventsCat();}
if ($operation == 'getMessage'){getAllMessages();}
if ($operation == 'getAllMessages'){getAllMessages();}
if ($operation == 'getAllNewsContacts'){getAllNewsContacts();}
if ($operation == 'getAllEvents'){getAllEvents();}
if ($operation == 'getAllPlaces'){getAllPlaces();}
if ($operation == 'getAllProfiles'){getAllProfiles();}
if ($operation == 'editPerson'){save($operation);}
if ($operation == 'newPerson'){save($operation);}
if ($operation == 'newPost'){savePost($operation);}
if ($operation == 'saveCategoryOrder'){saveCategoryOrder();}
if ($operation == 'saveMessage'){saveMessage();}
if ($operation == 'newSection'){saveSection($operation);}
if ($operation == 'editPost'){savePost($operation);}
if ($operation == 'savePersonalizada'){savePersonalizada();}
if ($operation == 'saveSale'){saveSale();}
if ($operation == 'editProduct'){saveProduct($operation);}
if ($operation == 'newProduct'){saveProduct($operation);}
if ($operation == 'editSection'){saveSection($operation);}
if ($operation == 'editEvent'){saveEvent($operation);}
if ($operation == 'newEvent'){saveEvent($operation);}
if ($operation == 'contact'){saveContactForm();}
if ($operation == 'pedidoMayorista'){savePedidoMayorista();}
if ($operation == 'newsletter'){saveNewsContact();}
if ($operation == 'savePage'){savePage();}
if ($operation == 'editPage'){editPage();}
if ($operation == 'newCategory'){saveCategory($operation);}
if ($operation == 'newProductsCategory'){saveProductCategory($operation);}
if ($operation == 'newSectionCategory'){saveSectionCategory($operation);}
if ($operation == 'editSectionCategory'){saveSectionCategory($operation);}
if ($operation == 'newEventCategory'){saveEventCategory($operation);}
if ($operation == 'createTag'){createTag();}
if ($operation == 'editCategory'){saveCategory($operation);}
if ($operation == 'editProductCategory'){saveProductCategory($operation);}
if ($operation == 'newProductSubCategory'){saveProductSubCategory($operation);}
if ($operation == 'editProductSubCategory'){saveProductSubCategory($operation);}
if ($operation == 'editEventCategory'){saveEventCategory($operation);}
if ($operation == 'saveReservation'){saveReservation($operation);}
if ($operation == 'editReservation'){saveReservation($operation);}

#DELETES
if ($operation == 'deleteSection'){deleteSection();}
if ($operation == 'deleteEvent'){deleteEvent();}
if ($operation == 'deletePlace'){deletePlace();}
if ($operation == 'deletePerson'){deletePerson();}
if ($operation == 'deletePost'){deletePost();}
if ($operation == 'deleteReservation'){deleteReservation();}
if ($operation == 'deleteProduct'){deleteProduct();}
if ($operation == 'deleteContact'){deleteContact();}
if ($operation == 'deleteCategory'){deleteCategory();}
if ($operation == 'deleteProductSubCategory'){deleteProductSubCategory();}
if ($operation == 'deleteProductCategory'){deleteProductCategory();}
if ($operation == 'deleteMessage'){deleteMessage();}
if ($operation == 'deleteEventCategory'){deleteEventCategory();}
if ($operation == 'deleteSectionCategory'){deleteSectionCategory();}


function getProdSubCatFilter($mode,$admin_cat){

global $mysqli;

$cat_id = $_POST["cat_id"];if($admin_cat){$cat_id = $admin_cat;}

$sqlquery = $mysqli->query("select id, name from products_subcategories WHERE cat_id = '$cat_id' ORDER BY name ASC;");
        $authorarray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $authorarray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
if($mode == 'admin'){
return $authorarray;
}else{
echo $json = json_encode( (array)$authorarray);

}

}




function getProdCatFilter($mode){

global $mysqli;

$sqlquery = $mysqli->query("select id, name from products_categories;");
        $authorarray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $authorarray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
if($mode == 'admin'){
#echo $json = json_encode( (array)$authorarray);
return $authorarray;
}else{
echo $json = json_encode( (array)$authorarray);
}

}





function getPerson(){
$id = $_POST['id'];  

global $mysqli;

$query = "SELECT id, first_name, last_name, url, email, avatar, self_description,password,username  FROM people WHERE id = '$id';";

if ($result = mysqli_query($mysqli, $query)) {$row = mysqli_fetch_row($result);}
//$product = array('id' => "$id",'nombre');
echo $json = json_encode($row);
}



function getSection(){
$id = $_POST['id'];  

global $mysqli;

$query = "SELECT 
id, title, descrip, content, published,category categorId, sectionPict, date_posted
FROM sections
WHERE id = '$id';";

if ($result = mysqli_query($mysqli, $query)) {$row = mysqli_fetch_row($result);}

//$product = array('id' => "$id",'nombre');
        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT id, name FROM sections_categories;");
        $categoryArray = array();

        while ($row2 = $sqlQuery->fetch_assoc()){

            $categoryArray[$cnt] = array (
                         "id" => $row2['id'],
                         "name" => $row2['name'],
                    ); $cnt++;
        }
        $row['8'] = $categoryArray;
echo $json = json_encode($row);
}


function getPlace($id){


global $mysqli;

$query = "SELECT * FROM markers WHERE id = '$id';";

if ($result = mysqli_query($mysqli, $query)) {
#$row = mysqli_fetch_row($result);}
$row = $result->fetch_assoc();}
//$product = array('id' => "$id",'nombre');
return $row;

}


function save($operacion){
$idPerson = $_POST['idPerson'];
$first_name = $_POST['first_name'];// $first_name = utf8_decode($first_name);
$last_name = $_POST['last_name']; // $last_name = utf8_decode($last_name);
$url = $_POST['url'];
$email = $_POST['email'];//  $email = utf8_decode($email);
$avatar = $_POST['avatarUrl'];
$username = $_POST['username'];
$password = $_POST['password'];
$self_description = $_POST['self_description']; //$self_description = utf8_decode($self_description);

global $mysqli;

if ($operacion == 'newPerson'){

$query = "INSERT INTO people SET first_name='$first_name' , last_name='$last_name', url='$url' , email='$email', self_description='$self_description', avatar='$avatar', password='$password', username='$username' ;";
    if(mysqli_query($mysqli, $query)){
    #    echo 'Se grabó correctamente el usuario';

       $id = $mysqli->query("SELECT id FROM people ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;  

       $infoArray = array('Se grabó correctamente el usuario','1',$id);
        echo $json = json_encode($infoArray);

    }
    else echo 'No se puedo registrar el usuario';

exit(0);

} else {

$query = "UPDATE people SET first_name='$first_name' , last_name='$last_name', url='$url' , email='$email', self_description='$self_description', avatar='$avatar' , password='$password', username='$username'  WHERE id='$idPerson';";
    if(mysqli_query($mysqli, $query)){echo 'Se actualizó correctamente el usuario';}
exit(0);
}

}






function deletePerson(){

    $idPerson = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM people WHERE id = $idPerson;";
    if(mysqli_query($mysqli, $query)){
 
        $query = "UPDATE blog_posts SET author_id = '0' WHERE author_id = $idPerson;";
        mysqli_query($mysqli, $query);
       
        echo 'El usuario ha sido eliminado.';
    }
    else echo 'No se pudo eliminar el usuario.';

    exit(0);

}


function deletePlace(){

    $id = $_POST['id'];

    global $mysqli;

    $query = "DELETE FROM markers WHERE id = $id;";
    if(mysqli_query($mysqli, $query)){
          $query = "UPDATE events SET marker='0' WHERE marker=$id;";
          mysqli_query($mysqli, $query);

    echo 'El lugar ha sido eliminado.';}
    else echo 'No se pudo eliminar el lugar.';

    exit(0);
}



function deleteEvent(){

    $id = $_POST['id'];

    global $mysqli;

    $query = "DELETE FROM events WHERE id = $id;";
    if(mysqli_query($mysqli, $query)){echo 'El evento ha sido eliminado.';}
    else echo 'No se pudo eliminar el evento.';

    exit(0);
}

function deleteProduct(){

    $idProd = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM products WHERE id = $idProd;";
    if(mysqli_query($mysqli, $query)){echo 'El producto ha sido eliminado.';}
    else echo 'No se pudo eliminar el producto.';

    exit(0);

}


function deleteReservation(){

    $idReservation = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM reservations WHERE id = $idReservation;";
    if(mysqli_query($mysqli, $query)){echo 'La reserva ha sido eliminada.';}
    else echo 'No se pudo eliminar la reserva.';

    exit(0);


}

function deletePost(){

    $idPost = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM blog_posts WHERE id = $idPost;";
    if(mysqli_query($mysqli, $query)){echo 'El artículo ha sido eliminado.';}
    else echo 'No se pudo eliminar el artículo.';

    exit(0);

}



function deleteMessage(){

    $id = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM contact_form WHERE id = $id;";
    if(mysqli_query($mysqli, $query)){

        echo 'El mensaje ha sido eliminado.';exit(0);
    }
    else echo 'No se pudo eliminar el mensaje';exit(0);

}

function deleteContact(){

    $id = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM newsletters_contacts WHERE id = $id;";
    if(mysqli_query($mysqli, $query)){
        echo 'El contacto ha sido eliminado.';exit(0);
    }
    else echo 'No se pudo eliminar el contacto';exit(0);

}

function deleteProductSubCategory(){

    $idCategory = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM products_subcategories WHERE id = $idCategory;";
    if(mysqli_query($mysqli, $query)){

          $query = "UPDATE products SET subcategory='0' WHERE subcategory=$idCategory;";
          mysqli_query($mysqli, $query);

        echo 'La subcategoría ha sido eliminada.';
    }
    else echo 'No se pudo eliminar la subcategoría';

    exit(0);

}

function deleteProductCategory(){

    $idCategory = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM products_categories WHERE id = $idCategory;";
    if(mysqli_query($mysqli, $query)){

          $query = "UPDATE products SET category='0' WHERE category=$idCategory;";
          mysqli_query($mysqli, $query);

        echo 'La categoría ha sido eliminada.';
    }
    else echo 'No se pudo eliminar la categoría';

    exit(0);

}



function deleteCategory(){

    $idCategory = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM categories WHERE id = $idCategory;";
    if(mysqli_query($mysqli, $query)){

          $query = "UPDATE blog_posts SET category='0' WHERE category=$idCategory;";
          mysqli_query($mysqli, $query);

        echo 'La categoría ha sido eliminada.';
    }
    else echo 'No se pudo eliminar la categoría';

    exit(0);

}


function deleteEventCategory(){

    $idCategory = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM events_categories WHERE id = $idCategory;";
    if(mysqli_query($mysqli, $query)){
        $query = "UPDATE events SET category = '0' WHERE category = '$idCategory';";
        mysqli_query($mysqli, $query);

        echo 'La categoría ha sido eliminada.';
    }
    else {echo 'No se pudo eliminar la categoría';}

    exit(0);

}

function deleteSectionCategory(){

    $idCategory = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM sections_categories WHERE id = $idCategory;";
    if(mysqli_query($mysqli, $query)){
        $query = "UPDATE sections SET category = '0' WHERE category = '$idCategory';";
        mysqli_query($mysqli, $query);

        $query = "DELETE FROM sections_pictures WHERE section_cat_id = '$idCategory';";
        mysqli_query($mysqli, $query);
        echo 'La categoría ha sido eliminada.';
    }
    else {echo 'No se pudo eliminar la categoría';}

    exit(0);

}




function deleteSection(){

    $idSection = $_POST['id'];

global $mysqli;

    $query = "DELETE FROM sections WHERE id = $idSection;";
    if(mysqli_query($mysqli, $query)){echo 'La sección ha sido eliminada.';}
    else echo 'No se pudo eliminar la sección.';

    exit(0);

}


function getAllPlaces(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM markers WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM markers WHERE id != '0' ORDER BY id DESC ;");
    }             
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "address" => $row['address'],
                    ); $cnt++;
        }

echo $json = json_encode( (array)$catArray);

}


function getAllSectionsCat(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM sections_categories WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM sections_categories WHERE id != '0' ORDER BY menu_order ASC ;");
    }             
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $cnt2 = 0;
            $sqlQuery = $mysqli->query("SELECT section_cat_id, picture FROM sections_pictures WHERE section_cat_id = '$id';");
            $picturesArray = array();

            while ($row2 = $sqlQuery->fetch_assoc()){

                $picturesArray[$cnt2] = array (
                         "id" => $row2['section_cat_id'],
                         "pict" => $row2['picture'],
                    ); $cnt2++;
            }
            $row['6'] = $picturesArray;




            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "picturesArray" => $picturesArray
                    ); $cnt++;

        }

echo $json = json_encode( (array)$catArray);
}

function getAllEventsCat(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM events_categories WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM events_categories WHERE id != '0' ORDER BY menu_order ASC ;");
    }             
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }

echo $json = json_encode( (array)$catArray);

}


function getAllNewsContacts(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM newsletters_contacts WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM newsletters_contacts WHERE id != '0' ORDER BY id DESC ;");
    }             
 
    $contactsArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $contactsArray[$cnt] = array (
                         "id" => $row['id'],
                         "email" => $row['email'],
                    ); $cnt++;
        }

echo $json = json_encode( (array)$contactsArray);

}


function getAllMessages(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM contact_form WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM contact_form WHERE id != '0' ORDER BY id DESC ;");
    }             
 
    $messagesArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $messagesArray[$cnt] = array (
                         "id" => $row['id'],
                         "first_name" => $row['first_name'],
                         "last_name" => $row['last_name'],
                         "email" => $row['email'],
                         "answered" => $row['answered'],
                         "message" => $row['message'],
                    ); $cnt++;
        }

echo $json = json_encode( (array)$messagesArray);

}




function getAllProductsSubCategories(){

global $mysqli;

$subcat_id = $_POST['subcat_id'];  
$cat_id = $_POST['cat_id'];  
$cat_string = '';
if($cat_id > 0){$cat_string = " AND cat_id = $cat_id";}

    if (!empty($subcat_id))
    {
        $query = $mysqli->query("SELECT * FROM products_subcategories WHERE id = " . $subcat_id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM products_subcategories WHERE id != '0' $cat_string ORDER BY menu_order, name ASC ;");
    }             
 
    $subcatArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            if($row['cat_id']){

            $ooooquery = $mysqli->query("SELECT name FROM products_categories WHERE id = " . $row['cat_id'] .";");
            $oorow = $ooooquery->fetch_assoc(); 
            $category_name  = $oorow["name"];

            }

            $subcatArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "in_menu" => $row['in_menu'],
                         "cat_id" => $row['cat_id'],
                         "cat_name" => $category_name,
                         "orden" => $row['orden'],
                    ); $cnt++;
        }


if($subcat_id){

    $catArray = getAllProductsCategories('1');
    $returnArray = array( $subcatArray,$catArray);
    echo $json = json_encode( (array)$returnArray);

} else {

    echo $json = json_encode( (array)$subcatArray);}

}




function getAllPersonalizadas(){

global $mysqli;
$id = $_POST['id'];  
$personalizadas_f_date = $_POST['personalizadas_f_date'];  
$personalizadas_t_date = $_POST['personalizadas_t_date'];  
$personalizadas_f_status = $_POST['personalizadas_f_status'];  

#$file = fopen("/tmp/test.txt","w");

$where = "";

if($personalizadas_f_status && $personalizadas_f_status != 0){$where .= "AND personalizadas.p_status = '$personalizadas_f_status' "; }else{$where .= "AND personalizadas.p_status != '6' ";}

if(strlen($personalizadas_f_date) > 0){$where .= " AND p_date >= '$personalizadas_f_date' ";}
if(strlen($personalizadas_t_date) > 0){$where .= " AND p_date <= '$personalizadas_t_date' ";}
#if(strlen($personalizadas_f_status ) > 0){$where .= " AND p_status = '$personalizadas_f_status' ";}

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT 
personalizadas.id,
personalizadas.name,
personalizadas.email,
personalizadas.phone,
p_colors.desc color,
payment_methods.name payment,
shipping_methods.name shipping,
p_waists.desc waist,
p_waists.group p_group,
personalizadas.message,
personalizadas.file,
personalizadas.p_date,
personalizadas.p_status,
personalizadas.staff_comments
FROM 
personalizadas,
p_colors,
p_waists,
payment_methods,
shipping_methods
WHERE 
p_colors.id = personalizadas.color_id AND
p_waists.id = personalizadas.waist_id AND
payment_methods.id = personalizadas.payment_method_id AND
shipping_methods.id = personalizadas.shipping_method_id AND
personalizadas.id = '$id'
ORDER BY id DESC;");
    } else {
        $query =  $mysqli->query("SELECT 
personalizadas.id,
personalizadas.name,
personalizadas.email,
personalizadas.phone,
p_colors.desc color,
payment_methods.name payment,
shipping_methods.name shipping,
p_waists.desc waist,
p_waists.group p_group,
personalizadas.message,
personalizadas.file,
personalizadas.p_date,
personalizadas.p_status,
personalizadas.staff_comments
FROM 
personalizadas,
p_colors,
p_waists,
payment_methods,
shipping_methods
WHERE 
p_colors.id = personalizadas.color_id AND
p_waists.id = personalizadas.waist_id AND
payment_methods.id = personalizadas.payment_method_id AND
shipping_methods.id = personalizadas.shipping_method_id
$where
ORDER BY id DESC;");




    }             

#fclose($file);
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $statusArray = array();
            $otroCnt = 0;
    
            $otherQuery = "SELECT id,descrip FROM sales_status ORDER BY id ASC;";
            $result = mysqli_query($mysqli, $otherQuery);
            
            while ($otrorow = $result->fetch_assoc()){
    
                $statusArray[$otroCnt] = array (
                             "id" => $otrorow['id'],
                             "descrip" => $otrorow['descrip'],
                ); 
                $otroCnt++;
            }
            

            $catArray[$cnt] = array (
                    "id" => $row["id"],
                    "name" => $row["name"],
                    "email" => $row["email"],
                    "phone" => $row["phone"],
                    "color" => $row["color"],
                    "payment" => $row["payment"],
                    "shipping" => $row["shipping"],
                    "waist" => $row["waist"],
                    "p_status" => $row["p_status"],
                    "p_group" => $row["p_group"],
                    "file" => $row["file"],
                    "message" => $row["message"],
                    "staff_comments" => $row["staff_comments"],
                    "p_date" => $row["p_date"],
                    "statusArray" => $statusArray,
                    ); $cnt++;
        }


echo $json = json_encode( (array)$catArray);


}






function getAllProductsCategories($select){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM products_categories WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM products_categories WHERE id != '0' ORDER BY menu_order,name ASC ;");
    }             
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "in_menu" => $row['in_menu'],
                    ); $cnt++;
        }


if($select == 1){
return $catArray;
}else{
echo $json = json_encode( (array)$catArray);
}

}

function getAllCategories(){

global $mysqli;

$id = $_POST['id'];  

    if (!empty($id))
    {
        $query = $mysqli->query("SELECT * FROM categories WHERE id = " . $id . ';');
    } else {
        $query =  $mysqli->query("SELECT * FROM categories WHERE id != '0' ORDER BY menu_order ASC ;");
    }             
 
    $catArray= array();


        $cnt = 0;
        while ($row = $query->fetch_assoc()){

            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "in_menu" => $row['in_menu'],
                    ); $cnt++;
        }

echo $json = json_encode( (array)$catArray);

}

function getAllProducts(){

global $mysqli;
$limit = $_POST['limit']; if(!$limit){$limit = $defaultProductsAdminLimit;}
$page = $_POST['page']; if(!$page){$page = 0;}
$cat_id = $_POST['cat_id']; if(!$cat_id){$cat_id = 0;}
$subcat_id = $_POST['subcat_id']; if(!$subcat_id){$subcat_id = 0;}
$query = $_POST['prodQ'];

$q = $_POST['q'];
$blogPosts = GetProducts("all",$cat_id,$subcat_id,$limit,$page,$query,1,'','',$_POST['priceFrom'],$_POST['priceTo']);

#function GetProducts($inId=null,$inProdCategoryId=null,$inProdSubCategoryId=null,$inLimit=null,$inPage=null,$inQuery=null)

echo $json = json_encode( (array)$blogPosts);

}



function getProductsSubTypes(){

    $type = $_POST["type"];

    global $mysqli;

    if(!$type){return false;}

    $query = $mysqli->query("SELECT * FROM p_sub_types WHERE type_id = '$type' ORDER BY orden ASC ;");

    $catArray= array();

    $cnt = 0;
    while ($row = $query->fetch_assoc()){

        $catArray[$cnt] = array (
            "id" => $row['id'],
            "desc" => $row['desc'],
        ); $cnt++;
    }

    echo $json = json_encode( (array)$catArray);

}




function getAllPosts(){

global $mysqli;
$limit = $_POST['limit']; if(!$limit){$limit = $defaultBlogLimit;}
$q = $_POST['q'];
$blogPosts = GetBlogPosts('','','',"$limit",'','',"$q");
echo $json = json_encode( (array)$blogPosts);

}

function getAllProfiles(){

global $mysqli;
$profiles = GetPersonProfile('all');
echo $json = json_encode( (array)$profiles);

}




function getProduct(){

#global $mysqli;
#
#$id = $_POST['id'];  
#$blogPosts = GetProducts("$id");
#echo $json = json_encode( (array)$blogPosts);

global $mysqli;


$id = $_POST['id'];  
$blogPosts = GetProducts(
    "$id",null,null,null,null,null,1);

foreach($blogPosts[0] as $product){
$cat_id = $product->category_id;
}


$categoryArray = getProdCatFilter('admin');
$subcategoryArray = getProdSubCatFilter('admin',$cat_id);
$bigArray = array($blogPosts,$categoryArray,$subcategoryArray); 
echo $json = json_encode( (array)$bigArray);


}


function getPost(){

global $mysqli;

$id = $_POST['id'];  
$blogPosts = GetBlogPosts("$id",'','',"",'0');
echo $json = json_encode( (array)$blogPosts);

}

function getEvent(){


global $mysqli;

$id = $_POST['id'];  
$events = GetEvents("$id",'');
echo $json = json_encode( (array)$events);

}


function savePortada(){

global $mysqli;


$portada_01 = $_POST['portada_01'];
$portada_02 = $_POST['portada_02'];
$portada_03 = $_POST['portada_03'];
$portada_04 = $_POST['portada_04'];
$portada_05 = $_POST['portada_05'];
$portada_06 = $_POST['portada_06'];
$portada_07 = $_POST['portada_07'];
$portada_08 = $_POST['portada_08'];
$portada_09 = $_POST['portada_09'];
$portada_10 = $_POST['portada_10'];
$portada_11 = $_POST['portada_11'];
$portada_12 = $_POST['portada_12'];


$query = "UPDATE portada_posts SET 

`post_id` = CASE
    WHEN id = 1 THEN '$portada_01'
    WHEN id = 2 THEN '$portada_02'
    WHEN id = 3 THEN '$portada_03'
    WHEN id = 4 THEN '$portada_04'
    WHEN id = 5 THEN '$portada_05'
    WHEN id = 6 THEN '$portada_06'
    WHEN id = 7 THEN '$portada_07'
    WHEN id = 8 THEN '$portada_08'
    WHEN id = 9 THEN '$portada_09'
    WHEN id = 10 THEN '$portada_10'
    WHEN id = 11 THEN '$portada_11'
    WHEN id = 12 THEN '$portada_12'
    END;";

    mysqli_query($mysqli, $query);

        $infoArray = array('Se grabaron correctamente los Destacados y Novedadaes del home','1');
        echo $json = json_encode($infoArray);
    
    exit(0);

}





function saveCategoryOrder(){

global $mysqli;

$tableId = $_POST['tableId'];
$categories = explode("|" , $_POST['categories']);


        if($categories) {

            if ($tableId == 'catTable'){$queryTable = 'categories';
            } else if ($tableId == 'productsCatTable'){$queryTable = 'products_categories';
            } else if ($tableId == 'productsSubCatTable'){$queryTable = 'products_subcategories';
            } else if ($tableId == 'eventsCatTable'){$queryTable = 'events_categories';
            } else if ($tableId == 'sectionsCatTable'){$queryTable = 'sections_categories';
            } else {
            $infoArray = array('No se pudo guardar el orden de las categorías','0','');
            echo $json = json_encode($infoArray);

            exit(0);

            }
        #echo "You chose the following color(s): <br>";
            $cnt = 0;
            foreach ($categories as $cats){
        #    echo $color."<br />";
            $query = "UPDATE $queryTable SET menu_order='$cnt' WHERE id = $cats";            
            mysqli_query($mysqli, $query);
            $cnt++;
            }

        } // end brace for if(isset

        $infoArray = array('Se grabó correctamente el orden','1',$id);
        echo $json = json_encode($infoArray);

    
    exit(0);


}










function saveProduct($operacion){

global $mysqli;


$name = $_POST['product_name']; $name = utf8_decode($name);
$short_desc = $_POST['product_short_desc']; $short_desc = utf8_decode($short_desc);
$long_desc = $_POST['product_long_desc']; $long_desc = utf8_decode($long_desc);

$category = $_POST['product_category_id'];

    #$sub_type = $_POST['sub_type'];if(!$sub_type){return false;}
    #$type = $_POST['type'];if(!$type){return false;}

$subcategory = $_POST['product_subcategory_id'];

$price = $_POST['product_price'];if(!$price){$price = "0.00";}
$price2 = $_POST['product_price2'];if(!$price2){$price2 = "0.00";}
$price3 = $_POST['product_price3'];if(!$price3){$price3 = "0.00";}

$strikethrough_price = $_POST['strikethrough_price'];if(!$strikethrough_price){$strikethrough_price = "0.00";}
# $strikethrough_price = utf8_decode($strikethrough_price);
$has_strikethrough_price = $_POST['has_strikethrough_price'];# $has_strikethrough_price = utf8_decode($has_strikethrough_price);
$stock = $_POST['product_stock'];if(!$stock){$stock = 0;}
$shows_stock = $_POST['shows_stock']; 
$size = $_POST['product_size']; $size = utf8_decode($size);
$measures = $_POST['product_measures']; $measures = utf8_decode($measures);
$material = $_POST['product_material']; $material = utf8_decode($material);
//$colors = $_POST['product_colors']; $colors = utf8_decode($colors);
$code = $_POST['product_code']; $code = utf8_decode($code);
$id = $_POST['idProduct'];
$published = $_POST['published'];
$pictures = explode("|" , $_POST['pictures']);
$colors = explode("|" , $_POST['colors']);
$waists = explode("|" , $_POST['waists']);

#$post = mysqli_real_escape_string($mysqli, $post);

if ($operacion == 'newProduct'){
$query = "INSERT INTO products SET 
name='$name', 
short_desc='$short_desc', 
long_desc='$long_desc', 
category='$category', 
subcategory='$subcategory', 
price='$price', 
price2='$price2', 
price3='$price3',
strikethrough_price='$strikethrough_price', 
has_strikethrough_price='$has_strikethrough_price', 
stock='$stock', 
shows_stock='$shows_stock', 
size='$size',  
sub_type='0', 
type='0',
measures='$measures', 
material='$material', 
published='$published', 
code='$code'
;";
$recontraquery = $query;
    if(mysqli_query($mysqli, $query)){

        #si se grabó vacío los tags y luego grabo si es que existe alguno para este post:        
        
         $id = $mysqli->query("SELECT id FROM products ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;  


        if(isset($_POST['pictures']) && $id) {

        #echo "You chose the following color(s): <br>";
        $order = 1;

            foreach ($pictures as $pict){
        #    echo $color."<br />";
            if (strlen($pict)>10){
                $query = "INSERT INTO products_pictures SET product_id='$id', picture='$pict',orden='$order';";
                mysqli_query($mysqli, $query);$order++;
                }
            }

        } // end brace for if(isset

        if(isset($_POST['colors']) && $id) {

        #echo "You chose the following color(s): <br>";

            foreach ($colors as $color){
        #    echo $color."<br />";
                if($color > 0){
                    $query = "INSERT INTO products_colors SET product_id='$id', color_id='$color';";
                    mysqli_query($mysqli, $query);
                }
            }

        } // end brace for if(isset



        $query = "DELETE FROM products_waists WHERE product_id='$id';"; 
        mysqli_query($mysqli, $query);

        if(isset($_POST['waists']) && $id) {

            foreach ($waists as $ws){
                if($ws> 0){
                    $query = "INSERT INTO products_waists SET product_id='$id', waist_id='$ws';";
                    mysqli_query($mysqli, $query);
                }
            }

        } // end brace for if(isset



        $infoArray = array('Se grabó correctamente el Producto','1',$id);
        echo $json = json_encode($infoArray);

    } else {
        echo 'No se puedo registrar el artículo';
    }

    exit(0);

} else {

$query = "UPDATE products SET
name='$name', 
short_desc='$short_desc', 
long_desc='$long_desc', 
category='$category', 
subcategory='$subcategory', 
price='$price', 
price2='$price2',
price3='$price3',  
strikethrough_price='$strikethrough_price', 
has_strikethrough_price='$has_strikethrough_price', 
stock='$stock', 
shows_stock='$shows_stock', 
size='$size', 
sub_type='0', 
type='0',
measures='$measures', 
material='$material', 
published='$published', 
code='$code'
WHERE id='$id';";


    if(mysqli_query($mysqli, $query)){

        $query = "DELETE FROM products_colors WHERE product_id='$id';"; 

        mysqli_query($mysqli, $query);
        if(isset($_POST['colors'])) {
            foreach ($colors as $color){
                if($color > 0){
                $query2 = "INSERT INTO products_colors SET product_id='$id', color_id='$color';";                         
                mysqli_query($mysqli, $query2);
                }
            }

        } // end brace for if(isset

        $query = "DELETE FROM products_pictures WHERE product_id='$id';";
        mysqli_query($mysqli, $query);
        if(isset($_POST['pictures'])) {
        $order = 0;
            foreach ($pictures as $pict){
        #    echo $color."<br />";
            if(strlen($pict)>10){
                $query2 = "INSERT INTO products_pictures SET product_id='$id', picture='$pict',orden='$order';";            
                mysqli_query($mysqli, $query2);
                }
            $order++;
            }

        } // end brace for if(isset

        $query = "DELETE FROM products_waists WHERE product_id='$id';"; 
        mysqli_query($mysqli, $query);

        if(isset($_POST['waists']) && $id) {

        #echo "You chose the following color(s): <br>";

            foreach ($waists as $ws){
        #    echo $color."<br />";
                if($ws> 0){
                    $query = "INSERT INTO products_waists SET product_id='$id', waist_id='$ws';";
                    mysqli_query($mysqli, $query);
                }
            }

        } // end brace for if(isset




        echo 'Se actualizó correctamente el producto';

    } else {

        echo 'No se pudo actualizar el producto';

    }
exit(0);
}



}

function savePost($operacion){

global $mysqli;

$title = $_POST['title']; $title = utf8_decode($title);
$post_descrip = $_POST['post_descrip']; $post_descrip = utf8_decode($post_descrip);
$post = $_POST['postHtml'];
$post = mysqli_real_escape_string($mysqli, $post);

#$post = str_replace("'", "\'", $post);
#$post = str_replace('"', '\"', $post);


$idPost = $_POST['idPost'];
$author_id = $_POST['author_id'];
$date_posted = $_POST['date_posted'];
$category_id = $_POST['category_id'];
$published = $_POST['published'];
$postPict = $_POST['postPict'];

$tags = explode("|" , $_POST['tags']);


if($date_posted){
    $date_posted = str_replace('-',':',$date_posted);
//    $date_posted = strtotime($date_posted);
}

 



if ($operacion == 'newPost'){
$query = "INSERT INTO blog_posts SET title ='$title' , post='$post', author_id='$author_id' , date_posted='$date_posted', category='$category_id', published='$published', postPict = '$postPict', post_descrip = '$post_descrip';";
$recontraquery = $query;
    if(mysqli_query($mysqli, $query)){

        #si se grabó vacío los tags y luego grabo si es que existe alguno para este post:        
        
         $id = $mysqli->query("SELECT id FROM blog_posts ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;  

#        $newPostId = $mysqli->query("SELECT id FROM blog_posts ORDER BY id DESC LIMIT 0,1;")->fetch_row()[0];        

        if(isset($_POST['tags'])) {

        #echo "You chose the following color(s): <br>";

            foreach ($tags as $tagsValue){

$tagsValue = utf8_decode($tagsValue);

        #    echo $color."<br />";
            $query = "INSERT INTO blog_post_tags SET blog_post_id='$id', tag_id='$tagsValue'";            
            mysqli_query($mysqli, $query);
            }

        } // end brace for if(isset

        $infoArray = array('Se grabó correctamente el artículo','1',$id);
        echo $json = json_encode($infoArray);

    } else {
        echo 'No se pudo registrar el artículo';
    }

    exit(0);

} else {

$query = "UPDATE blog_posts SET title ='$title' , post='$post', author_id='$author_id' , date_posted='$date_posted', category='$category_id', published='$published', postPict = '$postPict', post_descrip = '$post_descrip' WHERE id='$idPost';";
$recontraquery = $query;
    if(mysqli_query($mysqli, $query)){


        $query = "DELETE FROM blog_post_tags WHERE blog_post_id='$idPost';";
        mysqli_query($mysqli, $query);

        if(isset($_POST['tags'])) {

            foreach ($tags as $tagsValue){
            $query = "INSERT INTO blog_post_tags SET blog_post_id='$idPost', tag_id='$tagsValue';";            
            mysqli_query($mysqli, $query);
            }

        } // end brace for if(isset

        else {
            
        #echo "You did not choose a color.";

        }
        echo 'Se actualizó correctamente el artículo';

    } else {

        echo 'No se pudo actualizar el artículo';

    }
exit(0);
}



}






function saveEvent($operacion){
global $mysqli;

$title = $_POST['title']; $title = utf8_decode($title);
$event = $_POST['eventHtml']; $event = mysqli_real_escape_string($mysqli, $event);
$eventDescrip = $_POST['eventDescrip']; $eventDescrip = utf8_decode($eventDescrip);


$idEvent = $_POST['idEvent'];
$marker = $_POST['marker'];
$initdate = $_POST['initdate'];
$events_category_id = $_POST['events_category_id'];
$published = $_POST['published'];
$eventPict = $_POST['eventPict'];



if($initdate){
    $initdate = str_replace('/',':',$initdate);
//    $date_posted = strtotime($date_posted);
}




if ($operacion == 'newEvent'){
$query = "INSERT INTO events SET title ='$title' , event='$event', marker='$marker' , initdate='$initdate', category='$events_category_id', published='$published', eventPict='$eventPict', eventDescrip='$eventDescrip', date_posted=NOW();";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM events ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se creó correctamente el evento','1',$id);
        echo $json = json_encode($infoArray);

    } else {

        $infoArray = array('No se puedo registrar el evento','0');
        echo $json = json_encode($infoArray);
        #echo 'No se puedo registrar el evento';
    }

    exit(0);

} else {

$query = "UPDATE events SET title ='$title', event='$event', marker='$marker', initdate='$initdate', category='$events_category_id', published='$published',  eventPict='$eventPict', eventDescrip='$eventDescrip' WHERE id='$idEvent';";
    if(mysqli_query($mysqli, $query)){

#        echo 'Se actualizó correctamente el evento';
        $infoArray = array('Se grabó correctamente el evento','1');
        echo $json = json_encode($infoArray);

    } else {

        $infoArray = array('No se puedo registrar el evento','0');
        echo $json = json_encode($infoArray);

    }
exit(0);
}



}



function getmarkerselect(){

global $mysqli;

/*        $result = $mysqli->query("select id, first_name, last_name from people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profilearray, $row);
    }

*/

$sqlquery = $mysqli->query("select id, name from markers WHERE id!=0;");
        $authorarray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $authorarray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
echo $json = json_encode( (array)$authorarray);

}






function getEventCatSelect(){

global $mysqli;

/*        $result = $mysqli->query("select id, first_name, last_name from people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profilearray, $row);
    }

*/

$sqlquery = $mysqli->query("select id, name from events_categories;");
        $authorarray = array();

$cnt = 0;
        while ($row = $sqlquery->fetch_assoc()){

            $authorarray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profilearray;
echo $json = json_encode( (array)$authorarray);

}




function getSale(){

global $mysqli;

/*        $result = $mysqli->query("SELECT id, first_name, last_name FROM people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profileArray, $row);
    }

*/

$id = $_POST['id'];

$sqlQuery = $mysqli->query("SELECT 
sales_info.id,
sales_info.initdate,
sales_info.client_id,
sales_info.total,
sales_info.client_message,
sales_info.staff_message,
sales_info.s_status,
sales_info.payment_method,
sales_info.shipping_method,
clients.first_name,
clients.last_name,
provincia.name provincia_name,
ciudad.name ciudad_name,
clients.address,
clients.postal_code,
clients.phone,
clients.email
FROM sales_info,
provincia,
ciudad,
clients
WHERE
clients.provincia = provincia.id
AND clients.ciudad = ciudad.id
AND clients.id = sales_info.client_id
AND sales_info.id = $id
ORDER BY initdate DESC;");
        $array = array();


        while ($row = $sqlQuery->fetch_assoc()){

                         $sale_id = $row['id'];
                         $initdate = $row['initdate'];
                         $client_id = $row['client_id'];
                         $total = $row['total'];
                         $client_message = $row['client_message'];
                         $staff_message = $row['staff_message'];
                         $firstname = $row['first_name'];
                         $lastname = $row['last_name'];
#                         $descrip = $row['descrip'];
                         $s_status = $row['s_status'];
                         $payment_method = $row['payment_method'];
                         $shipping_method = $row['shipping_method'];

                         $provincia_name = $row['provincia_name'];
                         $ciudad_name = $row['ciudad_name'];
                         $address = $row['address'];
                         $postal_code = $row['postal_code'];
                         $phone = $row['phone'];
                         $email = $row['email'];




/*
        $query = "SELECT  
sales_data.prod_id,
sales_data.qty, 
sales_data.price,
sales_data.print_type,
p_colors.desc AS color,
p_waists.desc AS waist,
p_types.desc AS p_type,
products.name 
FROM 
sales_data, 
products,
p_types,
p_colors,
p_waists
WHERE 
sales_data.color_id = p_colors.id 
AND sales_data.waist_id = p_waists.id 
AND sales_data.type_id = p_types.id
AND sales_data.prod_id = products.id 
AND sales_data.sales_id = $sale_id;";
*/

/*

            sales_data.prod_id,
sales_data.qty,
sales_data.price,
sales_data.print_type,
p_colors.desc AS color,
p_waists.desc AS waist,
p_types.desc AS p_type,
products.name
*/
            
$query = "SELECT 
sales_data.sales_id,
sales_data.prod_id,
sales_data.price,
sales_data.qty,
p_colors.`desc` as color_desc,
p_types.`desc` as type_desc,
p_waists.`desc` as waists_desc,
sales_data.print_type,
products.name
FROM sales_data
LEFT JOIN products ON sales_data.prod_id = products.id
LEFT JOIN p_colors ON sales_data.color_id = p_colors.id
LEFT JOIN p_types ON sales_data.type_id = p_types.id
LEFT JOIN p_waists ON sales_data.waist_id = p_waists.id
WHERE sales_data.sales_id = '$sale_id'";

        $sales_products = array();
        $productsDetails = '';
        $isUpdate = 0;
        $cnt = 0;
        $result = mysqli_query($mysqli, $query);
        $totalPrice = 0;


        while ($row = $result->fetch_assoc()){

            #$estampa = '';if($row['print_type'] == '1'){$estampa = 'Estampa 1';}else if($row['print_type'] =='2'){$estampa = 'Estampa 2';}
            $estampa = ''; if($print_type == '1'){$estampa = 'Vinilo Termotransferible';}else if($print_type == '2'){$estampa = 'Impresión Digital';}else if($print_type == '3'){$estampa = 'Sin Estampa';}
            $productsDetails .= $row['name']." ".$row['p_type']." ".$row['color_desc']." Talle ".$row['waists_desc'].' Estampa '.$estampa.' (Código:'.$row['prod_id']. ') x ' .$row['qty']. ' a $'.$row['price']."\n\r";

            $totalPrice = $totalPrice + ($row['qty'] * $row['price'] );
        }

            
        $statusArray = array();
        $otroCnt = 0;

        $otherQuery = "SELECT id,descrip FROM sales_status ORDER BY id ASC;";
        $result = mysqli_query($mysqli, $otherQuery);
        
        while ($row = $result->fetch_assoc()){

            $statusArray[$otroCnt] = array (
                         "id" => $row['id'],
                         "descrip" => $row['descrip'],
            ); 
            $otroCnt++;
        }


        $paymentArray = array();
        $OtroCnt = 0;

        $pay_query = "SELECT id,name FROM payment_methods ORDER BY id ASC;";
        $result = mysqli_query($mysqli, $pay_query);
        
        while ($row = $result->fetch_assoc()){

            $paymentArray[$OtroCnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
            ); 
            $OtroCnt++;
        }


            
            $array[$cnt] = array (
                         "id" => $sale_id,
                         "initdate" => $initdate,
                         "client_id" => $client_id,
                         "total" => $total,
                         "client_message" => $client_message,
                         "staff_message" => $staff_message,
                         "firstname" => $firstname,
                         "lastname" => $lastname,
                         "s_status" => $s_status,
                         "productsDetails" => $productsDetails,
                         "statusArray" => $statusArray,
                         "payment_method" => $payment_method,
                         "paymentArray" => $paymentArray,
                         "provincia_name" => $provincia_name,
                         "ciudad_name" => $ciudad_name,
                         "address" => $address,
                         "postal_code" => $postal_code,
                         "phone" => $phone,
                         "email" => $email

                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$array);
}




function getReservation(){

global $mysqli;

/*        $result = $mysqli->query("SELECT id, first_name, last_name FROM people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profileArray, $row);
    }

*/

$id = $_POST['id'];

$sqlQuery = $mysqli->query("SELECT 
* 
FROM reservations
WHERE id=$id;");
        $sectionsArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){

            $sectionsArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "lastname" => $row['lastname'],
                         "phone" => $row['phone'],
                         "email" => $row['email'],
                         "qty_with_baggage" => $row['qty_with_baggage'],
                         "qty_without_baggage" => $row['qty_without_baggage'],
                         "origin" => $row['origin'],
                         "date" => $row['date'],
                         "day" => $row['day'],
                         "hour" => $row['hour'],
                         "message" => $row['message'],
                         "staff_message" => $row['staff_message'],
                         "status" => $row['status'],

                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$sectionsArray);

}







function getPortada(){

global $mysqli;

$sqlQuery = $mysqli->query("SELECT id,name FROM products WHERE published='Y';");

$postArray  = array();
$portadaArray= array();

$cnt = 0;
while ($row = $sqlQuery->fetch_assoc()){

      $postArray[$cnt] = array (
                "id" => $row['id'],
                "name" => $row['name'],
      ); $cnt++;
}

$sqlQuery = $mysqli->query("SELECT 
portada_posts.id as orden, 
portada_posts.post_id
FROM portada_posts
ORDER BY portada_posts.id ASC;");

$cnt = 0;
       while ($row = $sqlQuery->fetch_assoc()){

       $id = $mysqli->query("SELECT id FROM products WHERE id ='".$row['post_id']."';")->fetch_object()->id;
 
       if($id > 0){
            $portadaArray[$cnt] = array (
                         "orden" => $row['orden'],
                         "id" => $row['post_id'],
                    ); $cnt++;
       } else {
            $portadaArray[$cnt] = array (
                         "orden" => $row['orden'],
                         "id" => 0,
                    ); $cnt++;
       }
       }
$info  = array($postArray,$portadaArray);

#    return $profileArray;
echo $json = json_encode((array)$info);

}






function getSectionCatSelect(){

global $mysqli;

/*        $result = $mysqli->query("SELECT id, first_name, last_name FROM people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profileArray, $row);
    }

*/

$sqlQuery = $mysqli->query("SELECT id, name FROM sections_categories;");
        $catArray = array();

$cnt = 0;
        while ($row = $sqlQuery->fetch_assoc()){

            $catArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$catArray);

}




function getAuthorSelect(){

global $mysqli;

/*        $result = $mysqli->query("SELECT id, first_name, last_name FROM people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profileArray, $row);
    }

*/

$sqlQuery = $mysqli->query("SELECT id, first_name, last_name FROM people;");
        $authorArray = array();

$cnt = 0;
        while ($row = $sqlQuery->fetch_assoc()){

            $authorArray[$cnt] = array (
                         "id" => $row['id'],
                         "first_name" => $row['first_name'],
                         "last_name" => $row['last_name'],
                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$authorArray);

}



function getTags(){

global $mysqli;

/*        $result = $mysqli->query("SELECT id, first_name, last_name FROM people;");
    while ($row = $result->fetch_assoc())
    {
        array_push($profileArray, $row);
    }

*/

#$sqlQuery = $mysqli->query("SELECT id, name FROM tags;");
$id = $_POST['id'];  

        $tagsArray = array();

        $query = $mysqli->query("SELECT tags.* FROM blog_post_tags LEFT JOIN (tags) ON (blog_post_tags.tag_id = tags.id) WHERE tags.name IS NOT NULL AND blog_post_tags.blog_post_id = " . $id);

/*
        $tagArray = array();
        $tagIDArray = array();

*/

#$row = $query->fetch_assoc();

      $selectedTags = array();
      $stedTags = array();
      $contador = 0;
        while($row = $query->fetch_assoc())
        {
/*
            array_push($tagArray, $row["name"]);
            array_push($tagIDArray, $row["id"]);
*/
            $stedTags[$contador] = array (
            "id" => $row["id"],
            "name" => $row["name"],
            ); $contador++;

//            $selectedTags[$row["id"]] = $row["name"];


        }


#    return $profileArray;
echo $json = json_encode( (array)$stedTags);

}



function saveSectionCategory($operacion){

$name = $_POST['section_cat_name']; $name = utf8_decode($name);

$section_cat_id = $_POST['section_cat_id'];
$pictures = explode("|" , $_POST['pictures']);

global $mysqli;

if ($operacion == 'newSectionCategory'){
$query = "INSERT INTO sections_categories SET name ='$name';";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM sections_categories ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;


        if(isset($_POST['pictures']) && $id) {

        #echo "You chose the following color(s): <br>";

            foreach ($pictures as $pict){
        #    echo $color."<br />";
            if (strlen($pict)>10){
                $query = "INSERT INTO sections_pictures SET section_cat_id='$id', picture='$pict';";
                mysqli_query($mysqli, $query);
                }
            }

        } // end brace for if(isset


        $infoArray = array('Se grabó correctamente la categoría','1',$id);
        echo $json = json_encode($infoArray);


    } else {
        echo 'No se puedo registrar la categoría';
    }

    exit(0);

} else {

$query = "UPDATE sections_categories SET name='$name' WHERE id='$section_cat_id ';";
    if(mysqli_query($mysqli, $query)){



        #echo "You chose the following color(s): <br>";

        $query = "DELETE FROM sections_pictures WHERE section_cat_id='$section_cat_id';";
        mysqli_query($mysqli, $query);
        if(isset($_POST['pictures'])) {
            foreach ($pictures as $pict){
        #    echo $color."<br />";
            if(strlen($pict)>10){
                $query2 = "INSERT INTO sections_pictures SET section_cat_id='$section_cat_id', picture='$pict';";            
                mysqli_query($mysqli, $query2);
                }
            }

        } // end brace for if(isset


        echo 'Se actualizó correctamente la categoría';

    } else {

        echo 'No se pudo actualizar la categoría';

    }
exit(0);
}



}



function saveEventCategory($operacion){

$name = $_POST['event_cat_name']; $name = utf8_decode($name);
$idCategory = $_POST['event_cat_id'];
 
global $mysqli;

if ($operacion == 'newEventCategory'){
$query = "INSERT INTO events_categories SET name ='$name';";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM events_categories ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se grabó correctamente la categoría','1',$id);
        echo $json = json_encode($infoArray);


    } else {
        echo 'No se puedo registrar la categoría';
    }

    exit(0);

} else {

$query = "UPDATE events_categories SET name='$name' WHERE id='$idCategory';";
    if(mysqli_query($mysqli, $query)){

        echo 'Se actualizó correctamente la categoría';

    } else {

        echo 'No se pudo actualizar la categoría';

    }
exit(0);
}



}



function isValidEmail($email){ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


function saveContactForm(){
global $mysqli;

#$phone = $_POST['phone']; $phone = mysqli_real_escape_string($mysqli, $phone); 
$email = $_POST['email']; $email = utf8_decode($email); $email = mysqli_real_escape_string($mysqli, $email); 
$message = $_POST["message"]; $message = utf8_decode($message); $unalteredMessage = $message;
$phone = $_POST["phone"]; $phone = mysqli_real_escape_string($mysqli, $phone);

$unalteredMessage = str_replace("\n", '<br>', $unalteredMessage);
$message = mysqli_real_escape_string($mysqli, $message); 

$first_name = $_POST['name'];$first_name = utf8_decode($first_name);$first_name = mysqli_real_escape_string($mysqli, $first_name); 
 
#$contact_newsletters = $_POST['contact_newsletters'];

$ok = isValidEmail($email);

if($ok && $message){

$modmessage = $message;

$ToEmail = 'info@lolaenbarracas.com.ar';
$ToName  = 'you';
$MessageHTML = '<h1>Consulta en formulario de contacto :</h1>
-------------------
<p>Nombre:  '.$first_name.'</p>
<p>Correo electrónico:  '.$email.'</p>
<p>Teléfono:  '.$phone.'</p>
<p>Mensaje:</p>
'.$unalteredMessage;

$MessageTEXT = 'Consulta en formulario de contacto:

-------------------

Nombre: '.$first_name.'

Correo electrónico: '.$email.'

Teléfono: '.$phone.'

Mensaje:

'.$unalteredMessage;


$Send = SendMail( $ToEmail, $MessageHTML, $MessageTEXT );
if ( $Send ) {
  echo "2";
exit(0);
}
else {
  echo "1";
exit(0);
}


}else{
echo "1";exit(0);
}

}










function saveNewsContact(){
global $mysqli;

$email = $_POST['email'];

$ok = isValidEmail($email);

if($ok){
    

    $id = $mysqli->query("SELECT id FROM newsletters_contacts WHERE email='$email' LIMIT 0,1;")->fetch_object()->id;
    if($id){echo "3";exit(0);}
    $query = "INSERT INTO newsletters_contacts SET email='$email';";
    if(mysqli_query($mysqli, $query)){echo '2';exit(0);
    }
}else{
echo "1";exit(0);
}

}




function saveMessage(){

$answered = $_POST['answered'];if($answered && $answered != '0'){$answered = 1;}else{$answered = 0;}
$id = $_POST['id'];
 
global $mysqli;

$query = "UPDATE contact_form SET answered='$answered' WHERE id='$id';";
    if(mysqli_query($mysqli, $query)){

        echo 'Se actualizó correctamente el mensaje';exit(0);

    } else {

        echo 'No se pudo actualizar el mensaje';exit(0);

    }

}


function saveProductSubCategory($operacion){

$name = $_POST['product_subcat_name'];# $name = utf8_decode($name);
#$name = utf8_decode($name);
$cat_id = $_POST['subcat_catid']; 
$idSubCategory = $_POST['idProdSubCategory']; 
$in_menu = $_POST['subcat_in_menu'];
 
if ($in_menu == 'on'){

$in_menu = 'Y';

}


global $mysqli;

if ($operacion == 'newProductSubCategory'){


$query = "INSERT INTO products_subcategories SET name ='$name' , in_menu = '$in_menu', cat_id='$cat_id';";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM products_subcategories ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se grabó correctamente la categoría','1',$id);
        echo $json = json_encode($infoArray);
    } else {
        echo "No se pudo registrar la categoría";
    }

    exit(0);

} else {

$query = "UPDATE products_subcategories SET name='$name' , in_menu='$in_menu', cat_id='$cat_id' WHERE id='$idSubCategory';";
    if(mysqli_query($mysqli, $query)){

        echo "Se actualizó correctamente la categoría";

    } else {

        echo 'No se pudo actualizar la categoría';

    }
exit(0);
}




}





function saveProductCategory($operacion){

$name = $_POST['product_cat_name'];# $name = utf8_decode($name);
#$name = utf8_decode($name);
$idCategory = $_POST['idProdCategory']; 
$in_menu = $_POST['in_menu'];
 
if ($in_menu == 'on'){

$in_menu = 'Y';

}


global $mysqli;

if ($operacion == 'newProductsCategory'){


$query = "INSERT INTO products_categories SET name ='$name' , in_menu = '$in_menu';";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM products_categories ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se grabó correctamente la categoría','1',$id);
        echo $json = json_encode($infoArray);
    } else {
        echo 'No se pudo registrar la categoría';
    }

    exit(0);

} else {

$query = "UPDATE products_categories SET name='$name' , in_menu='$in_menu' WHERE id='$idCategory';";
    if(mysqli_query($mysqli, $query)){

        echo 'Se actualizó correctamente la categoría';

    } else {

        echo 'No se pudo actualizar la categoría';

    }
exit(0);
}



}




function savePersonalizada(){

$staff_message = $_POST['p_staff_message']; $staff_message = utf8_decode($staff_message);
#$name = utf8_decode($name);
$p_status = $_POST['p_status']; 
$id = $_POST['idPersonalizada'];

global $mysqli;


$query = "UPDATE personalizadas SET p_status='$p_status' , staff_comments='$staff_message' WHERE id='$id';";
    if(mysqli_query($mysqli, $query)){

#        echo 'Se actualizó correctamente la venta';
        $infoArray = array('Se grabaron los cambios','1');
        echo $json = json_encode($infoArray);

    } else {

        $infoArray = array('No se puedo guardar los cambios','0');
        echo $json = json_encode($infoArray);

    }
exit(0);



}



function saveSale(){

$staff_message = $_POST['sale_staff_message']; $staff_message = utf8_decode($staff_message);
#$name = utf8_decode($name);
$s_status = $_POST['sale_status']; 
$id = $_POST['id'];

global $mysqli;


$query = "UPDATE sales_info SET s_status='$s_status' , staff_message='$staff_message' WHERE id='$id';";
    if(mysqli_query($mysqli, $query)){

#        echo 'Se actualizó correctamente la venta';
        $infoArray = array('Se grabó correctamente la venta','1');
        echo $json = json_encode($infoArray);

    } else {

        $infoArray = array('No se puedo actualizar la venta','0');
        echo $json = json_encode($infoArray);

    }
exit(0);



}






function saveCategory($operacion){

$name = $_POST['cat_name'];# $name = utf8_decode($name);
#$name = utf8_decode($name);
$idCategory = $_POST['idCategory']; 
$in_menu = $_POST['in_menu'];
 
if ($in_menu){

$in_menu = 1;

}


global $mysqli;

if ($operacion == 'newCategory'){


$query = "INSERT INTO categories SET name ='$name' , in_menu = '$in_menu';";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM categories ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se grabó correctamente la categoría','1',$id);
        echo $json = json_encode($infoArray);
    } else {
        echo 'No se puedo registrar la categoría';
    }

    exit(0);

} else {

$query = "UPDATE categories SET name='$name' , in_menu='$in_menu' WHERE id='$idCategory';";
    if(mysqli_query($mysqli, $query)){

        echo 'Se actualizó correctamente la categoría';

    } else {

        echo 'No se pudo actualizar la categoría';

    }
exit(0);
}



}

function createTag(){

global $mysqli;

$newTag = $_POST['newTag'];// $first_name = utf8_decode($first_name);
$tags = explode('|', $_POST['tags']);

$message = '';
$newTagId = '';

    $newTagId = $mysqli->query("SELECT id FROM tags WHERE name = '$newTag' LIMIT 0,1;")->fetch_object()->id;  

    if (!$newTagId){

$newTag = utf8_decode($newTag);
        $query = "INSERT INTO tags SET name='$newTag';";
        if(mysqli_query($mysqli, $query)){
        #echo 'Se grabó correctamente la etiqueta';

        $newTagId = $mysqli->query("SELECT id FROM tags ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
    
        }
    }
#    else echo 'No se puedo registrar el usuario';

$sqlQuery = $mysqli->query("SELECT id, name FROM tags;");

$tagsArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){
            
            if (in_array($row['id'], $tags) || $row['id'] == $newTagId){
            $tagsArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
            }
        }

#    return $profileArray;
echo $json = json_encode( (array)$tagsArray);


exit(0);


#$query = "UPDATE people SET first_name='$first_name' , last_name='$last_name', url='$url' , email='$email', self_description='$self_description', avatar='$avatar' WHERE id='$idPerson';";
#    if(mysqli_query($mysqli, $query)){echo 'Se grabó correctamente el usuario';}
#exit(0);


}



function editPage(){

global $mysqli;

$query = "SELECT name, descrip, phone, email, address, googleplus, twitter, facebook, city FROM web_info;";

if ($result = mysqli_query($mysqli, $query)) {$row = mysqli_fetch_row($result);}
//$product = array('id' => "$id",'nombre');
echo $json = json_encode($row);
}



function getAllSales(){

global $mysqli;
$where = '';
#$q = $_POST['q'];
$status = $_POST['sales_f_status'];if($status && $status != 0){$where .= "AND sales_info.s_status = '$status' "; }else{$where .= "AND sales_info.s_status != '6' ";}
$f_initdate = $_POST['sales_f_date'];if($f_initdate && $f_initdate != 'undefined'){$where .= " AND sales_info.initdate >= '$f_initdate' "; }
$t_initdate = $_POST['sales_t_date'];  if($t_initdate && $t_initdate != 'undefined'){$where .= " AND sales_info.initdate <= '$t_initdate' "; }
#$f_origin = $_POST['f_origin']; if (((int)$f_origin || $f_origin == '0') && $f_origin !='undefined'){$f_origin = (int)$f_origin; $params .= " AND origin = '$f_origin' ";}
#$f_status = $_POST['f_status'];  if (((int)$f_status || $f_status =='0')&& $f_status !='undefined'){$f_status = (int)$f_status; $params .= " AND status = '$f_status' ";}
#$f_date = str_replace('-',':',$f_date);
#if ($q){$q = "AND (events.title LIKE '%$q%' OR marker LIKE '%$q%' OR events.event LIKE '%$q%')";} else {$q = '';}





$sqlQuery = $mysqli->query("
SELECT 
sales_info.id,
sales_info.initdate,
sales_info.client_id,
sales_info.total,
sales_info.client_message,
clients.first_name,
clients.last_name,
sales_status.descrip
FROM sales_info,
clients,sales_status
WHERE
1=1
 $where
AND clients.id = sales_info.client_id
AND sales_status.id = sales_info.s_status
ORDER BY initdate DESC;");

        $salesArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){




            $salesArray[$cnt] = array (
                         "id" => $row['id'],
                         "initdate" => $row['initdate'],
                         "client_name" => $row['client_id'],
                         "total" => $row['total'],
                         "s_status" => $row['descrip'],
                         "client_message" => $row['client_message'],
                         "client_name" => $row['first_name'].' '.$row["last_name"]
                         ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$salesArray);

}



function savePage(){
global $mysqli;

$name = $_POST['name'];
$descrip = $_POST['descrip'];// $first_name = utf8_decode($first_name);
$phone = $_POST['phone']; // $last_name = utf8_decode($last_name);
$email = $_POST['email'];
$address = $_POST['address'];//  $email = utf8_decode($email);
$googleplus = $_POST['googleplus'];
$twitter = $_POST['twitter']; //$self_description = utf8_decode($self_description);
$facebook = $_POST['facebook']; //$self_description = utf8_decode($self_description);
$city = $_POST['city']; //$self_description = utf8_decode($self_description);


$query = "UPDATE web_info SET name = '$name',descrip = '$descrip',phone = '$phone',email = '$email',address = '$address',googleplus = '$googleplus',twitter = '$twitter', city = '$city',facebook = '$facebook';";
    if(mysqli_query($mysqli, $query)){echo 'Se actualizó correctamente la información del sitio.';}
exit(0);
}


function getAllReservations(){

global $mysqli;

$q = $_POST['q'];
$params = '';
$f_origin = $_POST['f_origin']; if (((int)$f_origin || $f_origin == '0') && $f_origin !='undefined'){$f_origin = (int)$f_origin; $params .= " AND origin = '$f_origin' ";}
$f_status = $_POST['f_status'];  if (((int)$f_status || $f_status =='0')&& $f_status !='undefined'){$f_status = (int)$f_status; $params .= " AND status = '$f_status' ";}
$f_date = $_POST['f_date']; if ($f_date && $f_date !='undefined'){$params .= " AND date = '$f_date' ";}
$f_hour = $_POST['f_hour']; if ($f_hour && $f_hour !='undefined'){$params .= " AND hour = '$f_hour' ";}


$f_date = str_replace('-',':',$f_date);


#if ($q){$q = "AND (events.title LIKE '%$q%' OR marker LIKE '%$q%' OR events.event LIKE '%$q%')";} else {$q = '';}



$sqlQuery = $mysqli->query("
SELECT 
* 
FROM reservations
WHERE
1=1
$params
ORDER BY date DESC, hour DESC;");


$myfile = fopen("/tmp/query.txt", "w") or die("Unable to open file!");
$txt = "SELECT 
* 
FROM reservations
WHERE
1=1
$params
ORDER BY date DESC, hour DESC;";
fwrite($myfile, $txt);
#$txt = "Jane Doe\n";
#fwrite($myfile, $txt);
fclose($myfile);


        $sectionsArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){

            $sectionsArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                         "lastname" => $row['lastname'],
                         "phone" => $row['phone'],
                         "email" => $row['email'],
                         "qty_with_baggage" => $row['qty_with_baggage'],
                         "qty_without_baggage" => $row['qty_without_baggage'],
                         "origin" => $row['origin'],
                         "date" => $row['date'],
                         "hour" => $row['hour'],
                         "message" => $row['message'],
                         "staff_message" => $row['staff_message'],
                         "status" => $row['status'],
                         
                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$sectionsArray);

}

function getAllEvents(){

global $mysqli;

$q = $_POST['q'];

if ($q){$q = "AND (events.title LIKE '%$q%' OR marker LIKE '%$q%' OR events.event LIKE '%$q%')";} else {$q = '';}

$sqlQuery = $mysqli->query("
SELECT 
events.id, 
events.title, 
markers.name marker, 
events_categories.name category, 
events.date_posted, 
events.published, 
events.initdate 
FROM events, markers, events_categories
WHERE
events.category = events_categories.id
AND
events.marker = markers.id
$q ORDER BY events.initdate DESC;");
        $sectionsArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){

            $sectionsArray[$cnt] = array (
                         "id" => $row['id'],
                         "title" => $row['title'],
                         "marker" => $row['marker'],
                         "category" => $row['category'],
                         "date_posted" => $row['date_posted'],
                         "published" => $row['published'],
                         "initdate" => $row['initdate'],
                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$sectionsArray);

}

function editEvent(){

global $mysqli;

$query = "SELECT 


 FROM web_info;";

if ($result = mysqli_query($mysqli, $query)) {$row = mysqli_fetch_row($result);}
//$product = array('id' => "$id",'nombre');
echo $json = json_encode($row);
}



function getAllSections(){

global $mysqli;

$sqlQuery = $mysqli->query("SELECT 
sections.id, sections.title, sections.date_posted, sections.published, sections.last_modified, sections_categories.name category FROM sections,sections_categories WHERE sections.category = sections_categories.id;");
        $sectionsArray = array();

$cnt = 0;

        while ($row = $sqlQuery->fetch_assoc()){

            $sectionsArray[$cnt] = array (
                         "id" => $row['id'],
                         "title" => $row['title'],
                         "date_posted" => $row['date_posted'],
                         "published" => $row['published'],
                         "last_modified" => $row['last_modified'],
                         "category" => $row['category'],
                    ); $cnt++;
        }


#    return $profileArray;
echo $json = json_encode( (array)$sectionsArray);

}






function saveSection($operacion){

global $mysqli;

$title = $_POST['title']; $title = utf8_decode($title);
$sectionHtml = $_POST['sectionHtml']; $sectionHtml = mysqli_real_escape_string($mysqli, $sectionHtml);
$descrip = $_POST['descrip'];$descrip = utf8_decode($descrip);
$published = $_POST['published'];
$idSection = $_POST['idSection'];
$idCategory = $_POST['sections_category_id'];
$sectionPict = $_POST['sectionPict'];
$date_posted = $_POST['date_posted'];

if($date_posted){
    $date_posted = str_replace('-',':',$date_posted);
//    $date_posted = strtotime($date_posted);
}
 
#$sectionHtml= str_replace("'", "\'", $sectionHtml);



if ($operacion == 'newSection'){
$query = "INSERT INTO sections SET title ='$title' , content='$sectionHtml', published='$published' , date_posted='$date_posted', descrip='$descrip', category='$idCategory', sectionPict ='$sectionPict' ,last_modified = NOW();";
    if(mysqli_query($mysqli, $query)){

        $id = $mysqli->query("SELECT id FROM sections ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
        $infoArray = array('Se grabó correctamente la sección','1',$id);
        echo $json = json_encode($infoArray);

    } else {
        echo 'No se puedo registrar la sección';
    }

    exit(0);

} else {

$query = "UPDATE sections SET title ='$title' , descrip ='$descrip', content='$sectionHtml', published='$published', category='$idCategory', sectionPict ='$sectionPict' , last_modified = NOW(), date_posted='$date_posted' WHERE id='$idSection';";
    if(mysqli_query($mysqli, $query)){

        echo 'Se actualizó correctamente la sección';

    } else {

        echo 'No se pudo actualizar la sección';

    }
exit(0);
}



}






function CSVExport() {

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
}


function updatePrice(){

    global $mysqli;

    $products = explode("|" , $_POST['products_ids']);
    $newPrice = $mysqli->real_escape_string($_POST['newPrice']);

    $in = implode(",", $products);
    $in = ltrim($in, ',');

    $SQL = "UPDATE products SET price='{$newPrice}' WHERE id IN ($in)";

    if(!mysqli_query($mysqli, $SQL)){

        $infoArray = array('No se pudo actualizar los precios','0');
        echo $json = json_encode($infoArray);
        die;
    }

    $infoArray = array('Se actualizaron correctamente los precios','1');
    echo $json = json_encode($infoArray);
    die;
}


?>
