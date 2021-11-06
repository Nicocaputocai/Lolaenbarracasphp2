<?php if($_GET['unsetCkies']){
                setcookie("active_sale", "", time()-3600);
                unset($_COOKIE["active_sale"]);
}?>
<!DOCTYPE html>
<html lang="en">
<?php
if($noIncludes !=1){
include 'includes/includes.php';
include 'includes/configs.php';
}
$cart = 0;
$products_section = 0;

$author = '';
$inTagId = '';
$inSectionId = '';
$inId = '';
$limit = '5';
$thisUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$start = '0';
if($_GET['currentpage']){
        $start = $_GET['currentpage'];
}

if(isset($_GET['inSectionId'])){
    $inSectionId = $_GET['inSectionId']; 
    $sections = GetSections("$inSectionId","");
    $mode = 'inSectionId';$pageid = $inSectionId; // id u "All"
}else if(isset($_GET['contact'])){
    $mode = 'contact';$pageid = 0;

} else if(isset($_POST['q'])){
    $qString= $_POST['q'];
    $blogArray = GetBlogPosts('','','',"$limit",'','1',"$qString",$start);
    $blogPosts = $blogArray[0];
    $foundRows = $blogArray[1];
    $pagesLinks = $blogArray[2];
    $mode = 'q';$pageid = '';
} else if (isset($_GET['inTagId'])){
    $inTagId = $_GET['inTagId'];
    $blogArray = GetBlogPosts('',"$inTagId",'',"$limit",'','1','',$start);
    $blogPosts = $blogArray[0];
    $foundRows = $blogArray[1];
    $pagesLinks = $blogArray[2];
    $mode = 'inTagId';$pageid = $inTagId;
} else if (isset($_GET['inCategoryId'])){
    $inCategoryId = $_GET['inCategoryId'];
    $blogArray = GetBlogPosts('','','',"$limit","$inCategoryId",'1','',$start);
    $blogPosts = $blogArray[0];
    $foundRows = $blogArray[1];
    $pagesLinks = $blogArray[2];
    $mode = 'inCategoryId';$pageid = $inCategoryId;
} else if (isset($_GET['inId'])){
    $inId = $_GET['inId'];
    $blogArray = GetBlogPosts("$inId",'','',"$limit",'','1','',$start);
    $blogPosts = $blogArray[0];
    $foundRows = $blogArray[1];
    $pagesLinks = $blogArray[2];
    $mode = 'inId';$pageid = $inId;
} else if(isset($_GET['not_found']) ) {

    $blogArray = GetBlogPosts('','','',"$limit",'','1','');
    $blogPosts = $blogArray[0];
    $foundRows = $blogArray[1];
    $pagesLinks = $blogArray[2];
    $mode = 'not_found';$pageid = '';

} else if (isset($_GET['inProdCategoryId'])){
    $inProdCategoryId = $_GET['inProdCategoryId'];
    //$blogPosts = GetBlogPosts("$inId",'','',"$limit",'','1','');
    $prodquery = '';
    $subtype = '';
    $type = '';
    if (isset($_GET['query'])){
        $prodquery = $_GET['query'];
    }
    if (isset($_GET['type'])){
        $type = $_GET['type'];
    }
    if (isset($_GET['subtype'])){
        $subtype = $_GET['subtype'];
    }
    $product_brand = '';

    $productsArray = GetProducts("","$inProdCategoryId","","9","$start","$prodquery","0","$type","$subtype");


    $products = $productsArray[0];
    $foundRows = $productsArray[1];
    $pagesLinks = $productsArray[2];
    $mode = 'inProdCategoryId';$pageid = $inProdCategoryId;

} else if (isset($_GET['inProdSubCategoryId'])){

    $inProdSubCategoryId = $_GET['inProdSubCategoryId'];
    $prodquery = '';
    $type = '';
    $subtype = '';
    if (isset($_GET['query'])){

        $prodquery = $_GET['query'];

    }
    if (isset($_GET['type'])){
        $type = $_GET['type'];
    }
    if (isset($_GET['subtype'])){
        $subtype = $_GET['subtype'];
    }
    $mode = 'inProdSubCategoryId';$pageid = $inProdSubCategoryId;

    $productsArray = GetProducts("","","$inProdSubCategoryId",9,"$start","$prodquery","0", $type, $subtype);

    $products = $productsArray[0];
    $foundRows = $productsArray[1];
    $pagesLinks = $productsArray[2];

} else if (isset($_GET['inProdId'])){
    $inProdId = $_GET['inProdId'];
    //$blogPosts = GetBlogPosts("$inId",'','',"$limit",'','1','');
    if($inProdId == 'all'){

        $type = '';
        $subtype = '';
        if (isset($_GET['type'])){
            $type = $_GET['type'];
        }
        if (isset($_GET['subtype'])){
            $subtype = $_GET['subtype'];
        }
        $prodquery = '';
        if (isset($_GET['query'])){
            $prodquery = $_GET['query'];
        }

        $productsArray = GetProducts("$inProdId","","","9","$start","$prodquery","0",$type,$subtype);
    }else{
        $productsArray = GetProducts("$inProdId","","","","","","0");

    }
    $products = $productsArray[0];
    $foundRows = $productsArray[1];
    $pagesLinks = $productsArray[2];
    $mode = 'inProdId';$pageid = $inProdId;
}

