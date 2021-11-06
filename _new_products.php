<?php

$file_name = "Nuestro Catalogo - ";
$file_id = 9;

$laconcha = 1;
include ('header.php'); 
$products_section = '1';

?>



<?php 


if (!$products){

#$descs = GetProdNavPath("","","","");

$categoryName = $descs[0]; 
$subcategoryName = $descs[1]; 
$categoryID = $descs[2]; 

$filters = $descs[3];
$level = $descs[4];
$pathUrl = '';


?>


  <!-- Breadcrumbs -->

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">Home</a><span>&raquo;</span></li>
            <?php

            $catUrlName = seoUrl($categoryName);
            $subcatUrlName = seoUrl($subcategoryName);
            $queryLink = '';
            if( strlen($categoryName) > 0){?> <li><a href="/productos/cat/<?php echo $categoryID."-".$catUrlName; ?>"><?php echo $categoryName;?></a></li> <?php }
            if( strlen($subcategoryName) > 0){?><li><span>&raquo;</span><a href="/productos/subcat/<?php echo $inProdSubCategoryId."-".$subcatUrlName; ?>"><?php echo $subcategoryName;?></a></li> <?php }

            ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End --> 

  <!-- Main Container -->
  <div class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
          <!--<div class="toolbar">

          </div>-->
      </div>
      <br>
      <div class="row">

        <?php

$mainCols = 12;

if($filters){

    $mainCols = 9;

?>
        <aside class="left sidebar col-sm-3 col-xs-12">
          <div class="category-sidebar">
            <div class="sidebar-title">
              <h3>Categorías</h3>
            </div>
            <ul class="product-categories">

<?php 

if ($level == 2){$pathUrl = "/productos/subcat/";}else{$pathUrl = "/productos/cat/";}

foreach($filters as $fl){

$filterurl = $fl["id"].'-'.seoUrl($fl["name"]).$queryLink;

?>

    <li class="cat-item current-cat cat-parent"><a href="<?php echo $pathUrl.$filterurl; ?>"><?php echo $fl["name"];?></a>

<?php if($level != 2 ) { ?>
   <ul>
    <?php foreach ($fl["subcatArray"] as $subcatArray ){

    $suburl = "/productos/subcat/".$subcatArray["id"].'-'.seoUrl($subcatArray["name"]).$queryLink;
    
    ?>
    <li><a href="<?php echo $suburl;?>"><?php echo $subcatArray["name"]; ?></a></li>
    <?php } ?>
    </ul>

    </li>



<?php
    }
}
?>
            </ul>
          </div>
        </aside>
<?php

 }


 ?>

        <div class="col-main col-sm-<?php echo $mainCols;?>">
          <div class="page-title">
            <h2><?php if($subcategoryName){echo $subcategoryName .' - '.$categoryName;} else if($categoryName){echo $categoryName;} ?></h2>
          </div>
          <div class="product-grid-area">
             <br>
             <h3>No se han encontrado Productos con ese criterio de búsqueda.</h3>
              <button class="btn btn-primary"> <i class="fa fa-home"></i>  Volver al home</button>
              <a data-target=".bs-example-modal-lg" data-toggle="modal" class="btn btn-success"> <i class="fa fa-search"></i> Volver a realizar una búsqueda. </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Container End --> 
  <!-- Footer -->

<?php 
#if products
} else{

$resultado = count($products);

#si es un solo producto
if($resultado == 1 && $inProdId > 0){

    foreach ($products as $prod)
    { 

    $id = $prod->id;
    $name = $prod->name;
    $stock = $prod->stock;
    $short_desc = $prod->short_desc;
    $long_desc = $prod->long_desc;
    $price = $prod->price;
    $has_strikethrough_price = $prod->has_strikethrough_price;
    $strikethrough_price = $prod->strikethrough_price;
    $image = '/fotos/productos/1439.png';
    $size = $prod->size;
    $measures = $prod->measures;
    $material = $prod->material;
    $colors = $prod->colors;
    $code = $prod->code;
    $category_id = $prod->category_id;
    $category_name = $prod->category_name;
    $subcategory_name = $prod->subcategory_name;
    $subcategory_id = $prod->subcategory_id;
    $subcategory_url = $subcategory_id.'-'.seoUrl($subcategory_name);
    $category_url = $category_id.'-'.seoUrl($category_name);
    $picturesArray = $prod->picturesArray;
    $colorsArray = $prod->colorsArray;
    $waistsArray = $prod->waistsArray;
    $has_waists = $prod->has_waists;
    $has_child_waists = $prod->has_child_waists;
    $has_women_waists = $prod->has_women_waists;
    $has_men_waists = $prod->has_men_waists;

   }


?>

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">Home</a><span>&raquo;</span></li>
        <?php if($category_name){echo "<li class='category13'><a href='/productos/cat/$category_url'>".$category_name."</a><span>&raquo;</span></li>";} ?>
        <?php if($subcategory_name){echo "<li class='category13'><a href='/productos/subcat/$subcategory_url'>".$subcategory_name."</a></li>";} ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End --> 
  <!-- Main Container -->
  <div class="main-container col1-layout">
  <div class="container">
    <div class="row">
      <div class="col-main">
        <div class="product-view-area">
          <div class="product-big-image col-xs-12 col-sm-5 col-lg-5 col-md-5">
           <!-- <div class="icon-sale-label sale-left">Sale</div>-->
<?php

$cntImagenes = 1;

foreach($picturesArray as $pictArray){

    if($pictArray["picture"] && $cntImagenes == 1){

    $image = $pictArray["picture"];
    }$cntImagenes++;

}
?>
            <div class="large-image">
                <a href="/fotos/articulos/<?php echo $image;?>" class="cloud-zoom" id="zoom1" rel="useWrapper: false, adjustY:0, adjustX:20" style="position: relative; display: block;">
                    <img class="zoom-img" src="/fotos/articulos/<?php echo $image;?>" alt="<?php echo $name; ?>" style="display: block; visibility: visible;" >
                </a>
            </div>
            <div class="flexslider flexslider-thumb">
                <div class="flex-viewport" style="overflow: hidden; position: relative;">

                    <ul class="previews-list slides">
                    <?php
                    $cntImagenes = 1;
                    foreach($picturesArray as $pictArray){
                    ?>

                    <li style="width: 100px; float: left; display: block;">
                        <a href='/fotos/articulos/<?php echo $pictArray["picture"];?>' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: '/fotos/articulos/<?php echo $pictArray["picture"];?>' ">
                            <img src="/fotos/articulos/<?php echo $pictArray["picture"];?>" alt="Thumbnail 1" draggable="false"/>
                        </a>
                    </li>
                    <?php
                    $cntImagenes++;
                    }
                    ?>
                    </ul>
                </div>

                <ul class="flex-direction-nav">
                    <li><a class="flex-prev flex-disabled" href="#" tabindex="-1"></a></li>
                    <li><a class="flex-next" href="#"></a></li>
                </ul>

            </div>
            
            <!-- end: more-images --> 
            
          </div>
          <div class="col-xs-12 col-sm-7 col-lg-7 col-md-7">
            <div class="product-details-area">
              <div class="product-name">
                <h1><?php echo $name;?></h1>
              </div>
              <div class="price-box">
                <?php if($price != '' && $price != '0.00'){?><p class="special-price"> <span class="price">Precio:</span> <span class="price"> $<?php echo $price;?></span> </p><?php } ?>
                <?php if($has_strikethrough_price == 'Y'){ ?>
                <p class="old-price"> <span class="price-label">Precio Regular:</span> <span class="price"> $<?php echo $strikethrough_price;?> </span> </p>
                <?php } ?>
              </div>
              <div class="ratings">
                <p class="availability in-stock">Disponibilidad: <span>En Stock</span></p>
              </div>
             <?php if($short_desc){ ?>
              <div class="short-description">
                <h2>Descripción</h2>
                <p><?php echo $short_desc;?> </p>
               
              </div>
              <?php } ?>


              <div class="product-color-size-area">
                <div class="color-area">
                  <h2 class="saider-bar-title">Colores</h2>
                  <div class="color">
                    <ul>
                    <?php
                    $cntColores = 1;

                    foreach($colorsArray as $colorArray){

                    ?>
                        <li>
                            <a href='#' class="colors" onclick="selectColor('<?php echo $colorArray["color_id"];?>');return false;" title="<?php echo $colorArray["desc"];?>" id="c<?php echo $colorArray["color_id"];?>">
                                <div  style="background-image: url('/images/colors/<?= $colorArray['picture']; ?>');width: 30px; height:30px;border:solid BLACK 1px" class="tickcontainer" id="b<?php echo $colorArray["color_id"];?>">

                                </div>
                            </a>
                        </li>
                    <?php
                    $cntColores++;
                    }
                    ?>
                    </ul>
                  </div>
                </div>

                <input type="hidden" name="p_type" id="p_type" value="<?php echo $p_type;?>">

                <?php if($has_waists == 'Y'){ ?>
                <div class="size-area">
                  <h2 class="saider-bar-title">Talles</h2>
                  <div class="size">

                      <?php if($has_women_waists > 0){?>
                   <div class="col-sm-12" >
                       <p></p>
                    <p>Prendas</p>
                       <select style="width: 100%;" onchange="selectWaist(this);return false;" name="women" id="women">
                           <option value="0">Seleccione un talle</option>
                           <?php foreach($waistsArray as $wa){
                               if($wa['group'] == 'W'){
                                   ?>
                                   <option class="waists" value="<?php echo $wa["waist_id"];?>" ><?php echo $wa["desc"]; ?></option>
                               <?php }
                           }
                           ?>
                       </select>
                   </div>
                      <?php }

                      if($has_men_waists > 0){?>
                   <div class="col-sm-12" >
                       <p></p>
                    <p>Calzado</p>

                       <select style="width: 100%;" onchange="selectWaist(this);return false;" name="men" id="men">
                           <option value="0">Seleccione un talle</option>

                           <?php foreach($waistsArray as $wa){

                               if($wa['group'] == 'M'){
                                   ?>
                                   <option value="<?php echo $wa["waist_id"];?>" ><?php echo $wa["desc"]; ?></option>

                               <?php }

                           }

                           ?>
                       </select>

                   </div>
                      <?php
                      }
                      ?>
                  </div>
<?php }?>
                </div>
              </div>

              <div class="product-variation">
                <form action="#" method="post">
                  <div class="cart-plus-minus">
                    <label for="qty">Cantidad:</label>
                    <div class="numbers-row">
                      <div onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 0 ) result.value--;return false;" class="dec qtybutton"><i class="fa fa-minus">&nbsp;</i></div>
                      <input type="text" class="qty" title="Qty" value="1" maxlength="12" id="qty" name="qty">
                      <div onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;" class="inc qtybutton"><i class="fa fa-plus">&nbsp;</i></div>
                    </div>
                  </div>
                    <input type="hidden" id="chosen_color" name="chosen_color" value="">
                    <input type="hidden" id="chosen_waist" name="chosen_waist" value="">
                    <input type="hidden" id="chosen_type" name="chosen_type" value="">
                    <input type="hidden" id="has_waists" name="has_waists" value="<?php echo $has_waists;?>">
                    <input type="hidden" id="p_id" name="p_id" value="<?php echo $id;?>">
                   <!-- <?php /*if($price > '0.00'){*/?><a  href="#" onclick="buy();">
                        <button href="#" class="button pro-add-to-cart" title="Agregar al carrito" type="button">
                            <span><i class="fa fa-shopping-cart"></i> Hacé tu pedido</span></button></a>--><?php /*} */?>

                    <?php if ( $price > 0 && $stock > 0 ){ ?>
                        <a href="#" onclick="buy();"><button href="#" class="button pro-add-to-cart" title="Agregar al carrito" type="button"><span><i class="fa fa-shopping-cart"></i> Comprar</span></button></a>
                    <?php } else { ?>
                        <a href="#"> <img src="/images/boton_whasapp_normal1.png"></a>
                    <?php } ?>
                </form>
              </div>
             <div class="product-color-size-area">
                <div class="">
                  <h2 class="saider-bar-title">Compartir</h2>
                  <div class="">
                    <ul>
                     <li style="margin-right:20px;float:left;"><a target="_blank"  href="http://www.facebook.com/sharer.php?u=<?php echo "$thisUrl";?>"><i class="fa fa-facebook fa-2x"></i></a></li>
                     <li style="margin-right:20px;float:left;"><a target="_blank" href="http://twitter.com/share?url=<?php echo "$thisUrl";?>&text=<?php echo "$pageTitle";?>"><i class="fa fa-twitter fa-2x"></i></a></li>
                     <li style="float:left;"><a target="_blank" href="https://plus.google.com/share?url=<?php echo "$thisUrl";?>"><i class="fa fa-google-plus fa-2x"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-overview-tab wow fadeInUp">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                <li class="active"> <a href="#description" data-toggle="tab"> Descripción </a> </li>
              </ul>
              <div id="productTabContent" class="tab-content">
                <div class="tab-pane fade in active" id="description">
                  <div class="std">
                    <p><?php echo $long_desc;?> </p>
                  </div>
                </div>

                
                
              </div>
                <div id="productTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="description">
                        <div class="std">

                            <div id="fb-root"></div>
                            <script>(function(d, s, id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s); js.id = id;
                                    js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document, 'script', 'facebook-jssdk'));</script>

                            <div class="fb-comments" data-href="<?php echo $thisUrl;?>" data-numposts="5"></div>
                        </div>
                    </div>



                </div>
            </div>
          </div>
        </div>
      </div>
    
      
      

      
      
      
    </div>
  </div>