$descs = GetProdNavPath($inProdSubCategoryId,$inProdCategoryId,$prodquery,$type,$subtype);

$pageInfo = GetPageInfo();
$pageTitle = GetPageTitle($mode,$pageid);

if($laconcha != '1'){

if (strlen($pageTitle) <= 1 && $pageInfo['name']){$pageTitle = $pageInfo['name'];} else if($file_name != 9 && $inProdId <= 0){$pageTitle = $file_name;}
}else{
}

$productsCatNavArray = array();

$productsCatNavArray = getProductsCatNav();

?>
<?php if ($inId > 0 && $inId != 'all'){ 
    foreach ($blogPosts as $post){ $pageTitle = $post->title; $mainPostPict = $post->postPict; }
?>
<meta property="og:image" content="http://www.lolaenbarracas.com.ar/fotos/articulos/<?php echo $mainPostPict ?>"/>
<?php } else if ($inProdId > 0 && $inProdId != 'all'){

    foreach ($products as $prod ){ $pageTitle = $prod->name;

    $picturesArray = $prod->picturesArray;

    $pictCnt = 0;
    $descripPict = '';
        foreach($picturesArray as $pictArray){

            if($pictArray["picture"]){
                 if($pictCnt == 0){$descripPict = $pictArray["picture"];break; }

            }
        }



     $mainProdPict = $prod->product; 
     }
?>
<meta property="og:image" content="http://www.lolaenbarracas.com.ar/fotos/articulos/<?php echo $descripPict ?>"/>

<?php 




}

    if(isset($_COOKIE["active_sale"])) {
        $cookieValue = $_COOKIE["active_sale"];
        $tempArray = explode('-', $cookieValue);
        $sales_id = $tempArray[1];
        $random_cookie = $tempArray[0];

        $isAlive = checkSaleStatus($sales_id);

        if($isAlive){
            list($sales_products,$totalPrice,$envio) = bringCartList($sales_id,$random_cookie);
        }else{
            setcookie("active_sale", "", time()-3600, '/');
            unset($_COOKIE["active_sale"]);
        }

    }
?>

<head>
<!-- Basic page needs -->
<meta charset="utf-8">
<!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <![endif]-->
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title><?php echo $pageTitle;?></title>
<meta name="description" content="">

<!-- Mobile specific metas  -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Favicon  -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">

<!-- Google Fonts -->
<link href='https://fonts.googleapis.com/css?family=Karla:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200italic,300,300italic,400,400italic,600,600italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Dancing+Script:400,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700,300' rel='stylesheet' type='text/css'>

<!-- CSS Style -->

<!-- Bootstrap CSS -->
<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">