</div>

<!-- Main Container End --> 







<?php 

#else resultado > 1
} else if ($resultado >= 1 && ($inProdCategoryId > 0 || $inProdId == 'all' || $inProdSubCategoryId > 0 )){

$categoryName = $descs[0];
$subcategoryName = $descs[1];
$categoryID = $descs[2];

$filters = $descs[3];
$level = $descs[4];
$pathUrl = '';


?>




  <!-- Breadcrumbs -->

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Home" href="/">Home</a></li>

<?php

global $catUrlName;
$catUrlName = seoUrl($categoryName);
global $subcatUrlName;
$subcatUrlName = seoUrl($subcategoryName);
$subtype = $_GET['subtype'];
$type = $_GET['type'];

$queryLink = '';


if($prodquery && $type) {
    $queryLink = '?query=' . $prodquery . '&type=' . $type;
}else if($prodquery && $subtype){
        $queryLink = '?query='.$prodquery.'&subtype='.$subtype;
} else if($prodquery){
    $queryLink = '?query='.$prodquery;
} else if($type){
    $queryLink = '?type='.$type;
} else if($subtype){
    $queryLink = '?subtype='.$subtype;
}

if($type){
    $typebread = getTypesInfo($type);
}elseif($subtype){
    $subtypebread = getSubTypesInfo($subtype);
}

?>



              <?php if($subtypebread){ ?>
                  <li><span>&raquo;</span><a href="/productos/all/?subtype=<?php echo $subtypebread["id"];?>">
                          <?php echo $subtypebread["tipo"].'<span>&raquo;</span>'.$subtypebread["subtipo"];?></a>
                  </li>
              <?php } elseif ($typebread) {?>

                  <li><span>&raquo;</span><a href="/productos/all/?type=<?php echo $typebread["id"];?>">
                          <?php echo $typebread["desc"];?></a>
                  </li>
              <?php } ?>

    <?php if( strlen($categoryName) > 0){?> <li><span>&raquo;</span><a href="/productos/cat/<?php echo $categoryID."-".$catUrlName.$queryLink; ?>"><?php echo $categoryName;?></a></li> <?php } ?>
    <?php if( strlen($subcategoryName) > 0){?><li><span>&raquo;</span><a href="/productos/subcat/<?php echo $inProdSubCategoryId."-".$subcatUrlName.$queryLink; ?>"><?php echo $subcategoryName;?></a></li> <?php } ?>



          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End -->



  <!-- Main Container -->
  <div class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
      </div>
      <br>
      <div class="row">

<?php

$mainCols = 12;
$prodCols = 4;

if($filters && !$_GET['query'] ){

    $mainCols = 9;
    $prodCols = 3;

?>


        <aside class="sidebar col-sm-3">
          <div class="category-sidebar">
            <div class="sidebar-title">
              <h3>Categorías</h3>
            </div>



            <ul class="product-categories">

<?php

if ($level == 2){$pathUrl = "/productos/subcat/";}else{$pathUrl = "/productos/cat/";}

foreach($filters as $fl){

$filterurl = $fl["id"].'-'.seoUrl($fl["name"]).$queryLink;

?>

    <li class="cat-item current-cat cat-parent"><a href="<?php echo $pathUrl.$filterurl; ?>"><?php echo $fl["name"];?></a>

<?php if($level != 2 ) { ?>
   <ul>
    <?php foreach ($fl["subcatArray"] as $subcatArray ){

    $suburl = "/productos/subcat/".$subcatArray["id"].'-'.seoUrl($subcatArray["name"]).$queryLink;

    ?>
    <li><a href="<?php echo $suburl;?>"><?php echo $subcatArray["name"]; ?></a></li>
    <?php } ?>
    </ul>

    </li>



<?php
    }
}
?>


            </ul>





          </div>


        </aside>
<?php

 }


 ?>



        <div class="col-main col-sm-<?php echo $mainCols;?>">
          <div class="page-title">
            <h2><?php if($subcategoryName){echo $subcategoryName .' - '.$categoryName;} else if($categoryName){echo $categoryName;} ?></h2>
          </div>
          <div class="product-grid-area">
            <ul class="products-grid">

<?php
    foreach ($products as $prod)
    {

    $id = $prod->id;
    $name = $prod->name;$urlName = seoUrl($name);
    $short_desc = $prod->short_desc;
    $price = $prod->price;
    //$price2 = $prod->price2;
    //$price3 = $prod->price3;
    $strikethrough_price = $prod->strikethrough_price;
    #$image = "/beta3/fotos/productos/1439.png";
    $picturesArray = $prod->picturesArray;

$cnt = 1;

foreach($picturesArray as $pictArray){

if($cnt == 1){

    if($pictArray["picture"]){

    $image = $pictArray["picture"];

    }
}
$cnt++;
}
?>



              <li class="item col-lg-4 col-md-4 col-sm-6 col-xs-6 wow fadeInUp">
                <div class="product-item">
                  <div class="item-inner">
                    <div class="product-thumbnail">
                      <div class="pr-img-area"><figure><a href="/productos/<?php echo $id."-".$urlName; ?>"> <img class="first-img" src="/fotos/articulos/<?php echo $images_height.'x'.$images_width.$image; ?>" alt=""> <img class="hover-img" src="/fotos/articulos/<?php echo $images_height.'x'.$images_width.$image; ?>" alt=""></a></figure>
                      </div>
                    </div>
                    <div class="item-info">
                      <div class="info-inner">
                        <div class="item-title"> <a title="<?php echo $name; ?>" href="/productos/<?php echo $id."-".$urlName; ?>"><?php echo $name; ?></a> </div>
                        <div class="item-content">
                          <div class="item-price">
                            <div class="price-box"> <span class="regular-price">
                                    <span class="price">
                                        $<?php if($price > "0.00") {
                                            echo $price;
                                        }?>
                                    </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

<?php

# final foreach products
    }

?>

            </ul>
          </div>
          <div class="pagination-area wow fadeInUp">
            <ul>

            <?php echo $pagesLinks; ?>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Container End -->

<?php
}

}

?>


<?php 

include('footer.php');

?>