<!-- font-awesome & simple line icons CSS -->
<link rel="stylesheet" type="text/css" href="/css/font-awesome.css" media="all">
<link rel="stylesheet" type="text/css" href="/css/simple-line-icons.css" media="all">

<!-- owl.carousel CSS -->
<link rel="stylesheet" type="text/css" href="/css/owl.carousel.css">
<link rel="stylesheet" type="text/css" href="/css/owl.theme.css">

<!-- flexslider CSS -->
<link rel="stylesheet" type="text/css" href="/css/flexslider.css" >


<!-- slider CSS  -->
<link rel="stylesheet" type="text/css" href="css/slider.css" media="all">


<!-- animate CSS  -->
<link rel="stylesheet" type="text/css" href="/css/animate.css" media="all">

<!-- jquery-ui.min CSS  -->
<link rel="stylesheet" href="/css/jquery-ui.css">

<!-- main CSS -->
<link rel="stylesheet" type="text/css" href="/css/main.css" media="all">

<!-- blog CSS -->
<link rel="stylesheet" type="text/css" href="/css/blog.css" media="all">

<!-- style CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css" media="all">
</head>



<?php


$baseUrl = '/productos/all';

?>

<body class="about_us_page">

<!-- mobile menu -->
<div id="mobile-menu">
  <ul>
    <li><a href="/" class="home1">Home</a>
    </li>
    <li><a href="#">Catálogo</a> 
      <!--sub sub category-->
      <ul>

       <li><a href="/productos/all/"><span>Todos</span></a></li>
          <?php
          foreach ( $productsCatNavArray as $category )
          {
          ?>
              <li><a href="/productos/cat/<?= seoUrl($category['id'].'-'.$category["name"]); ?>"><span><?= $category["name"]; ?></span></a></li>
          <?php
          }
          ?>
      </ul>
	  
    </li>
    <!--<li><a href="/personalizadas.php">Personalizadas</a>-->
    </li>
    <!--<li><a href="/medidas_talles.php" class="home1">Medidas de talles</a>
    </li>
    <li><a href="/quienes_somos.php" class="home1">Quienes Somos</a>
    </li>-->
    <li><a href="/contacto.php" class="home1">Contacto</a>
    </li>
  </ul>
</div>

<!-- end mobile menu -->


<div id="page"> 
  <!-- Header -->
  <header>
    <div class="header-container">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5 col-sm-5 col-xs-6 language-currency-wrapper">
              <div class="inner-cl">
                <div class="block block-language form-language">
                  <div class="lg-cur"><!-- <span> <img src="/images/flag-default.jpg" alt="French"> <span class="lg-fr">French</span> <i class="fa fa-angle-down"></i>  </span> --> </div>
                </div>
                <div class="block block-currency">
                  <div class="item-cur"></div>
                </div>
              </div>
              <!-- Default Welcome Message -->
              <div class="welcome-msg hidden-xs">Bienvenidos a nuestra web</div>
              <!-- End Default Welcome Message --> 
            </div>
            <!-- top links -->
            <div class="headerlinkmenu col-lg-8 col-md-7 col-sm-7 col-xs-6">
            <div class="social col-sm-2 col-xs-12">
            
          </div>
              
              <div class="top-search">
                <div class="block-icon pull-right"> <a data-target=".bs-example-modal-lg" data-toggle="modal" class="search-focus dropdown-toggle links"> <i class="fa fa-search"></i> </a>
                  <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
                          <h4 id="gridSystemModalLabel" class="modal-title">Buscar Productos</h4>
                        </div>
                        <div class="modal-body">
                          <form action="/productos/all/" method="GET" class="navbar-form">
                            <div id="search">
                              <div class="input-group">
                                  <?php if (!$prodquery){$placeholder = " placeholder=\"Búsqueda\" ";} else {$placeholder = "value=\"$prodquery\"";} ?>
                                  <input id="query" name="query" <?php echo $placeholder ?>  class="form-control" type="text">
                                  <button type="submit" class="btn-search"><i class="fa fa-search"></i></button>
 

                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- End Search --> 
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-xs-12"> 
            <!-- Header Logo -->
            <div class="logo"><a title="Lola en Barracas" href="/"><img alt="Lola en Barracas" src="/images/logo.png"></a> </div>
            <!-- End Header Logo --> 
          </div>
          <!--support client-->
          <div class="col-xs-8 col-sm-5 col-md-6 hidden-xs">
            <div class="support-client">
              <div class="row">
                <div class="col-md-6 col-sm-10">
                  <div class="box-container free-shipping">
                    <div class="box-inner">
                      <h2>Envíos a todo el país</h2>
                      <p>Elegí como querés que te llegue</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 hidden-sm">
                    <div class="box-container money-back">
                    <div class="box-inner">
                      <h2>Pagá con Mercado Pago</h2>
                      <p>Con el código QR desde tu celular</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-xs-12 top-cart">
            <div class="mm-toggle-wrap">
              <div class="mm-toggle"> <i class="fa fa-align-justify"></i><span class="mm-label">Menu</span> </div>
            </div>


<?php 

if($sales_products){


$cantidad = 0;
$cantidad = count($sales_products);
?>



            <div class="top-cart-contain">
              <div class="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#"><i class="fa fa-shopping-cart"></i><span class="cart-title">Carrito (<?php echo $cantidad;?>)</span></a></div>
                <div>
                  <div class="top-cart-content">
                    <div class="block-subtitle">Producto(s) agregado(s)</div>


                    <ul id="cart-sidebar" class="mini-products-list">

<?php 

$number = 1;

foreach ($sales_products as $sales_prod) { 

$posicion = '';

if ($number % 2 == 0){$posicion = 'odd';} else {$posicion = 'even';}

$number = $number + 1;
?>


                      <li class="item <?php echo $posicion;?>"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="/fotos/articulos/<?php echo $sales_prod['picture'];?>" alt="Lorem ipsum dolor" width="65"></a>
                        <div class="product-details"> <a href="/cart.php?deleteFromCart=<?php echo $sales_prod['id']?>" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                          <p class="product-name"><a href="#"><?php echo $sales_prod['name'];?></a> </p>
                          <strong><?php echo $sales_prod['qty'];?></strong> x <span class="price">$<?php echo $sales_prod['price'];?></span> </div>
                      </li>


<?php }  ?>



                    </ul>
                    <div class="top-subtotal">Subtotal: <span class="price">$<?php echo $totalPrice;?></span></div>
                    <div class="actions">
                      <a href="/checkout.php" ><button class="btn-checkout" type="button"><i class="fa fa-check"></i><span>Realizar pedido</span></button></a>
                      <a href="/cart.php" ><button class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <span>Ver Carrito</span></button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>



<?php  }   ?>



          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header --> 
  
  <!-- Navbar -->
  <nav>
    <div class="stick-logo"><a title="Ir al home" href="/"><img alt="logo" src="/images/stick-logo.png"></a> </div>
    <div class="container">
      <div class="row">
        <div class="mtmegamenu">
            <ul>
                <li class="mt-root demo_custom_link_cms">
                    <div class="mt-root-item"><a href="/">
                            <div class="title title_font"><span class="title-text">Home</span></div>
                        </a></div>
                </li>
                <?php
                foreach ( $productsCatNavArray as $prodcategory )
                {
                ?>
                <li class="mt-root demo_custom_link_cms">
                    <div class="mt-root-item">
                        <a href="/productos/cat/<?= seoUrl($prodcategory['id'].'-'.$prodcategory["name"]); ?>">
                            <div class="title title_font"><span class="title-text"><?= $prodcategory["name"];?></span></div>
                        </a>
                    </div>
                </li>
                <?php
                }
                ?>
            <li class="mt-root">
              <div class="mt-root-item"><a href="/contacto.php">
                <div class="title title_font"><span class="title-text">Contacto</span> <!--<span class="menu-label new-menu hidden-xs">new</span>--></div>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- end nav --> 
  
